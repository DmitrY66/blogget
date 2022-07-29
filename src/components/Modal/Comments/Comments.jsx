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
      comments.map((elem) => (
        // console.log('elem: ', elem.created),
        liArray.push(
          <li className={style.item} key={elem.id}>
            <h3
              className={style.author}
              size={18}
              tsize={22}
            >{elem.author}</h3>
            <p
              className={style.comment}
              size={14}
              tsize={18}>{elem.body}</p>
            <Date created={dateUndef(elem)} />
          </li>)
      ));
      // liArray = [];
      if (liArray !== []) {
        return [...liArray];
      } else if (liArray === []) {
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
