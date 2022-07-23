import style from './Raiting.module.css';
import { Text } from '../../../../../UI/Text';

export const Raiting = (postData) => {
  // console.log('postsData: ', postData.postData.postData.data.ups);

  return (
    <Text As='div' className={style.rating}>
      <Text As='button' className={style.up} aria-label='Повысить рейтинг' />
      <Text
        As='p'
        color='grey99'
        fontWeight='medium'
        size={12}
        className={style.ups}>
        {postData.postData.postData.data.ups}
      </Text>
      <Text As='button' className={style.down} aria-label='Понизить рейтинг' />
    </Text>
  );
};
