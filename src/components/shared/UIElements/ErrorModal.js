import React from "react";

import Modal from "./Modal";
import Button from "@material-ui/core/Button";

const ErrorModal = props => {
  const { onClear, error, hasFooter } = props;
  return (
    <Modal
      onCancel={onClear}
      header="Un error ocurrió"
      show={!!error}
      footer={hasFooter && <Button onClick={onClear}>Okay</Button>}
    >
      <p>{error}</p>
    </Modal>
  );
};

export default ErrorModal;
