import styled from "styled-components";
import { theme } from "../../../configs";

const Container = styled.div`
  display: flex;
  overflow-x: hidden;
  overflow-y: auto;
  box-sizing: border-box;
  width: 100%;
  min-height: 100vh;
  background-color: ${theme.backgroundColor};
`;

export default Container;
