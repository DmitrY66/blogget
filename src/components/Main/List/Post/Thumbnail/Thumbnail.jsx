import style from './Thumbnail.module.css';
import notphoto from '../img/notphoto.jpg';

export const Thumbnail = (postData) => {
  // console.log(postData.postData.postData.data.preview ?
  //   postData.postData.postData.data.preview.images[0].resolutions[1].url : 'nottt');

  // console.log(postData.postData.postData.data.thumbnail ?
  //   postData.postData.postData.data.thumbnail : 'nottt');

  const imgUrls = () => {
    if (postData.postData.postData.data.thumbnail !== 'default' &&
      postData.postData.postData.data.thumbnail !== 'self') {
      return postData.postData.postData.data.thumbnail;
    } else {
      return notphoto;
    }
  };

  return (
    <img
      className={style.img}
      src={imgUrls()}
      alt={postData.postData.postData.data.title} />
  );
};
