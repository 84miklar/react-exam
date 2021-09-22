import { useState } from "react";
import { css } from "@emotion/react";
import ClipLoader from "react-spinners/ClipLoader";

const override = css`
  display: block;
  margin: 0 auto;
  border-color: var(--clr-primary);
`;

export const Spinner = () => {
  const [color, setColor] = useState("#103c61");

  return (
    <div className="spinner">
      <ClipLoader color={color} css={override} size={75} />
    </div>
  );
};
