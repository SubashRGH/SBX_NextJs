import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import PageBanner from "../../components/PageBanner";
function VideoGuides() {
  return (
    <>
      <PageBanner
        title="Video Tutorials"
        description="Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero"
        imgSrc="/static/images/videoguides/video-bg.png"
        size="sm"
      />

      {/* video data here */}
      <div className="stkbnx-container mx-auto py-20">
        <div className="bg-white">
          <h1 className="text-4xl">here the data will come from api </h1>
        </div>
      </div>
    </>
  );
}

export default VideoGuides;
