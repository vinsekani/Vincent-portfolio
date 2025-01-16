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
        description="He brought innovative ideas to the project that we hadn't considered, making the final product far better than we initially envisioned."
      />
      <ClientReview
        image="/test2.jpg"
        name="Bill Stack"
        role="Next.js Developer"
        description="The app's user interface is clean, modern, and intuitive. Our customers love the new design, and we’ve received great feedback since launch."
      />
      <ClientReview
        image="/test3.jpg"
        name="Nicky Vicky"
        role="React Developer"
        description="He was always available to address concerns and quickly resolved any issues that arose. His commitment to the project was evident from day one."
      />
      <ClientReview
        image="/test4.jpg"
        name="Fanie Jamoh"
        role="Node.js Developer"
        description="He delivered the project ahead of schedule without compromising quality. It was refreshing to work with someone so professional and dependable."
      />
    </Carousel>
  );
};

export default TestimonialSlider;
