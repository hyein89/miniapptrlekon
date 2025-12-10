"use client";
import { useEffect } from "react";

export default function HomePage() {
  // Load Montage script
  useEffect(() => {
    const script = document.createElement("script");
    script.src = "//libtl.com/sdk.js";
    script.setAttribute("data-zone", "10302319");
    script.setAttribute("data-sdk", "show_10302319");
    script.async = true;
    document.body.appendChild(script);
  }, []);

  // Call Montage ad
  const showAd = () => {
    if (typeof window !== "undefined" && (window as any).show_10302319) {
      (window as any)
        .show_10302319("pop")
        .then(() => {
          alert("Iklan selesai! Kamu bisa kasih reward ke user.");
        })
        .catch(() => {
          alert("Iklan gagal ditampilkan.");
        });
    } else {
      alert("Script iklan belum siap, coba ulang.");
    }
  };

  return (
    <div style={{ padding: "40px", fontFamily: "Arial, sans-serif" }}>
      <h1 style={{ fontSize: "42px", fontWeight: "bold" }}>
        Mini App Kamu Berhasil Jalan 🎉
      </h1>

      <p style={{ fontSize: "20px", marginTop: "20px" }}>
        Website ini sudah siap menampilkan iklan Montage.
      </p>

      {/* Tombol tonton iklan */}
      <button
        onClick={showAd}
        style={{
          marginTop: "40px",
          padding: "15px 30px",
          fontSize: "20px",
          borderRadius: "10px",
          border: "none",
          background: "#0088cc",
          color: "white",
          cursor: "pointer",
        }}
      >
        Tonton Iklan 🔥
      </button>
    </div>
  );
}
