import React from "react";
import ReactDOM from "react-dom";

function ErrorModal() {
  return (
    <>
      {ReactDOM.createPortal(
        <div>This is Error Modal Component</div>,
        document.getElementById("app__error__modal")
      )}
    </>
  );
}

export default ErrorModal;
