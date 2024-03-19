import React from "react";
import img1 from "../assets/images/one.jpg";
import img2 from "../assets/images/two.jpg";
import img3 from "../assets/images/three.jpg";
import img4 from "../assets/images/four.jpg";
import Image from "next/image";

const HeroSlider = () => {
  return (
    <div className="carousel w-full">
      <div id="slide1" className="carousel-item relative w-full">
        <Image src={img1} className="w-full" />
        <div className="absolute top-1/2 left-[30%] z-10 text-center">
          <h2 className="text-5xl font-bold">
            Jay Chand Bala World Of Innovation
          </h2>
          <h3 className="text-3xl font-semibold">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati,
            ea.
          </h3>
          <button className="btn btn-wide bg-primary border-0 text-white ">
            Get Start
          </button>
        </div>
        <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
          <a href="#slide4" className="btn btn-circle">
            ❮
          </a>
          <a href="#slide2" className="btn btn-circle">
            ❯
          </a>
        </div>
      </div>
      <div id="slide2" className="carousel-item relative w-full">
        <Image src={img2} className="w-full" />
        <div className="absolute top-1/2 left-[30%] z-10 text-center">
          <h2 className="text-5xl font-bold">
            Jay Chand Bala World Of Innovation
          </h2>
          <h3 className="text-3xl font-semibold">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati,
            ea.
          </h3>
          <button className="btn btn-wide bg-primary border-0 text-white ">
            Get Start
          </button>
        </div>
        <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
          <a href="#slide1" className="btn btn-circle">
            ❮
          </a>
          <a href="#slide3" className="btn btn-circle">
            ❯
          </a>
        </div>
      </div>
      <div id="slide3" className="carousel-item relative w-full">
        <Image src={img3} className="w-full" />
        <div className="absolute top-1/2 left-[30%] z-10 text-center">
          <h2 className="text-5xl font-bold">
            Jay Chand Bala World Of Innovation
          </h2>
          <h3 className="text-3xl font-semibold">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati,
            ea.
          </h3>
          <button className="btn btn-wide bg-primary border-0 text-white ">
            Get Start
          </button>
        </div>
        <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
          <a href="#slide2" className="btn btn-circle">
            ❮
          </a>
          <a href="#slide4" className="btn btn-circle">
            ❯
          </a>
        </div>
      </div>
      <div id="slide4" className="carousel-item relative w-full bg-slate-400	">
        <Image src={img4} className="w-full" />
        <div className="absolute top-1/2 left-[30%] z-10 text-center">
          <h2 className="text-5xl font-bold">
            Jay Chand Bala World Of Innovation
          </h2>
          <h3 className="text-3xl font-semibold">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati,
            ea.
          </h3>
          <button className="btn btn-wide bg-primary border-0 text-white ">
            Get Start
          </button>
        </div>
        <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
          <a href="#slide3" className="btn btn-circle">
            ❮
          </a>
          <a href="#slide1" className="btn btn-circle">
            ❯
          </a>
        </div>
      </div>
    </div>
  );
};

export default HeroSlider;
