-- Create rides table
CREATE TABLE public.rides (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  title text NOT NULL,
  ride_date date NOT NULL,
  ride_time text NOT NULL,
  distance text NOT NULL,
  elevation text NOT NULL,
  level text NOT NULL,
  meeting_point text NOT NULL,
  ride_type text NOT NULL DEFAULT 'Sortie Club',
  image_url text,
  created_at timestamptz NOT NULL DEFAULT now()
);

ALTER TABLE public.rides ENABLE ROW LEVEL SECURITY;

-- Public read access (anyone can see rides on front page)
CREATE POLICY "Anyone can read rides" ON public.rides
  FOR SELECT TO anon, authenticated
  USING (true);

-- Anon can insert rides (from the gpx tool, no auth)
CREATE POLICY "Anon can insert rides" ON public.rides
  FOR INSERT TO anon
  WITH CHECK (true);

-- Storage bucket for ride images
INSERT INTO storage.buckets (id, name, public)
VALUES ('ride-images', 'ride-images', true);

-- Anyone can upload to ride-images bucket
CREATE POLICY "Anyone can upload ride images" ON storage.objects
  FOR INSERT TO anon, authenticated
  WITH CHECK (bucket_id = 'ride-images');

-- Anyone can read ride images (public bucket)
CREATE POLICY "Anyone can read ride images" ON storage.objects
  FOR SELECT TO anon, authenticated
  USING (bucket_id = 'ride-images');