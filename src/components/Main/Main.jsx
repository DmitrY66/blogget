import Layout from '../Layout';
import style from './Main.module.css';
import Tabs from './Tabs';
import List from './List';
import { Routes, Route } from 'react-router-dom';
import { Modal } from '../Modal/Modal';
// import { ModalSearch } from '../ModalSearch/ModalSearch';
import { Home } from '../../pages/Home/Home';
import { NotFound } from '../../pages/NotFound/NotFound';
import { Searched } from '../Searched/Searched';

export const Main = () => {
  return (
    <main className={style.main}>
      <Layout>
        <Tabs />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='*' element={<NotFound />} />
          <Route path='/category/:page' element={<List />}>
            <Route path='post/:id' element={<Modal />} />
          </Route>
          {/* <Route path='/category/post/:id' element={<Modal />} /> */}
          <Route path='/searched/:page' element={<Searched />}>
            {/* <Route path='post/:id' element={<ModalSearch />} /> */}
          </Route>
        </Routes>
      </Layout>
    </main>
  );
};
