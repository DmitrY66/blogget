import style from './Content.module.css';
import { Text } from '../../../../../UI/Text';

export const Content = (postData) => {
  // console.log('postData: ', postData.postData.postData.data.title);

  return (
    <div className={style.content}>
      <Text As='h2' className={style.title}>
        <Text As='a' size={18} tsize={24} className={style.linkPost} href='#post'>
          {postData.postData.postData.data.title}
        </Text>
      </Text>
      <Text As='a'
        size={12}
        tsize={14}
        color='orange'
        className={style.linkAuthor}
        href='#author'>
        {postData.postData.postData.data.author}
      </Text>
    </div>
  );
};
