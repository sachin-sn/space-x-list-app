import React from "react";
import "./ListItem.scss";
const ListItem = (props) => {
  return (
    <div className="list-item-container">
      <img
        className="list-item-banner"
        src={props.links.mission_patch_small}
        alt={props.mission_name}
      />
      <div className="list-item-body">
        <div className="list-item-title" aria-label={props.mission_name}>
          {props.mission_name}
        </div>
        <div className="list-item-text">
          <label aria-label="Mission Ids">Mission Ids:</label>
          <ul>
            {props.mission_id.map((id) => (
              <li key={id} aria-label={id}>
                {id}
              </li>
            ))}
          </ul>
        </div>
        <div className="list-item-text">
          <label aria-label="Launch Year">Launch Year:</label>
          <span aria-label={props.launch_year}>{props.launch_year}</span>
        </div>
        <div className="list-item-text">
          <label aria-label="Successful Launch">Successful Launch:</label>
          <span
            aria-label={props.launch_success}
          >{`${props.launch_success}`}</span>
        </div>
        <div className="list-item-text">
          <label aria-label="Successful Landing">Successful Landing:</label>
          <span
            aria-label={props.rocket.first_stage.cores[0].land_success}
          >{`${props.rocket.first_stage.cores[0].land_success}`}</span>
        </div>
      </div>
    </div>
  );
};

export default ListItem;
