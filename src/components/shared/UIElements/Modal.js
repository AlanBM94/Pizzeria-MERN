import React from "react";
import ReactDOM from "react-dom";
import { CSSTransition } from "react-transition-group";
import { withStyles } from "@material-ui/styles";

import BackDrop from "./Backdrop";
import styles from "./ModalStyles";

const ModalOverlay = props => {
  const { classes } = props;
  const content = (
    <div className={`${classes.modal}`} style={props.style}>
      <header className={`${classes.modalHeader} `}>
        <h2>{props.header}</h2>
      </header>
      <div className={`${classes.modalContent}`}>{props.children}</div>
      <footer className={`${classes.modalFooter}`}>{props.footer}</footer>
    </div>
  );

  return ReactDOM.createPortal(content, document.getElementById("modal-hook"));
};

const Modal = props => {
  return (
    <>
      {props.show && <BackDrop onClick={props.onCancel} />}
      <CSSTransition
        in={props.show}
        mountOnEnter
        unmountOnExit
        timeout={200}
        classNames="modal"
      >
        <ModalOverlay {...props} />
      </CSSTransition>
    </>
  );
};

export default withStyles(styles)(Modal);
