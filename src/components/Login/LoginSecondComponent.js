import React from "react";
import styled from "styled-components";

const StyledDiv = styled.div`
  background-color: ${(props) => (props.primary ? "blue" : "red")};
  color: yellow;
  ${(props) => console.log(props.primary)}
`;

function LoginSecondComponent() {
  return (
    <div>
      <StyledDiv primary={false}>This is my LoginSecondComponent</StyledDiv>
    </div>
  );
}

export default LoginSecondComponent;
