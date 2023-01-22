import { describe, test, expect } from "vitest";
import { render, screen } from "@testing-library/react";

import Image from "./Image";
const planetsUrl = "src/06-assets/planets/";

describe("<Image />", () => {
  test("Image mounts properly", () => {
    const wrapper = render(
      <Image
        width={300}
        height={140}
        alt="Naboo"
        src={`${planetsUrl}naboo.png`}
      />
    );
    expect(wrapper).toBeTruthy();
  });
  test("Image fallback image renders properly", () => {
    const wrapper = render(
      <Image
        width={300}
        height={140}
        alt="Naboo planet image"
        src="src/assets/planets/naboo.jpg"
        jpgSRC="src/assets/planets/naboo.png"
        pngSRC="src/assets/planets/naboo.png"
        onError={(e) => {
          e.currentTarget.src = `https://images.hdqwalls.com/download/joyful-planet-4k-ly-2560x1700.jpg`;
        }}
      />
    );
    const altText = screen.queryByText("Naboo planet image");
    expect(altText).toBeFalsy();
    expect(wrapper).toBeTruthy();
  });
  test("alt test to show", () => {
    const wrapper = render(
      <Image
        width={300}
        height={140}
        alt="Naboo planet image"
        src="src/assets/planets/naboo"
      />
    );
    const altText = screen.getByAltText("Naboo planet image");
    expect(altText).toBeTruthy();
    expect(wrapper).toBeTruthy();
  });
});
