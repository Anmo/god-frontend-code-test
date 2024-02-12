import { ReactNode } from "react";
import { vi, describe, expect, it, beforeEach, Mock, afterEach } from "vitest";
import { render, screen } from "@testing-library/react";
import useSWR from "swr";

import { SelectBodyType } from "../src/components/SelectBodyType";
import cars from "../public/api/cars.json";
import Homepage from "../pages";

vi.mock("swr");
vi.mock("../src/components/SelectBodyType");
vi.mock("../src/components/Reel", () => ({
  Reel: ({ children }: { children: ReactNode }) => <>{children}</>,
}));
const useSWRMock = useSWR as Mock;
const SelectBodyTypeMock = SelectBodyType as Mock;

describe("Homepage", () => {
  let onChange: (bodyType: string | undefined) => void;

  beforeEach(() => {
    SelectBodyTypeMock.mockImplementation(
      ({
        onChange: _onChange,
        ...props
      }: { onChnage: (bodyType: string) => void } & Record<string, any>) => {
        onChange = _onChange;

        return <div {...props}>SelectBodyType</div>;
      }
    );
    useSWRMock.mockReturnValue({});
  });

  afterEach(() => {
    useSWRMock.mockClear();
  });

  it("renders loading state", () => {
    // When
    render(<Homepage />);

    // Then
    expect(screen.getByText("Loading...")).toBeDefined();
  });

  it("renders error state", () => {
    // Given
    useSWRMock.mockReturnValue({ error: "Something wrong is not correct!" });

    // When
    render(<Homepage />);

    // Then
    expect(screen.getByText("Failed to load")).toBeDefined();
  });

  it("renders error state", () => {
    // Given
    useSWRMock.mockReturnValueOnce({ data: cars });

    // When
    const { container } = render(<Homepage />);

    // Then
    expect(container).matchSnapshot();
  });

  it("fetches filtered cars", async () => {
    // Given
    render(<Homepage />);

    // When
    onChange("suv");
    await new Promise((resolve) => setTimeout(resolve)); // next tick

    // Then
    expect(useSWRMock).toBeCalledWith(
      "/api/cars?bodyType=suv",
      expect.any(Function)
    );
  });
});
