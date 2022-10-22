import React, { Component } from "react";
import Button from '@mui/material/Button';
import './Card.css'

import CustomizedDialogs from '../Modal/Modal'

// const refreshPage = () => {
//   window.location.reload();
// };
export default class Card extends Component {
  render() {

    const {monster} = this.props ;
    const {handleClick} = this.props;
    return (
      
        <CustomizedDialogs monster={monster}>
        <div className="card-list" key={monster.id}>
          <div className="card-container">
            <h1>{monster.character}</h1>
            {/* <p>{monster.quote}</p> */}
            <div className="button">
              {/* <button onClick={refreshPage}>Refresh</button> */}
            </div>
          </div>
        </div>
        </CustomizedDialogs>
      
    );
  }
}
