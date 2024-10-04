// Librarys
import PropTypes from "prop-types";

// Utils
import classnames from "../../utils/classnames";

// Styles
import "./InputText.css";

// Constants
import {
  DEFAULT_TYPE,
} from "./constants";

export default function InputText({
  type = DEFAULT_TYPE,
  textLabel,
  value,
  style,
  name,
  className,
  autoFocus,
  placeholder,
  containerStyle,
  containerClassName,
  containerLabelClassName,
  customInput = {},
  disabled,
  readOnly,
  onChange,
  onFocus,
  onBlur,
  error,
  pattern,
  maxLength,
}) {
  const numberInputOnWheelPreventChange = e => {
    if (e.target.type === "number") {
      // Prevent the input value change
      e.target.blur();

      // Prevent the page/container scrolling
      e.stopPropagation();
    }
  };

  return (
    <div
      style={containerStyle}
      className={classnames([containerClassName, "form-control-container"])}
    >
      {typeof textLabel === "string" && textLabel.length > 0 && (
        <div
          className={classnames([
            containerLabelClassName,
            "mb-1 d-flex align-items-center position-relative",
          ])}
        >
          <label className="input-label">{textLabel}</label>

        </div>
      )}

      <input
        value={value}
        onChange={onChange}
        onFocus={onFocus}
        onBlur={onBlur}
        {...customInput}
        type={type}
        name={name}
        style={style}
        readOnly={readOnly}
        disabled={disabled}
        autoFocus={autoFocus}
        placeholder={placeholder}
        pattern={pattern}
        maxLength={maxLength}
        onClick={e => e.stopPropagation()}
        autoComplete="new-password"
        onWheel={numberInputOnWheelPreventChange}
        className={classnames([
          className,
          "form-control",
          error ? "input-has-error" : null,
        ])}
      />
      {error && (
        <span className="span-error-message">{error.message}</span>
      )}
    </div>
  );
}

InputText.propTypes = {
  type: PropTypes.string,
  style: PropTypes.object,
  textLabel: PropTypes.string,
  className: PropTypes.string,
  customInput: PropTypes.object,
  onBlur: PropTypes.func,
  onFocus: PropTypes.func,
  onChange: PropTypes.func,
  disabled: PropTypes.bool,
  readOnly: PropTypes.bool,
  autoFocus: PropTypes.bool,
  value: PropTypes.string,
  name: PropTypes.string,
  placeholder: PropTypes.string,
  maxLength: PropTypes.string,
  pattern:  PropTypes.string,
  containerClassName: PropTypes.string,
  containerLabelClassName: PropTypes.string,
  containerStyle: PropTypes.string,
  error: PropTypes.object,
};
