import classNames from "classnames";
import React from "react";
import PropTypes from "prop-types";
function Button(props) {
  const cssclasses = classNames("Button", props.className);
  // eslint-disable-next-line
  return props.href ? (
    <a {...props} className={cssclasses}>{ props.content }</a>
  ) : (
    <button {...props} className={cssclasses} />
  );
}

Button.propTypes = {
  href: PropTypes.string,
  content: PropTypes.string
};

export default Button;