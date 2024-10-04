// Librarys
import PropTypes from "prop-types";

// Components
import Select from 'react-select';

// Utils
import classnames from "../../utils/classnames";

import "./SelectUI.css";
import { useRef, useState } from "react";

const customStyles = {
  control: (provided, state) => ({
    ...provided,
    // borderColor: state.isFocused ? 'blue' : provided.borderColor,
    border: '1px solid #bdbdbd',
    boxShadow: state.isFocused ? '0 0 8px -1px #bdbdbd' : provided.boxShadow,
    '&:hover': {
      // borderColor: state.isFocused ? '#bdbdbd' : provided.borderColor,
    },
    minHeight: '35px',
    height: '35px',
    borderRadius: '0.375rem',
  }),
};

function SelectUI({
  autoFocus,
  selectClassName,
  isDisabled,
  isMulti, // allow users select multiple options
  isSearchable,
  onChange,
  options,
  placeholder,
  noOptionsMessage, // Text to display when there are no options
  value, // Control the current value
  defaultValue,
  inputValue,
  menuIsOpen, // control whether the menu is open
  onFocus,
  onBlur,

  textLabel,
  style,
  containerClassName,
  disabled,
  isLoading,
}) {

  const searchInputRef = useRef(null);
  const [isOpen, setIsOpen] = useState(false);

  const handleChange = (selectedOption) => {
    if (onChange) {
      onChange(selectedOption);
    }
    setIsOpen(false);
  }

  const handleFocus = () => {
    setIsOpen(true);
    onFocus?.();
  }

  const handleBlur = () => {
    setIsOpen(false);
    onBlur?.();
  }

  return (
    <div
      style={style}
      className={classnames([
        containerClassName,
        disabled ? "disabled" : null,
        "select position-relative",
      ])}
    >
      {typeof textLabel === "string" && textLabel.length > 0 && (
        <label className="select-label w-100">
          {textLabel}
        </label>
      )}

      {!isLoading && (
        <Select
            ref={searchInputRef}
            autoFocus={autoFocus}
            className={classnames([selectClassName, "select-container"])}
            styles={customStyles}
            isDisabled={isDisabled}
            isMulti={isMulti}
            isSearchable={isSearchable}
            onChange={handleChange}
            options={options}
            placeholder={placeholder}
            noOptionsMessage={noOptionsMessage}
            value={value}
            defaultValue={defaultValue}
            inputValue={inputValue}
            menuIsOpen={isOpen || menuIsOpen}
            onFocus={handleFocus}
            onBlur={handleBlur}
        />
      )}
    </div>
  );
}

SelectUI.propTypes = {
  selectRef: PropTypes.object,
  autoFocus: PropTypes.bool,
  selectClassName: PropTypes.string,
  isDisabled: PropTypes.bool,
  isMulti: PropTypes.bool,
  isSearchable: PropTypes.bool,
  onChange: PropTypes.func,
  options: PropTypes.arrayOf(PropTypes.object).isRequired,
  placeholder: PropTypes.string,
  noOptionsMessage: PropTypes.string,
  value: PropTypes.any,
  defaultValue: PropTypes.object,
  inputValue: PropTypes.string,
  menuIsOpen: PropTypes.string,
  onFocus: PropTypes.func,
  onBlur: PropTypes.func,

  style: PropTypes.object,
  containerClassName: PropTypes.string,
  loaderClassName: PropTypes.string,
  disabled: PropTypes.bool,
  isLoading: PropTypes.bool,
  textLabel: PropTypes.string,
};

export default SelectUI;
