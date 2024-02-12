import type { NextApiRequest, NextApiResponse } from "next";

import cars from "../../../public/api/cars.json";
import type { CarBodyType, Cars } from "../../../src/types";

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Cars>
) {
  const bodyType = req.query.bodyType as CarBodyType | undefined;
  return res
    .status(200)
    .json(bodyType ? cars.filter((car) => car.bodyType === bodyType) : cars);
}
