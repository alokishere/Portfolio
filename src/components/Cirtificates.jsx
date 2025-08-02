import React from "react";
import TiltedCard from "./TiltedCard";

// const certificates = [
//   'public/image/internship.png',
//   'public/image/Buildwithindia.png',
//   'public/image/IIT delhi.jpg',
//   'public/image/AIIP.jpg',
// ];

const Certificates = () => {
  return (
    <div className="w-full min-h-[130vh] relative  text-black  px-4">
      <h2 className="text-3xl font-bold mb-6 text-center">My Certificates</h2>
      <div className="h-[300px] w-[500px] absolute top-20 left-20">
        <TiltedCard
          imageSrc="public/image/internship.png"
          altText="Internship Certificate"
          captionText="Internship Certificate"
          containerHeight="100%"
          containerWidth="100%"
          imageHeight="100%"
          imageWidth="100%"
          rotateAmplitude={12}
          scaleOnHover={1.2}
          showMobileWarning={false}
          showTooltip={true}
          displayOverlayContent={true}
          overlayContent={<p className="tilted-card-demo-text"></p>}
        />
      </div>
      <div className="h-[300px] w-[500px] absolute top-40 right-20">
        <TiltedCard
          imageSrc="public/image/Buildwithindia.png"
          altText="Build With India"
          captionText="Build With India"
          containerHeight="100%"
          containerWidth="100%"
          imageHeight="100%"
          imageWidth="100%"
          rotateAmplitude={12}
          scaleOnHover={1.2}
          showMobileWarning={false}
          showTooltip={true}
          displayOverlayContent={true}
          overlayContent={<p className="tilted-card-demo-text"></p>}
        />
      </div>
      <div className="h-[300px] w-[500px] absolute bottom-40 left-20">
        <TiltedCard
          imageSrc="public/image/IIT delhi.jpg"
          altText="IIT delhi"
          captionText="IIT delhi"
          containerHeight="100%"
          containerWidth="100%"
          imageHeight="100%"
          imageWidth="100%"
          rotateAmplitude={12}
          scaleOnHover={1.2}
          showMobileWarning={false}
          showTooltip={true}
          displayOverlayContent={true}
          overlayContent={<p className="tilted-card-demo-text"></p>}
        />
      </div>
      <div className="h-[300px] w-[500px] absolute bottom-20 right-20">
        <TiltedCard
          imageSrc="public/image/AIIP.jpg"
          altText="AIIP"
          captionText="AIIP"
          containerHeight="100%"
          containerWidth="100%"
          imageHeight="100%"
          imageWidth="100%"
          rotateAmplitude={12}
          scaleOnHover={1.2}
          showMobileWarning={false}
          showTooltip={true}
          displayOverlayContent={true}
          overlayContent={<p className="tilted-card-demo-text"></p>}
        />
      </div>
    </div>
  );
};

export default Certificates;
