import style from './Date.module.css';
import PropTypes from 'prop-types';
import formatDate from '../../../../../utils/formatDate.js';

export const Date = ({ created }) => {
  // console.log('created: ', created);

  return (
    <time
      className={style.date}
      dateTime={created}>
      {formatDate(created)}
    </time>
  );
};

Date.propTypes = {
  created: PropTypes.number,
};
