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
      <button className="button" onClick = { handleClick } >X</button>
      {props.feature.name}
    </li>
  );
};


const mapStateToProps = state => {
    console.log(state)
  return {  
    feature: state
  }
}
export default connect(null, {
  removeItem
})(AddedFeature);
