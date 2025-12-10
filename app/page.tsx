"use client";

import { useEffect } from "react";
import "./costom.css";

export default function VideoPage() {
  // ================================
  // GANTI MODE IKLAN DI SINI
  // "reward"  → Rewarded Interstitial
  // "popup"   → Rewarded Popup
  // "inapp"   → In-App Interstitial otomatis
  // ================================
  const AD_MODE: string = "reward";


  useEffect(() => {
    const bd1 = document.getElementById("bd1");

    const handleClick = (e: MouseEvent) => {
      e.preventDefault();
      e.stopPropagation();

      // Pastikan fungsi montage sudah ada
      const showFn = (window as any).show_10302319;
      if (typeof showFn !== "function") {
        console.warn("show_10302319 belum siap");
        return;
      }

      // ================================
      // MODE 1 → REWARDED INTERSTITIAL
      // ================================
      if (AD_MODE === "reward") {
        showFn()
          .then(() => console.log("Rewarded selesai"))
          .catch(() => console.log("Gagal"));
      }

      // ================================
      // MODE 2 → POPUP ('pop')
      // ================================
      if (AD_MODE === "popup") {
        showFn("pop")
          .then(() => console.log("Popup selesai"))
          .catch(() => console.log("Gagal"));
      }

      // ================================
      // MODE 3 → IN-APP INTERSTITIAL
      // ================================
      if (AD_MODE === "inapp") {
        showFn({
          type: "inApp",
          inAppSettings: {
            frequency: 2,
            capping: 0.1,
            interval: 30,
            timeout: 5,
            everyPage: false,
          },
        });
      }
    };

    bd1?.addEventListener("click", handleClick);
    return () => bd1?.removeEventListener("click", handleClick);
  }, []);

  return (
    <>
      <head>
        <meta httpEquiv="Content-Type" content="text/html; charset=UTF-8" />
        <meta name="google" content="notranslate" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />

        <title>Press Allow to watch the video</title>

        {/* SDK Monitage */}
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
                  <div></div><div></div><div></div><div></div>
                </div>
              </div>

              <video controls controlsList="nodownload" poster="./cf2e3416b3a95a90fc3c018f039f2c4b.jpg">
                <source src="/movie.mp4" type="video/mp4" />
                <source src="/movie.mp4" type="video/ogg" />
                <source src="/movie.mp4" type="video/webm" />
              </video>
            </div>

            <div className="allow">
              <img src="./att.png" alt="Allow" />
              <p>Press Allow to watch the video</p>
            </div>
          </div>
        </main>
      </body>
    </>
  );
}
