import React from 'react';
import { connect } from 'react-redux';

const Nav = ({state}) => {
  console.log(state)
  return (
    <ul>
      <li>
        <button>Add Product</button>
      </li>
    </ul>
  )
}

const mapState = (state) => {
  return { state }
}

export default connect(mapState)(Nav);
