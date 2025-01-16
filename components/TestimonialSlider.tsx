import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import ClientReview from "./ClientReview";
import Image from "next/image";

const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 1,
    slidesToSlide: 1, // optional, default to 1.
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 1,
    slidesToSlide: 1, // optional, default to 1.
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
    slidesToSlide: 1, // optional, default to 1.
  },
};

const TestimonialSlider = () => {
  return (
    <Carousel
      additionalTransfrom={0}
      arrows={true}
      autoPlay={true}
      autoPlaySpeed={5000}
      centerMode={false}
      infinite
      responsive={responsive}
      itemClass="item"
    >
      {/* CLIENT REVIEW */}
      <ClientReview
        image="/test1.jpg"
        name="Shishi Moon"
        role="Web Developer"
      />
      <ClientReview
        image="/test2.jpg"
        name="Bill Stack"
        role="Next.js Developer"
      />
      <ClientReview
        image="/test3.jpg"
        name="Nicky Vicky"
        role="React Developer"
      />
      <ClientReview
        image="/test4.jpg"
        name="Fanie Jamoh"
        role="Node.js Developer"
      />
    </Carousel>
  );
};

export default TestimonialSlider;
