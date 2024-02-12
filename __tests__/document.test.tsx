import { vi, describe, expect, it } from "vitest";
import { render } from "@testing-library/react";

import Document from "../pages/_document";

vi.mock("next/document", () => ({
  Html: (props: Record<string, any>) => <div data-element="html" {...props} />,
  Head: (props: Record<string, any>) => <div data-element="head" {...props} />,
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
