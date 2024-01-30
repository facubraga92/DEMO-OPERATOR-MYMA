import { Modal, Typography } from "@mui/material";
import { Box } from "@mui/system";
import CloseIcon from "@mui/icons-material/Close";

const style = {
  position: "absolute",
  top: "53%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  height: "90%",
  width: "95%",
  maxWidth: "520px",
  color: "white.main",
  bgcolor: "primary.main",
  border: "2px solid",
  borderColor: "white.main",
  borderRadius: "1rem",
  boxShadow: 24,
  p: 2,
};

const TermsAndConditionsModal = ({ open, onClose, title, description }) => {
  return (
    <Modal
      open={open}
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
        <Typography
          sx={{ textAlign: "center" }}
          id="modal-modal-title"
          variant="h6"
          component="h2"
        >
          {title}
        </Typography>
        <Box
          sx={{
            marginTop: "20px",
            height: "90%",
            overflowY: "auto",
            backgroundColor: "white.main",
            color: "grey.main",
            borderRadius: "1rem",
            px: 2,
            py: 1,
          }}
        >
          <div dangerouslySetInnerHTML={{ __html: description }} />
        </Box>
      </Box>
    </Modal>
  );
};
export default TermsAndConditionsModal;
