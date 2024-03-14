"use client";
import React, { useEffect, useState } from "react";
import { FaArrowDown } from "react-icons/fa";

import Image from "next/image";
import mainImage from "../../../public/images/mainImage.png";

const CircleImages = () => {
  const [rotationAngle, setRotationAngle] = useState(0);
  const [isLanding, setIsLanding] = useState(true);
  const [imageOrder, setImageOrder] = useState(
    Array.from({ length: 10 }, (_, index) => index)
  );

  useEffect(() => {
    const circleContainer = document.getElementById("circle-container");
    const numberOfImages = 10;
    const angleBetweenImages = 36;
    const radius = 310;

    placeImagesOnCircle(
      numberOfImages,
      imageOrder,
      angleBetweenImages,
      rotationAngle,
      radius,
      circleContainer,
      isLanding
    );
  }, [rotationAngle, imageOrder, isLanding]);

  function handleRotation(direction: "right" | "left") {
    setIsLanding(false);
    direction == "right"
      ? setRotationAngle(rotationAngle + 36)
      : setRotationAngle(rotationAngle - 36);
  }

  return (
    <div className="fixed -top-[600px] -right-[220px]">
      {/* DISC___________________________________________________________ */}
      <div
        className="bg-[#5cac0e] flex justify-center  h-[1176px] w-[1176px]  z-0 overflow-hidden"
        style={{
          clipPath: "circle()",
        }}
      >
        {/* CERCLE___________________________________________________________ */}
        <div
          id="circle-container"
          className=" w-[620px] h-[620px] rounded-full border-dashed border-2 border-gray-700 fixed -bottom-12"
          style={{
            transform: `rotate(${rotationAngle}deg)`,
            transition: "transform 2s ease-in-out",
          }}
        />
      </div>
      <div className="flex justify-center gap-[32rem]">
        <button
          className="bg-[#5cac0e] rounded-full text-white font-bold w-10 h-10 flex items-center justify-center "
          onClick={() => handleRotation("right")}
        >
          <FaArrowDown />
        </button>
        <button
          className="bg-[#5cac0e] rounded-full  text-white font-bold w-10 h-10 flex items-center justify-center "
          onClick={() => handleRotation("left")}
        >
          <FaArrowDown />
        </button>
      </div>
    </div>
  );
};

export default CircleImages;
function placeImagesOnCircle(
  numberOfImages: number,
  imageOrder: number[],
  angleBetweenImages: number,
  rotationAngle: number,
  radius: number,
  circleContainer: HTMLElement | null,
  isLanding: boolean
) {
  if (isLanding) {
    for (let i = 0; i < numberOfImages; i++) {
      const angleInRadians =
        (imageOrder[i] * angleBetweenImages + rotationAngle) * (Math.PI / 180) -
        Math.PI / 2;
      const x = Math.cos(angleInRadians) * radius;
      const y = Math.sin(angleInRadians) * radius;

      const image = document.createElement("img");
      image.src = `/images/image${imageOrder[i] + 1}.png`;
      image.alt = `Image ${imageOrder[i] + 1}`;
      image.style.position = "absolute";
      image.style.width = "100px";
      image.style.height = "100px";
      image.style.left = `${310 + x - 50}px`;
      image.style.top = `${310 + y - 50}px`;

      // Appliquer la rotation sur chaque image
      image.style.transform = `rotate(${angleInRadians}rad)`;
      image.style.transition = "transform 0.5s ease-in-out";

      circleContainer?.appendChild(image);
    }
  }
}
