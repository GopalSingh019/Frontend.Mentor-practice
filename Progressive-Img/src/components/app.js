import React from 'react'
import tinyImg from '../../assets/4-min.jpg';
import LargeImg from '../../assets/4.jpg';
import ProgressiveImg from './ProgressiveImg';
import './app.css';

function app() {
  return (
    <div>
        <ProgressiveImg src={LargeImg} falseImg={tinyImg}></ProgressiveImg>
    </div>
  )
}

export default app