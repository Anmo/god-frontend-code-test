import type { NextApiRequest, NextApiResponse } from "next";

import type { Car } from "../../../src/types";

import cars from "../../../public/api/cars.json";

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Car | { error: string }>
) {
  const car = cars.find(({ id }) => id === req.query.id);

  if (!car) {
    return res.status(404).json({ error: "Car not found" });
  }

  res.status(200).json(car);
}
