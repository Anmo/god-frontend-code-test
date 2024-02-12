import {
  vi,
  describe,
  expect,
  it,
  beforeAll,
  Mock,
  afterAll,
  afterEach,
  beforeEach,
} from "vitest";

import fetcher from "./fetcher";

describe("fetcher", () => {
  let fetch: Mock;
  let fetched: { json: Mock; ok: boolean };

  beforeAll(() => {
    fetch = vi.fn();

    vi.stubGlobal("fetch", fetch);
  });

  beforeEach(() => {
    fetched = {
      json: vi.fn(),
      ok: true,
    };

    fetch.mockResolvedValue(fetched);
  });

  afterEach(() => {
    fetch.mockClear();
  });

  afterAll(() => {
    fetch.mockRestore();
  });

  it("fetches the correct url", async () => {
    // Given
    fetched.json.mockResolvedValue("data");

    // When
    const data = await fetcher("url");

    // Then
    expect(fetch).toBeCalledWith("url");
    expect(data).toBe("data");
  });

  it("throws when fails to fetch", () => {
    // Given
    fetched.json.mockResolvedValue("Fail to fetch");
    fetched.ok = false;

    // Then
    expect(fetcher).rejects.toThrow("Fail to fetch");
  });
});
