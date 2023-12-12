import React from "react";
import { Modal, Typography } from "@mui/material";
import { Box } from "@mui/system";
import CloseIcon from "@mui/icons-material/Close";

const FeedbackModal = ({ open, onClose }) => {
  const style = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: "95%",
    maxWidth: "520px",
    color: "white.main",
    bgcolor: "primary.main",
    border: "2px solid",
    borderColor: "white.main",
    borderRadius: "1rem",
    boxShadow: 24,
    p: 4,
  };

  return (
    <Modal
      open={open}
      onClose={onClose}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <Box sx={style}>
        <CloseIcon
          onClick={() => onClose(false)}
          sx={{
            position: "absolute",
            right: "-5px",
            top: "-15px",
            width: "30px",
            height: "30px",
            outline: "2px solid #FFF",
            borderRadius: "50%",
            backgroundColor: "red.main",
          }}
        />
        <Typography variant="h6" component="h2">
          Muchas gracias por tu comentario.
        </Typography>
      </Box>
    </Modal>
  );
};

export default FeedbackModal;
