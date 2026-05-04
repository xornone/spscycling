import { useEffect } from "react";

const InstagramFeed = () => {
  useEffect(() => {
    const SCRIPT_SRC = "https://elfsightcdn.com/platform.js";
    if (!document.querySelector(`script[src="${SCRIPT_SRC}"]`)) {
      const script = document.createElement("script");
      script.src = SCRIPT_SRC;
      script.async = true;
      document.body.appendChild(script);
    }
  }, []);

  return (
    <section className="py-20 px-6 md:px-12 max-w-[1200px] mx-auto text-center">
      <span className="section-tag">Instagram</span>
      <h2 className="section-title">Nos derniers posts</h2>
      <div className="divider-gradient mx-auto" />

      <div className="mt-12">
        <div
          className="elfsight-app-869115ac-ff27-4bc6-8c51-e574bf59d27c"
          data-elfsight-app-lazy
        />
      </div>
    </section>
  );
};

export default InstagramFeed;
