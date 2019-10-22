import React from 'react';
import { connect } from 'react-redux';
import { removeItem } from './../actions/removeItem' 

const AddedFeature = props => {
  function  handleClick (e){
    e.preventDefault()
    props.removeItem(props.feature)
  }
  return (
    <li>
      {/* Add an onClick to run a function to remove a feature */}
      <button className="button" onClick = { handleClick } >X</button>
      {props.feature.name}
    </li>
  );
};


export default connect(null, {
  removeItem
})(AddedFeature);
