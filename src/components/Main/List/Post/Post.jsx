import PropTypes from 'prop-types';
import style from './Post.module.css';
import { Raiting } from './Raiting/Raiting';
import { Content } from './Content/Content';
import { Date } from './Date/Date';
import { Thumbnail } from './Thumbnail/Thumbnail';
import { BtnDelete } from './BtnDelete/BtnDelete';


export const Post = (postData) => {
  // console.log(postData);

  return (
    <li className={style.post}>

      <Thumbnail postData={postData} />

      <Content postData={postData} />

      <Raiting postData={postData} />

      <Date postData={postData} />

      <BtnDelete />

    </li >
  );
};


Post.propTypes = {
  postData: PropTypes.object,
};
