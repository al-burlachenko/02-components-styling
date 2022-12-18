import s from 'components/Alert/Alert.module.css';
import PropTypes from 'prop-types';

function Alert({ text, type }) {
  return (
    // <p role="alert" className={`${s[type]}`}>
    //   {text}
    // </p>
    <p role="alert" className={s[type]}>
      {text}
    </p>
  );
}

export default Alert;

Alert.propTypes = {
  text: PropTypes.string.isRequired,
  type: PropTypes.oneOf(['error', 'warning', 'success']).isRequired,
};
