/* eslint-disable prefer-const */
import style from './Modal.module.css';
import PropTypes from 'prop-types';
import { ReactComponent as CloseIcon } from './img/close.svg';
import Markdown from 'markdown-to-jsx';
import ReactDOM from 'react-dom';
import { useEffect, useRef, useState } from 'react';
import { useCommentsData } from '../../hooks/useCommentsData';
import { Comments } from './Comments/Comments';
import { FormComment } from './FormComment/FormComment';

// export const Modal = ({ author, title, markdown, closeModal, id }) => {
export const Modal = ({ closeModal, id }) => {
  const [preloadShow, setPreloadShow] = useState(style.preload);

  setTimeout(() => {
    setPreloadShow(style.hidden);
  }, 1200);

  const overlayRef = useRef(null);

  const commentsData = useCommentsData(id);

  const [
    post,
    comments,
  ] = commentsData;

  const {
    title,
    author,
    selftext: markdown,
  } = { ...post };

  // console.log('commentsData: ', commentsData);
  // console.log('post: ', post);
  // console.log('comments: ', comments);
  // console.log('title: ', title);
  // console.log('author: ', author);
  // console.log('markdown: ', markdown);


  const handleClick = e => {
    const target = e.target;
    if (target === overlayRef.current) {
      closeModal();
    }
  };

  useEffect(() => {
    document.addEventListener('click', handleClick);

    return () => {
      document.removeEventListener('click', handleClick);
    };
  }, []);

  useEffect(() => {
    document.addEventListener('keydown', e => {
      if (e.key === 'Escape') {
        closeModal();
      }
    });

    return () => {
      document.removeEventListener('keydown', closeModal());
    };
  }, []);

  return ReactDOM.createPortal(
    <div className={style.overlay} ref={overlayRef}>
      <div className={style.modal}>

        <div className={preloadShow} >
          <h3>Загрузка...</h3>
        </div>

        <h2 className={style.title}>{title}</h2>
        <p className={style.author}>{author}</p>
        <div className={style.content}>
          <Markdown options={
            {
              overrides: {
                a: {
                  props: {
                    target: '_blank',
                  },
                },
              },
            }}>
            {`${markdown}`}
          </Markdown>
        </div>
        <FormComment />
        <Comments comments={comments} />
        <button className={style.close} onClick={() => closeModal()}>
          <CloseIcon />
        </button>
      </div>
    </div>,
    document.getElementById('modal-root'),
  );
};

Modal.propTypes = {
  closeModal: PropTypes.func,
  id: PropTypes.string,
};
