import React from 'react';

const List = ({ title, children }) => (
  <>
    <h2>{title}</h2>
    {children}
  </>
);

export default List;
