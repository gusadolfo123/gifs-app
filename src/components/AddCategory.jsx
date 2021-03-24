import React, { useState } from "react";
import PropTypes from "prop-types";

export const AddCategory = ({ setCategories }) => {

  //#region states
  const [value, setValue] = useState('');
  //#endregion

  //#region handlers
  const handlerOnChange = (e) => {
    setValue(e.target.value);
  };

  const handlerSubmit = (e) => {
    e.preventDefault();
    if (value.trim().length > 2) {
      setCategories((categories) => [value, ...categories]);
      setValue("");
    }
  };
  //#endregion

  return (
    <form onSubmit={handlerSubmit}>
      <input type="text" value={value} onChange={handlerOnChange} />
    </form>
  );
};

AddCategory.propTypes = {
  setCategories: PropTypes.func.isRequired
}
