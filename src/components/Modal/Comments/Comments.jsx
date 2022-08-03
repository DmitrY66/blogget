import style from './Comments.module.css';
import PropTypes from 'prop-types';
import { Date } from '../../../components/Main/List/Post/Date/Date';

export const Comments = ({ comments }) => {
  // console.log('comments: ', comments);

  const dateUndef = (el) => {
    if (el.created !== undefined) {
      return el.created;
    } else if (el.created === undefined) {
      return el.created = 1000000000;
    }
  };

  const liCreated = () => {
    const liArray = [];
    if (comments !== undefined) {
      comments.map((item) => item.body && (
        // console.log('item: ', item.created),
        liArray.push(
          <li className={style.item} key={item.id}>
            <h3
              className={style.author}
              size={18}
              tsize={22}
            >{item.author}</h3>
            <p
              className={style.comment}
              size={14}
              tsize={18}>{item.body}</p>
            <Date created={dateUndef(item)} />
          </li>)
      ));
      // liArray = [];
      if (liArray.length !== 0) {
        return [...liArray];
      } else if (liArray.length === 0) {
        return 'No comments';
      }
    }
  };

  return (
    <ul className={style.list}>
      {
        liCreated()
      }
    </ul>
  );
};

Comments.propTypes = {
  comments: PropTypes.array,
};
