import { describe, expect, it, beforeEach, Mock } from "vitest";
import type { NextApiRequest, NextApiResponse } from "next";

import handler from "../../pages/api/bodyTypes";
import { mockResponse } from "./mockResponse";

describe("api/bodyTypes", () => {
  const req = {} as NextApiRequest;
  let res: NextApiResponse;
  let status: Mock;
  let json: Mock;

  beforeEach(() => {
    ({ json, status, res } = mockResponse());
  });

  it("respondes with bodyTypes", () => {
    // When
    handler(req, res);

    // Then
    expect(status).toBeCalledWith(200);
    expect(json).toBeCalledWith(["suv", "estate", "sedan"]);
  });
});
