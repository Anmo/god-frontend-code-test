import { vi, describe, expect, it } from "vitest";
import { render } from "@testing-library/react";

import Document from "../pages/_document";

vi.mock("next/document", () => ({
  Html: (props: Record<string, any>) => <html {...props} />,
  // eslint-disable-next-line @next/next/no-head-element
  Head: (props: Record<string, any>) => <head {...props} />,
  Main: () => <div>Main</div>,
  NextScript: () => <div>NextScript</div>,
}));

describe("Document", () => {
  it("renders the base document page", () => {
    // Given
    const { container } = render(<Document />);

    // Then
    expect(container).matchSnapshot();
  });
});
