"use strict";

import React, { useState } from "react";

const ToDoItem = (props) => {
  return (
    <div onClick={() => props.onChecked(props.id)}>
      <li>{props.item}</li>
    </div>
  );
};

export default ToDoItem;
