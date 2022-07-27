// import { PostsContextProvider } from '../../../context/postsContext';
import { usePosts } from '../../../hooks/usePosts';
import style from './List.module.css';
import Post from './Post';

export const List = () => {
  const postData = usePosts();
  // console.log('postData: ', postData);

  return (
    // <PostsContextProvider>
    <ul className={style.list}>
      {
        postData.map((item) => (
          <Post key={item.data.id} postData={item.data} />
        ))
      }
    </ul>
    // </PostsContextProvider> }
  );
};
