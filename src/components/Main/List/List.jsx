import { useEffect, useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { postsDataAsync } from '../../../store/postsData/postsDataAction';
// import { PreLoader } from '../../../UI/PreLoader/PreLoader';
import style from './List.module.css';
import Post from './Post';
import { Outlet, useParams } from 'react-router-dom';

export const List = () => {
  // const loading = useSelector(state => state.postsReducer.loading);
  const posts = useSelector(state => state.postsReducer.data);
  // console.log('posts: ', posts);

  const endList = useRef(null);
  const dispatch = useDispatch();
  const { page } = useParams();
  // console.log('page: ', page);

  useEffect(() => {
    dispatch(postsDataAsync(page));
  }, [page]);

  const uniqueKey = new Date().getTime();

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      if (entries[0].isIntersecting) {
        dispatch(postsDataAsync());
        // console.log('jjjjjjjjjjjjjj');
      }
    }, {
      rootMargin: '100px',
    });

    observer.observe(endList.current);

    return () => {
      if (endList.current) {
        observer.unobserve(endList.current);
      }
    };
  }, [endList.current]);

  if (!posts) {
    return;
  } else {
    return (
      <>
        <ul className={style.list}>
          {
            (posts.map((item) => (
              <Post key={`${item.data.id}${uniqueKey}`} postData={item.data} />
            )))
          }
          <li ref={endList} className={style.end} />
        </ul>
        <Outlet />
      </>
    );
  }
};
