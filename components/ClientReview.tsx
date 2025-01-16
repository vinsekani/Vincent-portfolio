import React from "react";
import Image from "next/image";
import { HiStar } from "react-icons/hi";

interface Props {
  name: string;
  role: string;
  image: string;
}

const ClientReview = ({ name, role, image }: Props) => {
  return (
    <div className="flex flex-col text-center justify-center">
      <Image
        src={image}
        alt={name}
        width={100}
        height={100}
        objectFit="contain"
        className="mx-auto mb-[2rem] rounded-full"
      />

      <div className="flex items-center mx-auto">
        <HiStar className="w-[2rem] h-[2rem] text-yellow-400" />
        <HiStar className="w-[2rem] h-[2rem] text-yellow-400" />
        <HiStar className="w-[2rem] h-[2rem] text-yellow-400" />
        <HiStar className="w-[2rem] h-[2rem] text-yellow-400" />
        <HiStar className="w-[2rem] h-[2rem] text-yellow-400" />
      </div>
      <h1 className="text-[25px] text-white mt-[1rem]">{name}</h1>
      <p className="text-[18px] text-white opacity-75 mt-[0.5rem] mb-[1.4rem]">
        {role}
      </p>
      <p className="text-[16px] text-white opacity-50 w-[90%] md:w-[50%] mx-auto">
        Vivamus sodales suscipit ultrices. In sollicitudin bibendum risus, nec
        fringilla nisi consequat at. Praesent suscipit semper odio, eu semper
        turpis semper at.
      </p>
    </div>
  );
};

export default ClientReview;
