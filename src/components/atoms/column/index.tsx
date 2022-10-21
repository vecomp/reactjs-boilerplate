import styled, { css } from "styled-components";
import { ColumnProps } from "./column";

const calcWidth = (props: ColumnProps, size: string = "xs") => {
  let span = 0;

  switch (size) {
    case "xs":
      span = props.xs || 12;
      break;
    case "sm":
      span = props.sm || props.xs || 12;
      break;
    case "md":
      span = props.md || props.sm || props.xs || 12;
      break;
    case "lg":
      span = props.lg || props.md || props.sm || props.xs || 12;
      break;
    case "xl":
      span = props.xl || props.lg || props.md || props.sm || props.xs || 12;
      break;
  }

  return (span * 100) / 12;
};

const Column = styled.div<ColumnProps>`
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  font-weight: bold;
  padding: ${({ padding }) => padding || 0};
  margin: ${({ margin }) => margin || 0};
  align-items: ${({ alignItems }) => alignItems || "flex-start"};
  justify-content: ${({ justifyContent }) => justifyContent || "flex-start"};
  width: calc(${(props) => calcWidth(props, "xs")}%);
  ${({ backgroundColor }) =>
    backgroundColor &&
    css`
      background-color: ${backgroundColor};
    `}
  @media (min-width: 576px) {
    width: calc(${(props) => calcWidth(props, "sm")}%);
  }
  @media (min-width: 768px) {
    width: calc(${(props) => calcWidth(props, "md")}%);
  }
  @media (min-width: 992px) {
    width: calc(${(props) => calcWidth(props, "lg")}%);
  }
  @media (min-width: 1200px) {
    width: calc(${(props) => calcWidth(props, "xl")}%);
  }
`;

export default Column;
