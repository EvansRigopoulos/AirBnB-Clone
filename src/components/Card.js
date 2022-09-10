import React from 'react';
import { FaStar } from 'react-icons/fa';

import Zaferes from '../images/Zaferes.PNG';
function Card(props) {
  return (
    <section className='card1'>
      <img src={Zaferes} alt='' />
      <div>
        <span className='card1--fonts'>
          <FaStar className='star' /> <strong>5.0</strong> (6) • USA
        </span>
        <p>Life Lessons with Katie Zaferes</p>
        <p>
          <strong>From $136/</strong>person
        </p>
      </div>
    </section>
  );
}

export default Card;
