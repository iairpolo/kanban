import React from 'react';
import { useDispatch } from 'react-redux';
import { MOVE_TASK } from '../types/index';

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
      <p>{card.title}</p>
      <p>{card.date}</p>
      <label>Move:</label>
      {card.list !== 'todo' && (
        <button onClick={handleMove} name='todo'>
          To Do
        </button>
      )}
      {card.list !== 'inProgress' && (
        <button onClick={handleMove} name='inProgress'>
          In Progress
        </button>
      )}
      {card.list !== 'done' && (
        <button onClick={handleMove} name='done'>
          Done
        </button>
      )}
    </li>
  );
};

export default Card;
