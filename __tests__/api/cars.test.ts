import { describe, expect, it, beforeEach, Mock } from "vitest";
import type { NextApiRequest, NextApiResponse } from "next";

import handler from "../../pages/api/cars";
import { mockResponse } from "./mockResponse";
import cars from "../../public/api/cars.json";

describe("api/bodyTypes", () => {
  let req: NextApiRequest;
  let res: NextApiResponse;
  let status: Mock;
  let json: Mock;

  beforeEach(() => {
    ({ json, status, res } = mockResponse());

    req = { query: {} } as NextApiRequest;
  });

  it("respondes with cars", () => {
    // When
    handler(req, res);

    // Then
    expect(status).toBeCalledWith(200);
    expect(json).toBeCalledWith(cars);
  });

  it("respondes with filtered cars", () => {
    // Given
    req.query.bodyType = "suv";

    // When
    handler(req, res);

    // Then
    expect(status).toBeCalledWith(200);
    expect(json).toBeCalledWith(
      cars.filter(({ bodyType }) => bodyType === "suv")
    );
  });
});
