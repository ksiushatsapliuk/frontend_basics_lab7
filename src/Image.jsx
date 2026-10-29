import React from "react";

export default function Image({ width, linked = false }) {
  const image = (
    <img
      className="city-image"
      src={`${import.meta.env.BASE_URL}images/nuremberg.webp`}
      alt="Краєвид Нюрнберга"
      style={{ width }}
    />
  );

  return linked ? (
    <a
      href="https://www.nuernberg.de/internet/stadtportal/index.html"
      target="_blank"
      rel="noreferrer"
    >
      {image}
    </a>
  ) : (
    image
  );
}
