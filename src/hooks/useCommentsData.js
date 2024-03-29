import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { commentsDataAsync } from '../store/commentsData/commentsDataAction';

export const useCommentsData = (id) => {
  const token = useSelector(state => state.tokenReducer.token);
  // const commentsData = useSelector(state => state.commentsDataReduser.data);
  const post = useSelector(state => state.commentsDataReduser.post);
  const comments = useSelector(state => state.commentsDataReduser.comments);
  const loading = useSelector(state => state.commentsDataReduser.loading);

  const dispatch = useDispatch();
  useEffect(() => {
    if (!token) return;
    dispatch(commentsDataAsync(id));
  }, [token]);
  return [post, comments, loading];
};
