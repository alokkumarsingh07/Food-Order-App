import React from "react";
import reactDom from "react-dom";

import styles from "./Modal.module.css";

const portalElement = document.getElementById("overlays-root");

const Backdrop = (props) => {
  return <div className={styles["backdrop"]}></div>;
};

const Overlay = (props) => {
  return (
    <div className={styles["modal"]}>
      <div className={styles["content"]}>{props.children}</div>
    </div>
  );
};

function Modal(props) {
  return (
    <>
      {reactDom.createPortal(<Backdrop />, portalElement)}
      {reactDom.createPortal(
        <Overlay>{props.children}</Overlay>,
        portalElement
      )}
    </>
  );
}

export default Modal;
