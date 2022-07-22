import style from './Content.module.css';
import { postData } from '../../../../../data';
import { Text } from '../../../../../UI/Text';
// import { usePosts } from '../../../../../hooks/usePosts';

export const Content = () => {
  const { title, author } = postData;
  console.log('postData: ', postData);
  // const posts = usePosts();
  // console.log('posts: ', posts);

  return (
    <div className={style.content}>
      <Text As='h2' className={style.title}>
        <Text As='a' size={18} tsize={24} className={style.linkPost} href='#post'>
          {title}
        </Text>
      </Text>
      <Text As='a'
        size={12}
        tsize={14}
        color='orange'
        className={style.linkAuthor}
        href='#author'>
        {author}
      </Text>
    </div>
  );
};
