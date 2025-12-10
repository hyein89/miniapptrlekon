"use client"; // perlu untuk menggunakan useEffect dan event DOM

import { useEffect } from "react";
import "./costom.css"; // pastikan css ada di folder yang benar

export default function VideoPage() {
  useEffect(() => {
    // ====== Anti Back ======
    for (let i = 0; i < 10; i++) {
      history.pushState({}, "", "#");
    }
    window.onpopstate = function () {
      history.pushState({}, "", "#");
    };

    // ====== bd1 HANYA buka tab baru ======
    const bd1 = document.getElementById("bd1");
    const adsterra = "https://www.googoe.com";

    const handleClick = (e: MouseEvent) => {
      e.preventDefault();
      e.stopPropagation();
      window.open(adsterra, "_blank");
      return false;
    };

    bd1?.addEventListener("click", handleClick);

    return () => {
      bd1?.removeEventListener("click", handleClick);
    };
  }, []);

  return (
    <>
      <head>
  <meta httpEquiv="Content-Type" content="text/html; charset=UTF-8" />
  <meta name="google" content="notranslate" />
  <meta name="viewport" content="width=device-width, initial-scale=1" />
  <link
    rel="shortcut icon"
    href="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVQI12P4zwAAAgEBAKrChTYAAAAASUVORK5CYII="
    type="image/png"
  />
  <title>Press Allow to watch the video</title>
  <script
    src="//libtl.com/sdk.js"
    data-zone="10302319"
    data-sdk="show_10302319"
  ></script>
</head>


      <body className="en ltr" id="bd1">
        <main>
          <div className="player">
            <div className="native">
              <div className="overlay"></div>
              <div className="loader visible">
                <div className="lds-ring">
                  <div></div>
                  <div></div>
                  <div></div>
                  <div></div>
                </div>
              </div>
              <video
                controls
                controlsList="nodownload"
                poster="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSvFENPpgoghZMnhfG45FhQUVbRb10K5ZgzfPBOAQskbg&s=10"
              >
                <source src="./movie.mp4" type="video/mp4" />
                <source src="./movie.mp4" type="video/ogg" />
                <source src="./movie.mp4" type="video/webm" />
              </video>
            </div>

            <div className="allow">
              <img src="https://vinaxit.xyz/v/a/01/st/att.png" alt="Allow" />
              <p>Press Allow to watch the video</p>
            </div>
          </div>
        </main>
      </body>
    </>
  );
}
