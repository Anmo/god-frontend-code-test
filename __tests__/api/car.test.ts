import { describe, expect, it, beforeEach, Mock } from "vitest";
import type { NextApiRequest, NextApiResponse } from "next";

import handler from "../../pages/api/cars/[id]";
import { mockResponse } from "./mockResponse";
import cars from "../../public/api/cars.json";

describe("api/bodyTypes", () => {
  let req: NextApiRequest;
  let res: NextApiResponse;
  let status: Mock;
  let json: Mock;

  beforeEach(() => {
    ({ json, status, res } = mockResponse());

    req = { query: { id: "fake " } } as unknown as NextApiRequest;
  });

  it("respondes with a car", () => {
    // Given
    req.query.id = "xc90-recharge";

    // When
    handler(req, res);

    // Then
    expect(status).toBeCalledWith(200);
    expect(json).toBeCalledWith(cars.find(({ id }) => id === "xc90-recharge"));
  });

  it("respondes with 404", () => {
    // When
    handler(req, res);

    // Then
    expect(status).toBeCalledWith(404);
    expect(json).toBeCalledWith({
      error: "Car not found",
    });
  });
});
