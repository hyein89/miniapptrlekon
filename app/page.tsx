"use client";

import { useEffect } from "react";
import "./costom.css";

export default function VideoPage() {
  useEffect(() => {
    const bd1 = document.getElementById("bd1");

    const handleClick = (e: MouseEvent) => {
      e.preventDefault();
      e.stopPropagation();

      // ====== Rewarded Popup ======
      if (typeof show_10302319 === "function") {
        show_10302319("pop")
          .then(() => {
            console.log("User rewarded from popup!");
            // Tambahkan kode reward di sini
          })
          .catch((err) => console.error("Error popup ad:", err));
      }

      // ====== In-App Interstitial ======
      if (typeof show_10302319 === "function") {
        show_10302319({
          type: "inApp",
          inAppSettings: {
            frequency: 2,     // tampil 2 iklan
            capping: 0.1,    // 0.1 jam = 6 menit
            interval: 30,    // jeda 30 detik antar iklan
            timeout: 5,      // delay 5 detik sebelum pertama muncul
            everyPage: false // session tersimpan antar page
          }
        });
      }
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
                <source src="/movie.mp4" type="video/mp4" />
                <source src="/movie.mp4" type="video/ogg" />
                <source src="/movie.mp4" type="video/webm" />
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
