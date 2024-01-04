import { Grid, MenuItem, Select } from "@mui/material";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";

import React, { useState } from "react";

const Filters = ({dropdownData}) => {
  const [filters, setFilters] = useState({ clusters: "default" });

  const handleAge = (event) => {
    setFilters({ ...filters, clusters: event.target.value });
  };

  console.log(dropdownData)
  return (
    <Grid
      container
      sx={{
        display: "flex",
        backgroundColor: "#F8F8F8",
        alignContent: "center",
        paddingInline: "1rem",
        height: "2.5rem",
      }}
    >
      <Grid
        item
        sx={{ display: "flex", justifyContent: "center", alignItems: "center" }}
        xs={3}
      >
        <Select
          IconComponent={() => (
            <KeyboardArrowDownIcon sx={{ fontSize: "0.7rem", color: "#999" }} />
          )}
          MenuProps={{ sx: { width: "5rem" } }}
          sx={{
            width: "5rem",
            height: "1.5rem",
            fontSize: "0.6rem",
            fontWeight: "bold",
            textAlign: "center",
            color: "#663B73",
            backgroundColor: "#fff",
            //inner select padding
            ".css-11u53oe-MuiSelect-select-MuiInputBase-input-MuiOutlinedInput-input.css-11u53oe-MuiSelect-select-MuiInputBase-input-MuiOutlinedInput-input.css-11u53oe-MuiSelect-select-MuiInputBase-input-MuiOutlinedInput-input":
              {
                padding: 0,
              },
            // ".MuiSelect-icon": {
            //   visibility: "collapse",
            // },
            //select no-border
            ".MuiOutlinedInput-notchedOutline": { border: 0 },
            //focus border color
            "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
              borderColor: "#663B73",
            },
          }}
          value={filters.clusters}
          onChange={handleAge}
        >
          <MenuItem
            sx={{
              fontSize: "0.7rem",
              justifyContent: "center",
              color: "#663B73",
            }}
            value="default"
          >
            Cluster
          </MenuItem>
          <MenuItem value={10}>Ten</MenuItem>
          <MenuItem value={20}>Twenty</MenuItem>
          <MenuItem value={30}>Thirty</MenuItem>
        </Select>
      </Grid>
      <Grid
        item
        sx={{ display: "flex", justifyContent: "center", alignItems: "center" }}
        xs={3}
      >
        <Select
          IconComponent={() => (
            <KeyboardArrowDownIcon sx={{ fontSize: "0.7rem", color: "#999" }} />
          )}
          MenuProps={{ sx: { width: "5rem" } }}
          sx={{
            width: "5rem",
            height: "1.5rem",
            fontSize: "0.6rem",
            fontWeight: "bold",
            textAlign: "center",
            color: "#663B73",
            backgroundColor: "#fff",
            //inner select padding
            ".css-11u53oe-MuiSelect-select-MuiInputBase-input-MuiOutlinedInput-input.css-11u53oe-MuiSelect-select-MuiInputBase-input-MuiOutlinedInput-input.css-11u53oe-MuiSelect-select-MuiInputBase-input-MuiOutlinedInput-input":
              {
                padding: 0,
              },
            // ".MuiSelect-icon": {
            //   visibility: "collapse",
            // },
            //select no-border
            ".MuiOutlinedInput-notchedOutline": { border: 0 },
            //focus border color
            "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
              borderColor: "#663B73",
            },
          }}
          value={filters.clusters}
          onChange={handleAge}
        >
          <MenuItem
            sx={{
              fontSize: "0.7rem",
              justifyContent: "center",
              color: "#663B73",
            }}
            value="default"
          >
            Ubicación
          </MenuItem>
          <MenuItem value={10}>Ten</MenuItem>
          <MenuItem value={20}>Twenty</MenuItem>
          <MenuItem value={30}>Thirty</MenuItem>
        </Select>
      </Grid>
      <Grid
        item
        sx={{ display: "flex", justifyContent: "center", alignItems: "center" }}
        xs={3}
      >
        <Select
          IconComponent={() => (
            <KeyboardArrowDownIcon sx={{ fontSize: "0.7rem", color: "#999" }} />
          )}
          MenuProps={{ sx: { width: "5rem" } }}
          sx={{
            width: "5rem",
            height: "1.5rem",
            fontSize: "0.6rem",
            fontWeight: "bold",
            textAlign: "center",
            color: "#663B73",
            backgroundColor: "#fff",
            //inner select padding
            ".css-11u53oe-MuiSelect-select-MuiInputBase-input-MuiOutlinedInput-input.css-11u53oe-MuiSelect-select-MuiInputBase-input-MuiOutlinedInput-input.css-11u53oe-MuiSelect-select-MuiInputBase-input-MuiOutlinedInput-input":
              {
                padding: 0,
              },
            // ".MuiSelect-icon": {
            //   visibility: "collapse",
            // },
            //select no-border
            ".MuiOutlinedInput-notchedOutline": { border: 0 },
            //focus border color
            "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
              borderColor: "#663B73",
            },
          }}
          value={filters.clusters}
          onChange={handleAge}
        >
          <MenuItem
            sx={{
              fontSize: "0.7rem",
              justifyContent: "center",
              color: "#663B73",
            }}
            value="default"
          >
            Categoría
          </MenuItem>
          <MenuItem value={10}>Ten</MenuItem>
          <MenuItem value={20}>Twenty</MenuItem>
          <MenuItem value={30}>Thirty</MenuItem>
        </Select>
      </Grid>
      <Grid
        item
        sx={{ display: "flex", justifyContent: "center", alignItems: "center" }}
        xs={3}
      >
        <Select
          IconComponent={() => (
            <KeyboardArrowDownIcon sx={{ fontSize: "0.7rem", color: "#999" }} />
          )}
          MenuProps={{ sx: { width: "5rem" } }}
          sx={{
            width: "5rem",
            height: "1.5rem",
            fontSize: "0.6rem",
            fontWeight: "bold",
            textAlign: "center",
            color: "#663B73",
            backgroundColor: "#fff",
            //inner select padding
            ".css-11u53oe-MuiSelect-select-MuiInputBase-input-MuiOutlinedInput-input.css-11u53oe-MuiSelect-select-MuiInputBase-input-MuiOutlinedInput-input.css-11u53oe-MuiSelect-select-MuiInputBase-input-MuiOutlinedInput-input":
              {
                padding: 0,
              },
            // ".MuiSelect-icon": {
            //   visibility: "collapse",
            // },
            //select no-border
            ".MuiOutlinedInput-notchedOutline": { border: 0 },
            //focus border color
            "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
              borderColor: "#663B73",
            },
          }}
          value={filters.clusters}
          onChange={handleAge}
        >
          <MenuItem
            sx={{
              fontSize: "0.7rem",
              justifyContent: "center",
              color: "#663B73",
            }}
            value="default"
          >
            Máquinas
          </MenuItem>
          <MenuItem value={10}>Ten</MenuItem>
          <MenuItem value={20}>Twenty</MenuItem>
          <MenuItem value={30}>Thirty</MenuItem>
        </Select>
      </Grid>
    </Grid>
  );
};

export default Filters;
