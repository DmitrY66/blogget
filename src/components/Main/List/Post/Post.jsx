import PropTypes from 'prop-types';
import style from './Post.module.css';
import { Raiting } from './Raiting/Raiting';
import { Content } from './Content/Content';
import { Date } from './Date/Date';
import { Thumbnail } from './Thumbnail/Thumbnail';
import { BtnDelete } from './BtnDelete/BtnDelete';


export const Post = ({ postData }) => {
  const {
    thumbnail,
    title,
    author,
    ups,
    selftext: markdown,
    created,
    id,
  } = postData;

  return (
    <li className={style.post}>

      <Thumbnail title={title} thumbnail={thumbnail} />

      <Content title={title} author={author} markdown={markdown} id={id} />

      <Raiting ups={ups} />

      <Date created={created} />

      <BtnDelete />

    </li>
  );
};


Post.propTypes = {
  postData: PropTypes.object,
};
