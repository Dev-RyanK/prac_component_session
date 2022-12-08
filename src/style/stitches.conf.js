import { createStitches } from "@stitches/react";

export const { styled, css } = createStitches({
  utils: {
    py: (number) => {
      return {
        paddingTop: number,
        paddingBottom: number,
      };
    },
  },
});
