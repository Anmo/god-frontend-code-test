import { useState } from "react";
import { Wordmark } from "@volvo-cars/react-icons";

import { SelectBodyType } from "../src/components/SelectBodyType";
import { Card } from "../src/components/Car";
import { Reel } from "../src/components/Reel";
import useFetch from "../src/utils/useFetch";

import type { CarBodyType, Cars } from "../src/types";

function HomePage() {
  const [bodyType, setBodyType] = useState<CarBodyType>();
  const { data, error, isLoading } = useFetch<Cars>(
    bodyType ? `/api/cars?bodyType=${bodyType}` : "/api/cars"
  );

  if (error) return <div>Failed to load</div>;
  if (!data) return <div>Loading...</div>;

  return (
    <>
      <div className="flex-col md:flex-row gap-8 justify-between items-center px-pagemargin py-8">
        <Wordmark />
        <SelectBodyType className="w-xs" onChange={setBodyType} />
      </div>
      <div className="main-container">
        <Reel>
          {data?.map((car) => (
            <Card key={car.id} {...car} />
          ))}
        </Reel>
        {isLoading && (
          <progress
            aria-label="Loading"
            className="spinner centered-spinner text-accent-blue scale-110"
          />
        )}
      </div>
    </>
  );
}

export default HomePage;
