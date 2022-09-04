import React from "react";
import styled from "styled-components";

const StyledDiv = styled.div`
  background-color: blue;
  color: white;
  font-size: 50px;
`;

function LoginFirstComponent() {
  return (
    <div>
      <StyledDiv>This is my LoginFirstComponent</StyledDiv>
    </div>
  );
}

export default LoginFirstComponent;
