import React from 'react';

const listPosStyle = {
  padding: 0,
  marginTop: "26px",
  wordSpacing: "2px",
}

const PositionsList = (props) => (
  <ul className="form-control"
    style={listPosStyle}
  >
    <label className="form-lable"
     style={{marginBottom: "23px"}}
    >Select your position</label>
    {
     props.positions.map(pos => 
       <li key={pos.id}
         className="form-control__item"
       >
         <input className="form-input__position" 
           type="radio" id="position" name="position_id" 
           value={pos.id} required
         />
         <span>{pos.name}</span>
       </li>
     )
    }
  </ul>
);

export default PositionsList;
