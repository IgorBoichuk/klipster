import Image from "next/image";
import React from "react";

interface RecommendedProductsProps {
  // title: string;
  custom?: string;
  image?: any;
}

export const RecommendedProducts = ({ image }: RecommendedProductsProps) => {
  return (
    <div className="w-24 h-24 bg-white border-0 border-gray-300 rounded-xl shadow-md">
      <Image
        src={image}
        alt="Category"
        width={99}
        height={99}
        className="rounded-xl"
      />
    </div>
  );
};
