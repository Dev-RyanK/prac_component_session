import React from "react";
import { styled } from "../../style/stitches.conf";

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

// const StyleButton = sstyled.div`
//     ${({ size }) => {
//       //   if (size === "big") {
//       //     return css``;
//       //   }
//       //   if (size === "small") {
//       //     return css``;
//       //   }

//       switch (size) {
//         case "big":
//           return css``;

//         case "small":

//         default:
//           return css``;
//       }
//     }}
//  `;
