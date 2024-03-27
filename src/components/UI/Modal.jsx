import React from "react";
import reactDom from "react-dom";

import styles from "./Modal.module.css";

const portalElement = document.getElementById("overlays-root");

const Backdrop = (props) => {
  return <div className={styles["backdrop"]} onClick={props.onClick}></div>;
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
      {reactDom.createPortal(<Backdrop onClick={props.onClickBackdrop}/>, portalElement)}
      {reactDom.createPortal(
        <Overlay>{props.children}</Overlay>,
        portalElement
      )}
    </>
  );
}

export default Modal;
