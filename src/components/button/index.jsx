import React from "react";
import { styled } from "../../style/stitches.conf";
import sstyled, { css } from "styled-components";

const Button = ({ children, ...props }) => {
  return <StButton {...props}>{children}</StButton>;
};

export default Button;

const StButton = styled("button", {
  height: 50,
  backgroundColor: "#ff6348",
  color: "#fff",
  border: "none",
  borderRadius: 8,
  cursor: "pointer",

  variants: {
    size: {
      big: {
        width: 340,
      },

      small: {
        width: 150,
      },
    },
    outlined: {
      true: {
        border: "2px solid #ff6348",
        backgroundColor: "#fff",
        color: "#ff6348",
      },
    },
  },
});

// styled components
const StyledButton = sstyled.div`
    ${({ size }) => {
      switch (size) {
        case "big":
          return css`
            width: 340px;
          `;

        case "small":
          return css`
            width: 150px;
          `;

        default:
          return css`
            width: 150px;
          `;
      }
    }}

    ${({ outlined }) => {
      return outlined
        ? css`
            border: 1px solid green;
            color: green;
          `
        : css`
            background-color: green;
            color: white;
          `;
    }}
 `;
