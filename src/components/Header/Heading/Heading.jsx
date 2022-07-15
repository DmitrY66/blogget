import style from './Heading.module.css';
import propTypes from 'prop-types';

export const Heading = ({ text }) => {
  return (
    <h1 className={style.heading}>{text}</h1>
  );
};

Heading.propTypes = {
  text: propTypes.string,
};
