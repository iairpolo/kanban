import React from 'react';
import './styles/List.css';

const List = ({ title, children }) => (
  <div className='List'>
    <h2>{title}</h2>
    <ul>{children}</ul>
  </div>
);

export default List;
