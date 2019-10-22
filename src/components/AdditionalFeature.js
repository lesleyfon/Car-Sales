import React from 'react';
import { connect } from 'react-redux';
import { addItem } from './../actions/add'


const AdditionalFeature = props => {
  const handleClick = (e) => {
    e.preventDefault();
    props.addItem(props.feature)
  }
  return (
    <li>
      {/* Add an onClick that will let you add a feature to your car */}

      <button className="button" onClick={handleClick}>Add</button>
      {props.feature.name} (+{props.feature.price})
    </li>
  );
};

const mapStateToProps = state => {
  return {

  }
}

export default connect(
  mapStateToProps, 
  {
    addItem
  }
)(AdditionalFeature);
