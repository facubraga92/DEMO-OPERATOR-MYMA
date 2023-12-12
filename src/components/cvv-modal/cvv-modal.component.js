import { CircularProgress, Modal, Typography } from "@mui/material";
import { Box } from "@mui/system";
import { useEffect, useLayoutEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { updateCardToken } from "../../services/card.services";
import CustomizedButtons from "../custom-button/custom-button.component";
import { ReactComponent as CardIcon } from "../../assets/images/card-icon.svg";
import CloseIcon from "@mui/icons-material/Close";
import { resetCardValues } from "../../store/features/card/cardSlice";
import validateToken from "../../utils/validateToken";

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

const CvvModal = ({ open, cardData, storeId, onClose }) => {
  const [label, setLabel] = useState("Enviar");
  const [disabled, setDisabled] = useState(false);
  const [error, setError] = useState(false);

  const mp = useRef();
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { updateCardTokenStatus } = useSelector((state) => state.card);

  useEffect(() => {
    restartButton();
    setError(false);
  }, [open]);

  useEffect(() => {
    dispatch(resetCardValues());
  }, [dispatch]);

  useLayoutEffect(() => {
    if (open) {
      // eslint-disable-next-line no-undef
      mp.current = new MercadoPago(process.env.REACT_APP_MP);

      setTimeout(() => renderCvvInput(), 0);
    }
  }, [open]);

  useEffect(() => {
    if (updateCardTokenStatus === "succeeded" && cardData) {
      navigate(`/loading?storeId=${storeId}&cardId=${cardData.id}`);
    }
  }, [cardData, dispatch, navigate, storeId, updateCardTokenStatus]);

  const renderCvvInput = () => {
    mp.current.fields
      .create("securityCode", {
        placeholder: "CVV",
      })
      .mount("form-checkout__securityCode-container");
  };

  const restartButton = () => {
    setLabel("Guardar");
    setDisabled(false);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      setLabel("Cargando, espere...");
      setDisabled(true);
      setError(false);
      // const token = await mp.current.fields.createCardToken({
      //   cardId: cardData.paymentGatewayCardId,
      // });
      // dispatch(
      //   updateCardToken({
      //     cardData: {
      //       id: cardData.id,
      //       token: token.id,
      //     },
      //   })
      // );
      const [token1, token2] = await Promise.all([
        mp.current.fields.createCardToken({
          cardId: cardData.paymentGatewayCardId,
        }),
        mp.current.fields.createCardToken({
          cardId: cardData.paymentGatewayCardId,
        }),
      ]);

      validateToken(cardData.id, token1.id).then((response) => {
        if (response.data) {
          dispatch(
            updateCardToken({
              cardData: {
                id: cardData.id,
                token: token2.id,
              },
            })
          );
        } else {
          setError(true);
          restartButton();
        }
      });
    } catch (e) {
      console.error("error creating card token: ", e);
      setError(true);
      restartButton();
    }
  };

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
        <Typography id="modal-modal-title" variant="h6" component="h2">
          Ingrese el código de seguridad
        </Typography>
        <form id="form-checkout">
          <span style={{ display: "block", marginBottom: "1rem" }}>
            <span style={{ textTransform: "uppercase" }}>
              {cardData && `${cardData?.paymentMethod?.id}`}
            </span>
            {cardData && ` terminada en ${cardData.lastFourDigits}`}
          </span>
          <div
            id="form-checkout__securityCode-container"
            className="container"
          ></div>
          <input type="number" name="token" id="token" hidden />
          {error && (
            <label>El CVV ingresado no es válido, intente nuevamente...</label>
          )}
          <CustomizedButtons
            onClick={handleSubmit}
            sx={{ flexDirection: "row-reverse" }}
            disabled={disabled}
            variant="outlined"
            label={label}
          >
            {disabled ? (
              <CircularProgress size={30} color="secondary" />
            ) : (
              <CardIcon />
            )}
          </CustomizedButtons>
        </form>
      </Box>
    </Modal>
  );
};
export default CvvModal;
