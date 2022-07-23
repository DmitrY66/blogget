import style from './Date.module.css';
import formatDate from '../../../../../utils/formatDate.js';

export const Date = (postData) => {
  // console.log('postsData: ', postData.postData.postData.data.created);

  return (
    <time
      className={style.date}
      dateTime={postData.postData.postData.data.created}>
      {formatDate(postData.postData.postData.data.created)}
    </time>
  );
};
