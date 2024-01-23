// eslint-disable-next-line
import React, { useState } from "react";
import { Grid, MenuItem, Select } from "@mui/material";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import customSelectStyles from "./customSelectStyles";

const CustomSelect = ({
  name,
  value,
  onChange,
  items,
  label,
  isMachines,
  disabled,
}) => (
  <Select
    name={name}
    IconComponent={() => (
      <KeyboardArrowDownIcon sx={{ fontSize: "0.7rem", color: "#999" }} />
    )}
    MenuProps={{ sx: { width: isMachines ? "auto" : "5rem" } }}
    sx={customSelectStyles(isMachines)}
    value={value}
    onChange={onChange}
    disabled={disabled}
  >
    <MenuItem
      sx={{
        fontSize: "1rem",
        justifyContent: "center",
        color: "#663B73",
      }}
      value="default"
    >
      {label}
    </MenuItem>
    {items?.map((element, i) => {
      if (element !== "default") {
        return (
          <MenuItem
            sx={{
              display: isMachines ? "flex" : "flex",
              justifyContent: "center",
            }}
            key={i}
            value={isMachines ? element.id : element}
          >
            {isMachines ? element.alias : element}
          </MenuItem>
        );
      }
      return null;
    })}
  </Select>
);

const Filters = ({ dropdownData, machinesSelectorDisabled }) => {
  const [filters, setFilters] = useState({
    clusters: "default",
    locations: "default",
    categories: "default", //label: "Tipo"
    machines: "default",
  });

  //demo
  // useEffect(() => {
  //   console.log(filters);
  // }, [filters]);

  const handleFilters = (event) => {
    const { name, value } = event.target;
    setFilters({ ...filters, [name]: value });
  };

  return (
    <Grid
      container
      sx={{
        display: "flex",
        maxWidth: "552px",
        backgroundColor: "#F8F8F8",
        alignContent: "center",
        paddingInline: "1rem",
        height: "2.5rem",
        position: "fixed",
        zIndex: "1",
      }}
    >
      <Grid
        item
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
        xs={3}
      >
        <CustomSelect
          name="clusters"
          value={filters.clusters}
          onChange={handleFilters}
          items={dropdownData?.clusters}
          label="Cluster"
          width="5rem"
        />
      </Grid>
      <Grid
        item
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
        xs={3}
      >
        <CustomSelect
          name="locations"
          value={filters.locations}
          onChange={handleFilters}
          items={dropdownData?.locations}
          label="Ubicación"
          width="5rem"
        />
      </Grid>
      <Grid
        item
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
        xs={3}
      >
        <CustomSelect
          name="categories"
          value={filters.categories}
          onChange={handleFilters}
          items={dropdownData?.categories}
          label="Tipo"
          width="5rem"
        />
      </Grid>
      <Grid
        item
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
        xs={3}
      >
        <CustomSelect
          name="machines"
          value={filters.machines}
          onChange={handleFilters}
          items={dropdownData?.machines}
          label="Máquinas"
          width="auto"
          isMachines={true}
          disabled={machinesSelectorDisabled}
        />
      </Grid>
    </Grid>
  );
};

export default Filters;
