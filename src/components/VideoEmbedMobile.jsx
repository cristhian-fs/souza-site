import React, { useEffect } from "react";

const VimeoEmbedMobile = () => {
  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://player.vimeo.com/api/player.js";
    script.async = true;

    script.onload = () => {
      console.log("Vimeo Loaded");
      let videoPlayer = document.querySelector("#player");
      console.log(videoPlayer);
    };

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
        title="3D_ASSET_PAGE_01_MOBILE"
        src="https://player.vimeo.com/video/908780089?badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479&title=0&byline=0&portrait=0&autoplay=1&loop=1&quality_selector=0&muted=1&controls=0"
        frameBorder={0}
        width={2160}
        height={3840}
        style={{
          position: "absolute",
          top: "0",
          left: "0",
          width: "100%",
          height: "100%",
        }}
        allow="autoplay; fullscreen; picture-in-picture"
        className="w-full h-full object-cover md:scale-100"
      ></iframe>
    </div>
  );
};

export default VimeoEmbedMobile;
