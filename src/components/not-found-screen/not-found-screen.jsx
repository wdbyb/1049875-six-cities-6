import React from 'react';
import {Link} from 'react-router-dom';
import Icons from '../icons/icons.jsx';
import Header from '../header/header.jsx';

const NotFoundScreen = () => {
  return (
    <>
      <Icons />

      <div className="page page--gray page--main">
        <Header />

        <section>
          <h1>404. Page Not Found</h1>
          <Link to="/">Вернуться на главную</Link>
        </section>
      </div>
    </>
  );
};

export default NotFoundScreen;
