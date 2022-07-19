import style from './Raiting.module.css';
import { postData } from '../../../../../data';
import { Text } from '../../../../../UI/Text';

export const Raiting = () => {
  const { ups } = postData;

  return (
    <Text As='div' className={style.rating}>
      <Text As='button' className={style.up} aria-label='Повысить рейтинг' />
      <Text As='p' color='grey99' fontWeight='medium' size={12} className={style.ups}>{ups}</Text>
      <Text As='button' className={style.down} aria-label='Понизить рейтинг' />
    </Text>
  );
};
