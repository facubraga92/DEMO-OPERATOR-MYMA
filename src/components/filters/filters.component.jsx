import { Grid, MenuItem, Select } from "@mui/material";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";

import React, { useState } from "react";

const Filters = ({ dropdownData }) => {
  const [filters, setFilters] = useState({
    clusters: "default",
    locations: "default",
    categories: "default",
    machines: "default",
  });

  const handleFilters = (event) => {
    const { name, value } = event.target;
    setFilters({ ...filters, [name]: value });
  };
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
          name="clusters"
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
          onChange={handleFilters}
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
          {dropdownData?.clusters?.map((element, i) => {
            if (element !== "default") {
              return (
                <MenuItem
                  sx={{ display: "flex", justifyContent: "center" }}
                  key={i}
                  value={element}
                >
                  {element}
                </MenuItem>
              );
            }
          })}
        </Select>
      </Grid>
      <Grid
        item
        sx={{ display: "flex", justifyContent: "center", alignItems: "center" }}
        xs={3}
      >
        <Select
          name="locations"
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
          value={filters.locations}
          onChange={handleFilters}
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
          {dropdownData?.locations?.map((element, i) => {
            if (element !== "default") {
              return (
                <MenuItem
                  sx={{ display: "flex", justifyContent: "center" }}
                  key={i}
                  value={element}
                >
                  {element}
                </MenuItem>
              );
            }
          })}
        </Select>
      </Grid>
      <Grid
        item
        sx={{ display: "flex", justifyContent: "center", alignItems: "center" }}
        xs={3}
      >
        <Select
          name="categories"
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
          value={filters.categories}
          onChange={handleFilters}
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
          {dropdownData?.categories?.map((element, i) => {
            if (element !== "default") {
              return (
                <MenuItem
                  sx={{ display: "flex", justifyContent: "center" }}
                  key={i}
                  value={element}
                >
                  {element}
                </MenuItem>
              );
            }
          })}
        </Select>
      </Grid>
      <Grid
        item
        sx={{ display: "flex", justifyContent: "center", alignItems: "center" }}
        xs={3}
      >
        <Select
          name="machines"
          IconComponent={() => (
            <KeyboardArrowDownIcon sx={{ fontSize: "0.7rem", color: "#999" }} />
          )}
          MenuProps={{ sx: { width: "auto" } }}
          sx={{
            width: "6rem",
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
          value={filters.machines}
          onChange={handleFilters}
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
          {dropdownData?.machines?.map((element, i) => {
            return (
              <MenuItem
                sx={{
                  paddingInline: "0",
                  fontSize: "0.6rem",
                  display: "flex",
                  justifyContent: "center",
                  paddingBlock: "0.5rem",
                }}
                key={i}
                id={element.id}
                value={element.id}
              >
                {element.alias}
              </MenuItem>
            );
          })}
        </Select>
      </Grid>
    </Grid>
  );
};

export default Filters;
