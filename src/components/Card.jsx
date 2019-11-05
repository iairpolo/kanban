import React from 'react';
import { useDispatch } from 'react-redux';
import { MOVE_TASK } from '../types/index';

import './styles/Card.css';

const Card = ({ card }) => {
  const dispatch = useDispatch();

  const handleMove = event => {
    dispatch({
      type: MOVE_TASK,
      id: card.id,
      listNow: card.list,
      goToList: event.target.name,
      task: card
    });
  };

  return (
    <li className='Card'>
      <p className='Card__Title'>{card.title}</p>
      {card.date && <small className='Card__Date'>{card.date}</small>}
      <label>Move to: </label>
      {card.list !== 'todo' && (
        <button className='Card__Button red' onClick={handleMove} name='todo'>
          To Do
        </button>
      )}
      {card.list !== 'inProgress' && (
        <button
          className='Card__Button yellow'
          onClick={handleMove}
          name='inProgress'>
          In Progress
        </button>
      )}
      {card.list !== 'done' && (
        <button className='Card__Button green' onClick={handleMove} name='done'>
          Done
        </button>
      )}
    </li>
  );
};

export default Card;
