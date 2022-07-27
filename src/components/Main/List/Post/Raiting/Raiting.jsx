import style from './Raiting.module.css';
import PropTypes from 'prop-types';
import { Text } from '../../../../../UI/Text';

export const Raiting = ({ ups }) => {
  // console.log('ups: ', ups);

  return (
    <Text As='div' className={style.rating}>
      <Text As='button' className={style.up} aria-label='Повысить рейтинг' />
      <Text
        As='p'
        color='grey99'
        fontWeight='medium'
        size={12}
        className={style.ups}
      >
        {ups}
      </Text>
      <Text As='button' className={style.down} aria-label='Понизить рейтинг' />
    </Text>
  );
};

Raiting.propTypes = {
  ups: PropTypes.number,
};
