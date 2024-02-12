import React from "react";
import { useRouter } from "next/router";

import { Card } from "../../src/components/Car";
import useFetch from "../../src/utils/useFetch";

import type { Car } from "../../src/types";

function Shop() {
  const router = useRouter();
  const { data, error } = useFetch<Car>(`/api/cars/${router.query.id}`);

  if (error) return <div>Failed to load</div>;
  if (!data) return <div>Loading...</div>;

  return (
    <div className="px-pagemargin self-center">
      <Card {...data} withBuyButton />
    </div>
  );
}

export default Shop;
