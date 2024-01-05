export const customSelectStyles = (isMachines) => ({
  width: isMachines ? "6rem" : "5rem",
  height: "1.5rem",
  fontSize: "0.6rem",
  fontWeight: "bold",
  textAlign: "center",
  color: "#663B73",
  backgroundColor: "#fff",
  ".css-11u53oe-MuiSelect-select-MuiInputBase-input-MuiOutlinedInput-input.css-11u53oe-MuiSelect-select-MuiInputBase-input-MuiOutlinedInput-input.css-11u53oe-MuiSelect-select-MuiInputBase-input-MuiOutlinedInput-input":
    {
      padding: 0,
    },
  ".MuiOutlinedInput-notchedOutline": { border: 0 },
  "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
    borderColor: "#663B73",
  },
});

export default customSelectStyles;
