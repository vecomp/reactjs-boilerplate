import React, { useState } from "react";
import styled from "styled-components";
import { theme } from "../../../configs";
import { InputProps } from "./input";
import InputMask from "react-input-mask";
import {FaRegEye, FaRegEyeSlash} from "react-icons/fa";

const Input: React.FC<InputProps> = ({placeholder, type, mask, value, onChange}) => {
    const [showPassword, setShowPassword] = useState(false);

  const togglePassword = () => {
    setShowPassword(!showPassword);
  };

  return (
    <InputContainer>
        {mask && (
            <InputMask mask={mask} value={value} onChange={onChange}>
            <InputDefault
                type={type}
                placeholder={placeholder}
              />
          </InputMask>
        )}
        {!mask && (
            <>
                <InputDefault placeholder={placeholder} type={showPassword ? 'text' : type} value={value} onChange={onChange} />
        {type === 'password' && (
            <TogglePassword onClick={togglePassword}>
            {showPassword ? <FaRegEyeSlash /> : <FaRegEye />}
        </TogglePassword>
        )}
            </>
        )}
    </InputContainer>
  )
}

const InputContainer = styled.div`
    display: flex;
    flex-direction: row;
    box-sizing: border-box;
    width: 100%;
    border-radius: 8px;
    border: 1px solid #bbb;
    &:focus-within {
        border: 1px solid ${theme.colors.primary};
    }
`

const InputDefault = styled.input`
flex: 1;
  box-sizing: border-box;
  background-color: transparent;
  height: 36px;
  border: none !important;
  padding: 4px 8px 4px 8px;
  font-size: 16px;
  &:focus-visible {
    outline: none;
  }
`;

const TogglePassword = styled.div`
  display: flex;
  width: 36px;
  height: 36px;
  font-size: 16px;
  align-items: center;
  justify-content: center;
  color: #bbb;
  &:active {
    opacity: 0.5;
  }
`

export default Input;