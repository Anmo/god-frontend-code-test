import { renderHook } from "@testing-library/react";
import { vi, describe, expect, it, Mock, beforeEach } from "vitest";
import useSWR from "swr";

import useFetch from "./useFetch";

vi.mock("swr");
const useSWRMock = useSWR as Mock;

describe("useFetch", () => {
  beforeEach(() => {
    useSWRMock.mockReturnValue({
      data: undefined,
      isLoading: true,
    });
  });

  it("passes url to useSWR", () => {
    // When
    const { result } = renderHook(() => useFetch("url"));

    // Then
    expect(useSWRMock).toBeCalledWith("url", expect.any(Function));
    expect(result.current).toEqual({
      data: undefined,
      isLoading: true,
    });
  });

  it("caches the previous data", () => {
    // Given
    useSWRMock.mockReturnValueOnce({
      data: "data",
      isLoading: false,
    });

    // When
    const { result, rerender } = renderHook(() => useFetch("url"));
    expect(result.current).toEqual({
      data: "data",
      isLoading: false,
    });
    rerender();

    // Then
    expect(result.current).toEqual({
      data: "data",
      isLoading: true,
    });
  });

  it.only("updates new data", () => {
    // Given
    useSWRMock.mockReturnValueOnce({
      data: "data1",
      isLoading: false,
    });
    useSWRMock.mockReturnValue({
      data: "data2",
      isLoading: false,
    });

    // When
    const { result, rerender } = renderHook(() => useFetch("url"));
    expect(result.current).toEqual({
      data: "data1",
      isLoading: false,
    });
    rerender();

    // Then
    expect(result.current).toEqual({
      data: "data2",
      isLoading: false,
    });
  });
});
