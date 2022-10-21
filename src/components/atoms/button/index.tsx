import { darken } from "polished";
import { CSSProperties } from "react";
import BeatLoader from "react-spinners/BeatLoader";
import styled, { css } from "styled-components";
import { theme } from "../../../configs";
import { ButtonContainerProps, ButtonProps } from "./button";

const Button: React.FC<ButtonProps> = ({
  color,
  outline,
  borderless,
  fullWidth,
  loader,
  children,
}) => {
  const override: CSSProperties = {
    display: "block",
    margin: "0 auto",
    borderColor: "red",
  };

  return (
    <ButtonContainer
      color={color}
      outline={outline}
      borderless={borderless}
      fullWidth={fullWidth}
      disabled={loader}
    >
      {loader ? (
        <BeatLoader
          size={8}
          color={outline ? theme.colors.primary : theme.colors.solid.white}
          cssOverride={override}
        />
      ) : (
        children
      )}
    </ButtonContainer>
  );
};

const getColor = (type: string) => {
  switch (type) {
    case "primary":
      return theme.colors.primary;
    case "accent":
      return theme.colors.accent;
    case "success":
      return theme.colors.success;
    case "danger":
      return theme.colors.danger;
    case "warning":
      return theme.colors.warning;
    default:
      return theme.colors.primary;
  }
};

const ButtonContainer = styled.button<ButtonContainerProps>`
  font-weight: bold;
  height: 36px;
  border: none;
  border-radius: 6px;
  color: white;
  padding: 0 16px 0 16px;
  text-align: center;
  font-size: 16px;
  cursor: pointer;
  background-color: ${({ color }) => getColor(color)};
  &:hover {
    background-color: ${({ color }) => darken(0.05, getColor(color))};
  }
  ${({ borderless, color }) =>
    borderless &&
    css`
      border: none;
      background-color: transparent;
      color: ${getColor(color)};
      &:hover {
        background-color: transparent;
      }
    `}
  ${({ outline, color }) =>
    outline &&
    css`
      border: 2px solid ${getColor(color)};
      background-color: transparent;
      color: ${getColor(color)};
    `}
  ${({ fullWidth }) =>
    fullWidth &&
    css`
      width: 100%;
    `}
`;

export default Button;
