import type { NextApiRequest, NextApiResponse } from "next";

import type { CarBodyType } from "../../src/types";

import cars from "../../public/api/cars.json";

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<CarBodyType[] | { error: string }>
) {
  const bodyTypes = cars.reduce((bodyTypes, { bodyType }) => {
    if (!bodyTypes.includes(bodyType)) {
      bodyTypes.push(bodyType);
    }

    return bodyTypes;
  }, [] as CarBodyType[]);

  res.status(200).json(bodyTypes);
}
