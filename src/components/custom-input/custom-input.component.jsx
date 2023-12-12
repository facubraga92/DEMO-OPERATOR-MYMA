import { InputBase, InputLabel, styled } from "@mui/material";

const Input = styled(InputBase)((props) => {
  return {
    backgroundColor: "#FFF",
    fontSize: "15px",
    paddingInline: "30px",
    borderRadius: "2rem",
    width: "100%",
    height: "64px",
    marginBottom: 10,
  };
});

const CustomInput = (props) => {
  return (
    <>
      <InputLabel
        sx={{
          color: "#FFF",
          marginBottom: "5px",
          overflow: props.name === "identificationType" && "visible",
        }}
      >
        {props?.label}
      </InputLabel>
      <Input {...props} />
    </>
  );
};

export default CustomInput;
