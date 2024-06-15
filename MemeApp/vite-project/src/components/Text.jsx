import React from "react";
import { useState } from "react";
import Draggable from "react-draggable";

const Text = () => {
  const [editMode, setEditMode] = useState(false);
  const [val, setVal] = useState("Double click to edit");
  return (
    <Draggable>
      {editMode ? (
        <input
          onDoubleClick={(e) => setEditMode(false)}
          value={val}
          onChange
          ={(e) => setVal(e.target.value)}
        />
      ) : (
        <h1 onDoubleClick={(e) =>setEditMode(true)}>{val}</h1>
      )}
    </Draggable>
  );
};

export default Text;