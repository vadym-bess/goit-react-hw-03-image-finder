import PropTypes from 'prop-types';
import css from './Button.module.css';

export const Button = ({ onClick }) => {
  return (
    <div className={css.buttonThumb}>
      <button className={css.button} type="button" onClick={onClick}>
      Load more
      </button>
    </div>
    
  );
};

Button.propTypes = {
  onClick: PropTypes.func.isRequired,
};