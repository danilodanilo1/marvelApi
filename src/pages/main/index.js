import React, { useState } from 'react';

import Header from '../../components/header'
import BodyHome from '../../components/bodyHome'
import Footer from '../../components/footer'




import { getHeroes } from '../../api';

function Main() {

  getHeroes();


  return (
    <>
      <Header />
      <BodyHome />
      <Footer />
    </>
  );
}

export default Main;