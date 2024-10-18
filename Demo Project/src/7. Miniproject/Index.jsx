import React from 'react'
import Header from './Header';
import Body from './Body';
import Footer from './Footer';
import './Index.css';

export default function Index() {
  return (
    <div className='index'>
        <Header/>
        <Body/>
        <Footer/>
    </div>
  )
}
