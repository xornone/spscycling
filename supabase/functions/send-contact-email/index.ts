import { serve } from "https://deno.land/std@0.168.0/http/server.ts";
import { createClient } from "npm:@supabase/supabase-js@2";

const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type, x-supabase-client-platform, x-supabase-client-platform-version, x-supabase-client-runtime, x-supabase-client-runtime-version',
};

serve(async (req) => {
  if (req.method === 'OPTIONS') {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const { name, email, subject, message } = await req.json();

    if (!name || !email || !message) {
      return new Response(JSON.stringify({ error: "Champs requis manquants" }), {
        status: 400,
        headers: { ...corsHeaders, 'Content-Type': 'application/json' },
      });
    }

    const supabaseUrl = Deno.env.get("SUPABASE_URL");
    const supabaseServiceKey = Deno.env.get("SUPABASE_SERVICE_ROLE_KEY");

    if (!supabaseUrl || !supabaseServiceKey) {
      throw new Error("Missing Supabase configuration");
    }

    const supabase = createClient(supabaseUrl, supabaseServiceKey);

    const messageId = crypto.randomUUID();
    const htmlContent = `
      <h2 style="color:#333;font-family:sans-serif;">Nouveau message depuis le site SPS Cycling</h2>
      <table style="font-family:sans-serif;font-size:15px;color:#444;border-collapse:collapse;">
        <tr><td style="padding:6px 12px 6px 0;font-weight:bold;">Nom</td><td>${name}</td></tr>
        <tr><td style="padding:6px 12px 6px 0;font-weight:bold;">Email</td><td>${email}</td></tr>
        <tr><td style="padding:6px 12px 6px 0;font-weight:bold;">Sujet</td><td>${subject || "Non spécifié"}</td></tr>
      </table>
      <hr style="border:none;border-top:1px solid #ddd;margin:16px 0;" />
      <p style="font-family:sans-serif;font-size:15px;color:#444;line-height:1.6;">${message.replace(/\n/g, "<br />")}</p>
    `;

    // Enqueue to transactional_emails queue
    const { error: enqueueError } = await supabase.rpc("enqueue_email", {
      queue_name: "transactional_emails",
      payload: {
        run_id: messageId,
        message_id: messageId,
        to: "contact@spscycling.fr",
        from: "SPS Cycling <noreply@notify.spscycling.fr>",
        sender_domain: "notify.spscycling.fr",
        reply_to: email,
        subject: subject || `Message de ${name}`,
        html: htmlContent,
        label: "contact_form",
        purpose: "transactional",
        queued_at: new Date().toISOString(),
      },
    });

    if (enqueueError) {
      console.error("Enqueue error:", enqueueError);
      throw new Error("Failed to enqueue email");
    }

    // Log pending status
    await supabase.from("email_send_log").insert({
      message_id: messageId,
      template_name: "contact_form",
      recipient_email: "contact@spscycling.fr",
      status: "pending",
    });

    return new Response(JSON.stringify({ success: true }), {
      headers: { ...corsHeaders, 'Content-Type': 'application/json' },
    });
  } catch (error) {
    console.error("Error:", error);
    return new Response(JSON.stringify({ error: error.message }), {
      status: 500,
      headers: { ...corsHeaders, 'Content-Type': 'application/json' },
    });
  }
});
