import { BrowserRouter, Route, Routes } from 'react-router-dom';
import MainPage from './pages/MainPage';
import ArticlePage from './pages/ArticlePage';
import ErrorPage from './pages/ErrorPage';
import Layout from './components/Layout/Layout';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route path='/' element={<MainPage />} />
          <Route path='/article/:articleId' element={<ArticlePage />} />
          <Route path='*' element={<ErrorPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
