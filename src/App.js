import Header from './components/Header';
import Main from './components/Main';
import { useDispatch } from 'react-redux';
import { updateToken } from './store/tokenReducer';
import { getToken } from './api/token';
import { Routes, Route } from 'react-router-dom';
// import { NotFound } from './pages/NotFound/NotFound';

const App = () => {
  const dispatch = useDispatch();
  dispatch(updateToken(getToken()));

  return (
    <Routes>
      <Route
        path='*'
        element={
          <>
            <Header />
            <Main />
          </>
        } />
      {/* <Route path="*" element={<NotFound />} /> */}
    </Routes>
  );
};

export default App;
