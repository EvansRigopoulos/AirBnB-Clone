import React from 'react';
import { FaStar } from 'react-icons/fa';
import { useState } from 'react';
//functional component which is being updated with new cards from the dummy objects passed as props from the parent App component
function Card(props) {
  //we have to destructure with props.element since we are passing the entire object from parent component App.js
  console.log(props);

  const {
    img,
    rating,
    rating_count,
    Country,
    title,
    description,
    price,
    open_spots,
  } = props;

  const [showText, setShowText] = useState(false);

  let card_text;
  if (open_spots === 0) {
    card_text = 'SOLD OUT';
  } else if (Country === 'Online') {
    card_text = 'ONLINE';
  }

  let fullText, flag, button_text;
  if (description.length < 150) {
    fullText = description;
    flag = false;
  } else {
    if (showText) {
      fullText = description;
      flag = true;
      button_text = 'Less';
    } else {
      fullText = `${description.substring(0, 150)}...`;
      flag = true;
      button_text = 'More';
    }
  }

  return (
    //Conditional rendering based on the count of open spots
    //Conditional rendering on button and description text
    <section className='card1'>
      {card_text && <div className='card--badge'> {card_text}</div>}
      <img src={img} alt='' />
      <div>
        <span className='card1--fonts'>
          <FaStar className='star' /> <strong>{rating}</strong> ({rating_count})
          • {Country}
        </span>
        <p className='title'>{title}</p>
        <p className='description'>
          {fullText}
          {flag && (
            <button className='btn' onClick={() => setShowText(!showText)}>
              {button_text}
            </button>
          )}
        </p>

        <p>
          <strong>From {price}/</strong>person
        </p>
      </div>
    </section>
  );
}

export default Card;
