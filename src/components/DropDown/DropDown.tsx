import { FormControl, MenuItem, OutlinedInput, Select } from "@mui/material";
import { NONAME } from "dns";
import React from "react";

function getStyles(name, personName, theme) {
  return {
    fontWeight:
      personName.indexOf(name) === -1
        ? theme.typography.fontWeightRegular
        : theme.typography.fontWeightMedium,
  };
}
const DropDown = ({ templateName, handleChange, MenuProps, names, theme, placeholder }) => {
  return (
    <FormControl sx={{ width: "100%", mt: 3 }}>
      <Select
        style={{ borderRadius: 8 }}
        displayEmpty
        value={templateName}
        onChange={handleChange}
        input={<OutlinedInput />}
        renderValue={(selected) => {
          if (selected.length === 0) {
            return <div style={{ color: "#707D89" }}>{placeholder}</div>;
          }

          return selected.join(", ");
        }}
        MenuProps={MenuProps}
        inputProps={{ "aria-label": "Without label" }}
      >
        <MenuItem disabled value="">
          <div>{placeholder}</div>
        </MenuItem>
        {names?.map((name) => (
          <MenuItem
            key={name}
            value={name}
            style={getStyles(name, templateName, theme)}
          >
            {name}
          </MenuItem>
        ))}
      </Select>
    </FormControl>
  );
};

export default DropDown;
