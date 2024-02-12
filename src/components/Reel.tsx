import React, { useRef } from "react";
import { IconButton } from "@volvo-cars/react-icons";
import { useReel } from "@volvo-cars/react-headless";

export const Reel: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const ref = useRef<HTMLDivElement>(null);
  const { activeIndex, indicatorCount, previousButtonProps, nextButtonProps } =
    useReel({ ref });

  return (
    <>
      <div
        ref={ref}
        className="container-max reel scrollbar-none gap-x-gutter py-16 px-pagemargin lg:px-0"
      >
        {children}
      </div>
      <div className="reel-indicators md:hidden" aria-hidden>
        {[...Array(indicatorCount).keys()].map((_, index) => (
          <div key={index} aria-current={activeIndex === index} />
        ))}
      </div>
      <div className="button-group justify-end mr-16 mt-16 until-md:hidden">
        <IconButton
          iconName="navigation-chevronback"
          {...previousButtonProps}
        />
        <IconButton iconName="navigation-chevronforward" {...nextButtonProps} />
      </div>
    </>
  );
};
