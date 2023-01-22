import { describe, test, expect } from "vitest";
import { render, screen } from "@testing-library/react";

import Footer from "./Footer";

describe("<Footer />", () => {
  test("Footer mounts properly", () => {
    const wrapper = render(
      <Footer>
        <p>test content to mount Footer</p>
      </Footer>
    );
    expect(wrapper).toBeTruthy();
  });
  test("Footer renders content properly", () => {
    render(
      <Footer>
        <p>test content to mount Footer</p>
      </Footer>
    );
    const content = screen.getByText("test content to mount Footer");
    expect(content).toBeInTheDocument();
  });
});
