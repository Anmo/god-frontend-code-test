import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Icon } from "@volvo-cars/react-icons";

import type { Car } from "../types";

export const Card: React.FC<
  Car & { withBackButton?: boolean; withBuyButton?: boolean }
> = ({
  id,
  bodyType,
  modelName,
  modelType,
  imageUrl,
  withBackButton,
  withBuyButton,
}) => {
  return (
    <div className="flex-col flex-shrink-0 flex-grow-0 gap-y-8 w-xs h-full snap-start">
      <p className="font-medium">{bodyType}</p>
      <div className="flex-col md:flex-row gap-8">
        <p className="font-medium">{modelName}</p>
        <p className="font-medium text-secondary">{modelType}</p>
      </div>
      <Image
        alt={modelName}
        className="cover aspect-4/3 w-full mb-8"
        height="300"
        src={imageUrl}
        style={{
          height: "auto",
        }}
        width="400"
      />
      <div className="flex flex-wrap gap-x-24 justify-center">
        {withBackButton || withBuyButton ? (
          <Link className="text-accent-blue" href="/">
            <Icon type="navigation-chevronback-16" color="currentColor" /> Back
          </Link>
        ) : (
          <Link className="text-accent-blue" href={`/learn/${id}`}>
            Learn{" "}
            <Icon type="navigation-chevronforward-16" color="currentColor" />
          </Link>
        )}
        {withBuyButton ? (
          <button className="text-accent-blue" disabled>
            BUY
          </button>
        ) : (
          <Link className="text-accent-blue" href={`/shop/${id}`}>
            Shop{" "}
            <Icon type="navigation-chevronforward-16" color="currentColor" />
          </Link>
        )}
      </div>
    </div>
  );
};
