import React from "react";
import "./RadioList.scss";

const RadioList = (props) => {
  return props.items.map((item, index) => {
    return (
      <div
        aria-label={item}
        className={`radio-button ${
          props.filter.find((f) => f.type === props.name && f.value === item)
            ? "selected"
            : ""
        }`}
        key={index}
        onClick={() => props.updateFilter(props.filter, props.name, item)}
      >
        <input
          type="radio"
          id={item}
          value={item}
          name={props.name}
          onChange={() => {
            props.updateFilter(props.filter, props.name, item);
          }}
        />
        <label htmlFor={item}>{item}</label>
      </div>
    );
  });
};
export default RadioList;
