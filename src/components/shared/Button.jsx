import PropTypes from 'prop-types';

const Button = ({ children, type, isDisabled, version }) => {
  return (
    <button type={type} disabled={isDisabled} className={`btn btn-${version}`}>
      {children}
    </button>
  );
};

Button.defaultProps = {
  type: 'submit',
  isDisabled: true,
  version: 'primary',
};

Button.propTypes = {
  children: PropTypes.node.isRequired,
  type: PropTypes.string.isRequired,
  version: PropTypes.string.isRequired,
  isDisabled: PropTypes.bool.isRequired,
};

export default Button;
