// import PropTypes from 'prop-types';
import style from './Post.module.css';
import { Raiting } from './Raiting/Raiting';
import { Content } from './Content/Content';
import { Date } from './Date/Date';
import { Image } from './Image/Image';
import { BtnDelete } from './BtnDelete/BtnDelete';


export const Post = () => {
  return (
    <li className={style.post}>

      <Image />

      <Content />

      <Raiting />

      <Date />

      <BtnDelete />

    </li>
  );
};

// Post.propTypes = {
//   postData: PropTypes.object,
// };
