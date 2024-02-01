import React, { useEffect } from "react";

const VimeoEmbed = () => {
  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://player.vimeo.com/api/player.js";
    script.async = true;

    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return (
    <div
      style={{
        padding: "56.25% 0 0 0",
        position: "relative",
        width: "100%",
        height: "100%",
      }}
    >
      <iframe
        title="3D_ASSET_PAGE_01"
        src="https://player.vimeo.com/video/908674001?badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479&title=0&byline=0&portrait=0&autoplay=1&loop=1&quality_selector=0&muted=1&controls=0"
        frameborder="0"
        width={1920}
        height={1080}
        style={{
          position: "absolute",
          top: "0",
          left: "0",
          width: "100%",
          height: "100%",
        }}
        allow="autoplay; fullscreen; picture-in-picture"
        className="w-full h-full object-cover"
      ></iframe>
    </div>
  );
};

export default VimeoEmbed;
