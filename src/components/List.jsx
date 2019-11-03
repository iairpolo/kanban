import React from 'react';

const List = ({ title, children }) => (
  <div className='List'>
    <h2>{title}</h2>
    <ul>{children}</ul>
  </div>
);

export default List;
