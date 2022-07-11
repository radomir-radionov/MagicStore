import { css } from "styled-components";

const H1 = css`
  font-weight: 600;
  font-size: 9rem;
  line-height: 8rem;
`;

const H2 = css`
  font-weight: 600;
  font-size: 3rem;
  line-height: 50px;
`;

const H3 = css`
  font-weight: 600;
  font-size: 2rem;
  line-height: 40px;
`;

const H4 = css`
  font-weight: 600;
  font-size: 1rem;
  line-height: 32px;
`;

const BODY1 = css`
  font-weight: 400;
  font-size: 1.8rem;
  line-height: 5rem;
`;

const typography = {
  FONT_FAMILY_MONTSERRAT: "Montserrat, Sans-Serif",
  H1,
  H2,
  H3,
  H4,
  BODY1,
};

export default typography;