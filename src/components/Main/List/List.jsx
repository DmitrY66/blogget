import { usePosts } from '../../../hooks/usePosts';
import { PreLoader } from '../../../UI/PreLoader/PreLoader';
import style from './List.module.css';
import Post from './Post';

export const List = () => {
  const [posts, loading] = usePosts();

  if (!posts) {
    return <h3>нет данных</h3>;
  } else {
    return (

      <ul className={style.list}>
        {
          loading ? <PreLoader /> :
          posts.map((item) => (
            <Post key={item.data.id} postData={item.data} />
          ))
        }
      </ul>

    );
  }
};
