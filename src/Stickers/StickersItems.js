import React, { useState } from "react";
import "./StickersItems.css";

function StickersItems({ item, onToggleSticker, deleteSticker }) {
  const [itemValue, setItemValue] = useState(item.value);

  function onTextChange(e) {
    setItemValue(e.target.value);
  }
  function deleteItemSticker() {
    console.log(item);
    deleteSticker(item);
  }
  return (
    <div className="stickers">
      <div className="stickersHeader">
        <span>O</span>
        <span className="delete-sticker" onClick={deleteItemSticker}>
          X
        </span>
      </div>
      <textarea
        value={itemValue}
        onChange={onTextChange}
        onMouseLeave={onToggleSticker.bind(null, item, itemValue)}
      ></textarea>
    </div>
  );
}

export default StickersItems;
