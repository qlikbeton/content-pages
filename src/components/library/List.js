import React from 'react';
import './List.css';

const List = props => (
  <div className="List">
    {props.children}
  </div>
);

const ListItem = props => (
  <div className="List-item">
    {props.children}
  </div>
);

export default List;
export {
  ListItem
};