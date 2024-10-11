import styled from "styled-components";

export const Container = styled.div`
  max-width: ${(props) => props.maxWidth || "1200px"};
  padding: ${(props) => props.padding || "20px"};
  margin: ${(props) => props.marginTop || "0px"} auto
    ${(props) => props.marginBottom || "0px"} auto;
  background-color: ${(props) => props.backgroundColor || "transparent"};
  box-sizing: border-box;
  width: 100%;
  border: ${(props) => (props.border ? props.border : "none")};
  border-radius: ${(props) => (props.borderRadius ? props.borderRadius : "0")};
  box-shadow: ${(props) => (props.boxShadow ? props.boxShadow : "none")};
`;
