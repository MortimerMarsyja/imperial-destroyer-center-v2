import { describe, test, expect } from "vitest";
import { render } from "@testing-library/react";
import Card from "./Card";

describe("<Card />", () => {
  test("Card mounts properly", () => {
    const wrapper = render(
      <Card>
        <p>test content to mount Card</p>
      </Card>
    );
    expect(wrapper).toBeTruthy();
  });
});
