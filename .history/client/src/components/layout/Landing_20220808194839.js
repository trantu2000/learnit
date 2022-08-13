import React from 'react';
import {Navigate} from 'react-router-dom';

function Landing() {
  return (
    <Navigate to='/login'/>
    <div>Landing</div>
  )
}

export default Landing