import {
  Box,
  Checkbox,
  Divider,
  FormControlLabel,
  Grid,
  Typography,
} from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { setUserData } from "../../store/features/user/userSlice";
import CustomizedButtons from "../../components/custom-button/custom-button.component";
import CustomInput from "../../components/custom-input/custom-input.component";
import ContainerRounded from "../../styled-components/container-rounded";
import * as yup from "yup";
import { useState, useEffect } from "react";
import { createCustomer } from "../../services/customer.service";
import { Link, useNavigate } from "react-router-dom";
import ReactGA from "react-ga4";
import TermsAndConditionsModal from "../../components/t&c-modal/t&c-modal.component";
import axios from "axios";
import { BASE_URL } from "../../services/utils";

const CustomSubtitle = ({ text }) => {
  return (
    <Typography variant="h4" gutterBottom>
      {text}
    </Typography>
  );
};

let Schema = yup.object().shape({
  // nickName: yup.string().required(),
  // identificationNumber: yup.string().required(),
  // birthdate: yup.string().required(),
  // phoneNumber: yup.string().required(),
  birthdate: yup.string(),
  phoneNumber: yup.string(),
  termAndConditionsAccepted: yup.boolean().isTrue().required(),
  // customerValidDataAccepted: yup.boolean().isTrue().required(),
  dataPrivacyTermsAccepted: yup.boolean().isTrue().required(),
});

const AddCustomer = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [openModal, setOpenModal] = useState(false);
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  const { authData } = useSelector((state) => state.auth);
  const { userData } = useSelector((state) => state.user);
  const [isValidForm, setIsValidForm] = useState(false);

  const handleTermsModal = async () => {
    const { data } = await axios.get(`${BASE_URL}/TermsAndConditions`);
    const { title, description } = data.data;
    setTitle(title);
    setDescription(description);
    setOpenModal(true);
  };

  const handleDataPrivacyModal = async () => {
    const { data } = await axios.get(`${BASE_URL}/DataPrivacyTerms`);
    const { title, description } = data.data;
    setTitle(title);
    setDescription(description);
    setOpenModal(true);
  };

  useEffect(() => {
    ReactGA.send({
      hitType: "pageview",
      page: window.location.pathname,
      title: "Create Customer Page",
    });
  }, []);

  useEffect(() => {
    Schema.isValid(userData).then(function (valid) {
      setIsValidForm(valid);
    });
  }, [userData]);

  // useEffect(() => {
  //   console.log("authData", authData);
  // }, [authData]);

  const handleChange = (e) => {
    if (e.target.type === "checkbox") {
      dispatch(setUserData({ ...userData, [e.target.name]: e.target.checked }));
    } else {
      dispatch(setUserData({ ...userData, [e.target.name]: e.target.value }));
    }
  };

  const handleCreateUser = async () => {
    try {
      const payload = {
        access_token: authData.access_token,
        customerData: userData,
      };
      await dispatch(createCustomer(payload));
      navigate("/home");
    } catch (error) {
      console.error("Error creating customer:", error);
    }
  };

  return (
    <ContainerRounded
      style={{ flexDirection: "column", justifyContent: "space-evenly" }}
    >
      <Box
        xs={12}
        sx={{
          marginTop: "10px",
          padding: "15px 44px",
          display: "flex",
          justifyContent: "center",
        }}
      >
        <CustomSubtitle text="Crear tu cuenta" />
      </Box>
      <Grid
        container
        sx={{
          margin: "0px 0 15px",
          display: "flex",
          flexDirection: "row",
        }}
      >
        {/* <Grid item xs={12}>
          <CustomInput
            onChange={handleChange}
            name="nickName"
            label={"Nombre de Usuario"}
          />
        </Grid>
        <Grid container item>
          <Grid item xs={5}>
            <CustomInput
              onChange={handleChange}
              name="identificationType"
              defaultValue="DNI"
              label={"Tipo de documento"}
              readOnly
            />
          </Grid>
          <Grid item xs={1}></Grid>
          <Grid item xs={6}>
            <CustomInput
              onChange={handleChange}
              name="identificationNumber"
              label={"Número"}
              type="number"
            />
          </Grid>
        </Grid> */}
        <Grid item xs={12} sx={{ display: "flex", justifyContent: "center" }}>
          <Typography
            sx={{
              marginTop: "-1rem",
              marginBlockEnd: "-1rem",
              display: "flex",
              alignItems: "baseline",
            }}
          >
            <pre
              style={{
                fontFamily: "inherit",
                color: "#fff",
              }}
            >
              {"Fecha de nacimiento "}
            </pre>
            <pre
              style={{
                fontFamily: "inherit",
                color: "#ffcf4a",
                fontSize: "14px",
                fontStyle: "italic",
              }}
            >
              - Sorpresas en tu cumpleaños!🥳
            </pre>
          </Typography>
        </Grid>
        <Grid item xs={12} sx={{ paddingInline: "20px" }}>
          <CustomInput onChange={handleChange} name="birthdate" type="date" />
        </Grid>

        <Grid item xs={12} sx={{ display: "flex", justifyContent: "center" }}>
          <Typography
            sx={{
              marginTop: "1rem",
              marginBlockEnd: "-1rem",
              display: "flex",
              alignItems: "baseline",
              paddingInlineStart: "5px",
            }}
          >
            <pre
              style={{
                fontFamily: "inherit",
                color: "#fff",
              }}
            >
              {"Número de celular "}
            </pre>
            <pre
              style={{
                fontFamily: "inherit",
                color: "#ffcf4a",
                fontSize: "14px",
                fontStyle: "italic",
              }}
            >
              - Últimos productos y promos!😎
            </pre>
          </Typography>
        </Grid>

        <Grid item xs={12} sx={{ paddingInline: "20px" }}>
          <CustomInput onChange={handleChange} name="phoneNumber" type="tel" />
        </Grid>
        <Grid
          item
          xs={12}
          sx={{ paddingInline: "20px", marginBlockStart: "0.5rem" }}
        >
          <Divider />
        </Grid>

        <Grid
          item
          xs={12}
          sx={{ paddingInline: "20px", marginBlockStart: "1rem" }}
        >
          <FormControlLabel
            sx={{ color: "#FFF" }}
            control={
              <Checkbox
                sx={{ color: "#FFF" }}
                color="beige"
                name="termAndConditionsAccepted"
                onChange={handleChange}
              />
            }
            label={
              <span>
                Acepto los{" "}
                <Link
                  onClick={(e) => {
                    e.preventDefault();
                    handleTermsModal();
                  }}
                  style={{ textDecoration: "underline", color: "white" }}
                >
                  Términos y Condiciones
                </Link>
              </span>
            }
          />
        </Grid>

        <Grid item xs={12} sx={{ paddingInline: "20px" }}>
          <FormControlLabel
            sx={{ color: "#FFF" }}
            control={
              <Checkbox
                sx={{ color: "#FFF" }}
                color="beige"
                name="dataPrivacyTermsAccepted"
                onChange={handleChange}
              />
            }
            label={
              <span>
                Acepto la{" "}
                <Link
                  onClick={(e) => {
                    e.preventDefault();
                    handleDataPrivacyModal();
                  }}
                  style={{ textDecoration: "underline", color: "white" }}
                >
                  Política de Privacidad de Datos
                </Link>
              </span>
            }
          />
        </Grid>

        {/* <Grid item xs={12}>
          <FormControlLabel
            sx={{ color: "#FFF" }}
            control={
              <Checkbox
                sx={{ color: "#FFF" }}
                color="beige"
                name="customerValidDataAccepted"
                onChange={handleChange}
              />
            }
            label="Declaro bajo juramento que los datos ingresados son correctos."
          />
        </Grid> */}
      </Grid>

      <Grid
        item
        xs={12}
        sx={{
          display: "flex",
          justifyContent: "center",
          backgroundColor: "#fff",
          padding: "0.5rem 1.25rem 0.5rem",
          borderRadius: "80px 80px",
        }}
      >
        <CustomizedButtons
          // color='secondary'
          disabled={!isValidForm}
          label={"Siguiente"}
          handleClick={handleCreateUser}
        />
      </Grid>
      <TermsAndConditionsModal
        onClose={setOpenModal}
        open={openModal}
        title={title}
        description={description}
      />
    </ContainerRounded>
  );
};

export default AddCustomer;
