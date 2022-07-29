import Header from './components/Header';
import Main from './components/Main';
import { Provider } from 'react-redux';
import { AuthContextProvider } from './context/authContext';
// import { TokenContextProvider } from './context/tokenContext';
import { PostsContextProvider } from './context/postsContext';
import { store } from './store';


const App = () => {
  return (
    <Provider store={store}>
      {/* <TokenContextProvider > */}
      <AuthContextProvider>
        <PostsContextProvider>
          {/* <CommentContextProvider> */}
          <Header />
          <Main />
          {/* </CommentContextProvider> */}
        </PostsContextProvider>
      </AuthContextProvider>
      {/* </TokenContextProvider> */}
    </Provider>
  );
};

export default App;
