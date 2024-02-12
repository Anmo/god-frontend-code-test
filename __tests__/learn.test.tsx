import { vi, describe, expect, it, beforeEach, Mock, afterEach } from "vitest";
import { render, screen } from "@testing-library/react";
import { createDynamicRouteParser } from "next-router-mock/dynamic-routes";
import mockRouter from "next-router-mock";
import useSWR from "swr";

import cars from "../public/api/cars.json";
import Learn from "../pages/learn/[id]";

vi.mock("swr");
const useSWRMock = useSWR as Mock;

mockRouter.useParser(createDynamicRouteParser(["/learn/[id]"]));

describe("Learn", () => {
  beforeEach(() => {
    mockRouter.push("learn/1");
    useSWRMock.mockReturnValue({});
  });

  afterEach(() => {
    useSWRMock.mockClear();
  });

  it("renders loading state", () => {
    // When
    render(<Learn />);

    // Then
    expect(screen.getByText("Loading...")).toBeDefined();
  });

  it("renders error state", () => {
    // Given
    useSWRMock.mockReturnValueOnce({
      error: "Something wrong is not correct!",
    });

    // When
    render(<Learn />);

    // Then
    expect(screen.getByText("Failed to load")).toBeDefined();
  });

  it("fetches the car with the correct id", () => {
    // When
    render(<Learn />);

    // Then
    expect(useSWRMock).toBeCalledWith("/api/cars/1", expect.any(Function));
  });

  it("renders error state", () => {
    // Given
    useSWRMock.mockReturnValueOnce({ data: cars[0] });

    // When
    const { container } = render(<Learn />);

    // Then
    expect(container).matchSnapshot();
  });
});
