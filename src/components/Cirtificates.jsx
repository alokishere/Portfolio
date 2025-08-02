import React from "react";
import TiltedCard from "./TiltedCard";

const Certificates = () => {
  return (
    <div className="w-full min-h-[130vh] relative text-black px-4 py-8">
      <h2 className="text-3xl font-bold mb-6 text-center">My Certificates</h2>
      {/* Responsive grid for certificates */}
      <div
        className="
          grid 
          grid-cols-1 
          sm:grid-cols-2 
          lg:grid-cols-2 
          xl:grid-cols-2 
          gap-8 
          justify-items-center 
          items-center
          w-full
          max-w-6xl
          mx-auto
          relative
        "
      >
        <div className="w-full max-w-[400px] h-[250px] sm:h-[300px]">
          <TiltedCard
            imageSrc="image/internship.png"
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
        <div className="w-full max-w-[400px] h-[250px] sm:h-[300px]">
          <TiltedCard
            imageSrc="image/Buildwithindia.png"
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
        <div className="w-full max-w-[400px] h-[250px] sm:h-[300px]">
          <TiltedCard
            imageSrc="image/IIT delhi.jpg"
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
        <div className="w-full max-w-[400px] h-[250px] sm:h-[300px]">
          <TiltedCard
            imageSrc="image/AIIP.jpg"
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
    </div>
  );
};

export default Certificates;
