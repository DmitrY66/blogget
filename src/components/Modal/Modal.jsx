import style from './Modal.module.css';
import PropTypes from 'prop-types';
import { ReactComponent as CloseIcon } from './img/close.svg';
import Markdown from 'markdown-to-jsx';
import ReactDOM from 'react-dom';
import { useEffect, useRef } from 'react';
import { useCommentsData } from '../../hooks/useCommentsData';
import { Comments } from './Comments/Comments';
import { FormComment } from './FormComment/FormComment';
import { PreLoader } from '../../UI/PreLoader/PreLoader';
import { useParams, useNavigate } from 'react-router-dom';

export const Modal = () => {
  const { id, page } = useParams();
  // const { id } = useParams();
  // console.log('page: ', page);
  const navigate = useNavigate();
  const overlayRef = useRef(null);
  const [post, comments, loading] = useCommentsData(id);

  // const [
  //   post,
  //   comments,
  // ] = commentsData;

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
      // navigate(-1);
      if (page === 'search') {
        navigate(`/searched/${page}`);
      } else {
        navigate(`/category/${page}`);
      }
    }
  };

  useEffect(() => {
    document.addEventListener('click', handleClick);

    return () => {
      document.removeEventListener('click', handleClick);
    };
  }, []);

  useEffect(() => {
    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape') {
        navigate(-1);
        if (page === 'search') {
          navigate(`/searched/${page}`);
        } else {
          navigate(`/category/${page}`);
        }
      }
    });

    return () => {
      document.removeEventListener('keydown', navigate);
    };
  }, []);

  return ReactDOM.createPortal(
    <div className={style.overlay} ref={overlayRef}>
      <div className={style.modal}>
        {
          loading ?
            (<div className={style.preload}><PreLoader /></div>) :
            (post.title === undefined) ?
              (<div className={style.preload}><p>DATA ERROR</p></div>) :
              (<>
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
                <button
                  className={style.close}
                  onClick={() => {
                    if (page === 'search') {
                      navigate(`/searched/${page}`);
                    } else {
                      navigate(`/category/${page}`);
                    }
                  }}
                >
                  <CloseIcon />
                </button>
              </>)
        }
      </div>
    </div>,
    document.getElementById('modal-root'),
  );
};

Modal.propTypes = {
  closeModal: PropTypes.func,
  id: PropTypes.string,
};
