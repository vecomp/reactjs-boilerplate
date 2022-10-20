import styled, { css } from "styled-components";
import { RowProps } from "./row";

const Row = styled.div<RowProps>`
  display: flex;
  box-sizing: border-box;
  width: 100%;
  flex-direction: row;
  flex-flow: wrap;
  padding: ${({ padding }) => padding || 0};
  margin: ${({ margin }) => margin || 0};
  ${({ height }) =>
    height &&
    css`
      height: ${height};
    `}
`;

export default Row;
