import styled from "styled-components";
import { theme } from "../../../configs";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  overflow-x: hidden;
  overflow-y: auto;
  box-sizing: border-box;
  width: 100%;
  height: 100%;
  background-color: ${theme.backgroundColor};
`;

export default Container;
