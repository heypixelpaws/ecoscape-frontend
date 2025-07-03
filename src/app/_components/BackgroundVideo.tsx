"use client";

import { memo } from "react";

const BackgroundVideoComponent = () => {
  return (
    <video
      src="https://ecoscapebd-assets.s3.ap-south-1.amazonaws.com/homepage-hero-video.mp4"
      preload="metadata"
      autoPlay
      muted
      loop
      playsInline
      title="Homepage Hero Background Video"
      className="h-full w-full object-cover"
    >
      Your browser does not support the video tag.
    </video>
  );
};

const SecondaryVideoComponent = () => {
  return (
    <video
      src="https://ecoscapebd-assets.s3.ap-south-1.amazonaws.com/homepage-secondary-video.mp4"
      preload="metadata"
      autoPlay
      muted
      loop
      playsInline
      title="Homepage Hero Background Video"
      className="h-full w-full object-cover"
    >
      Your browser does not support the video tag.
    </video>
  );
};

const BackgroundVideo = memo(BackgroundVideoComponent);
const SecondaryVideo = memo(SecondaryVideoComponent);

export { BackgroundVideo, SecondaryVideo };
