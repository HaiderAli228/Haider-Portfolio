import React from "react";
import "./Button.scss";

export default function Button({ text, className, href, newTab }) {
  const handleDownload = () => {
    const iframe = document.createElement("iframe");
    iframe.style.display = "none";
    iframe.src = href;
    document.body.appendChild(iframe);
  };

  return (
    <div className={className}>
      <a
        className="main-button"
        href={newTab ? href : undefined}
        target={newTab ? "_blank" : undefined}
        rel="noreferrer"
        onClick={!newTab ? handleDownload : undefined}
      >
        {text}
      </a>
    </div>
  );
}
