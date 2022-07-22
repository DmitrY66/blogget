import { PostsContextProvider } from '../../../context/postsContext';
import { usePosts } from '../../../hooks/usePosts';
import style from './List.module.css';
import stylePost from './Post/Post.module.css';
import styleImg from './Post/Image/Image.module.css';
import styleContent from './Post/Content/Content.module.css';
import notphoto from './Post/img/notphoto.jpg';
import { Text } from '../../../UI/Text';
import { BtnDelete } from './Post/BtnDelete/BtnDelete';
import { Date } from './Post/Date/Date';
// import Post from './Post';

export const List = () => {
  const postsData = usePosts();
  console.log('postsData: ', postsData);
  // const postsData = [
  //   {
  //     thumbnail: '',
  //     title: 'Title1',
  //     author: 'Nickname1',
  //     ups: 77,
  //     date: '2022-01-21T00:00:00.00Z',
  //     id: '123'
  //   },
  //   {
  //     thumbnail: '',
  //     title: 'Title2',
  //     author: 'Nickname2',
  //     ups: 58,
  //     date: '2022-01-31T00:45:00.00Z',
  //     id: '345'
  //   },
  //   {
  //     thumbnail: '',
  //     title: 'Title3',
  //     author: 'Nickname3',
  //     ups: 24,
  //     date: '2022-02-24T09:45:00.00Z',
  //     id: '567'
  //   },
  //   {
  //     thumbnail: '',
  //     title: 'Title4',
  //     author: 'Nickname4',
  //     ups: 124,
  //     date: '2022-03-10T08:00:00.00Z',
  //     id: '789'
  //   },
  // ];

  return (
    <PostsContextProvider>
      <ul className={style.list}>
        {/* <Post /> */}
        {
          postsData.map((posts) => (
            <li className={stylePost.post} key={posts.data.id}>

              <img className={styleImg.img} src={notphoto} alt={posts.data.title} />

              <div className={styleContent.content}>
                <Text As='h2' className={styleContent.title}>
                  <Text As='a' size={18} tsize={24} className={styleContent.linkPost} href='#post'>
                    {posts.data.title}
                  </Text>
                </Text>
                <Text As='a'
                  size={12}
                  tsize={14}
                  color='orange'
                  className={styleContent.linkAuthor}
                  href='#author'>
                  {posts.data.author}
                </Text>
              </div>

              <Text As='div' className={styleContent.rating}>
                <Text As='button' className={styleContent.up} aria-label='Повысить рейтинг' />
                <Text
                  As='p'
                  color='grey99'
                  fontWeight='medium'
                  size={12}
                  className={styleContent.ups}>
                  {posts.data.ups}</Text>
                <Text As='button' className={styleContent.down} aria-label='Понизить рейтинг' />
              </Text>

              <Date />

              <BtnDelete />

            </li>
          ))
        }
        {/* {
          postsData.map((posts) => (
            <Post key={posts.data.id} postData={posts.data} />
          ))
        } */}
      </ul>
    </PostsContextProvider>
  );
};
