import type { NextApiResponse } from "next";
import { vi } from "vitest";

export const mockResponse = () => {
  const json = vi.fn();
  const status = vi.fn().mockReturnValue({ json });
  const res = { status } as unknown as NextApiResponse;

  return {
    json,
    status,
    res,
  };
};
