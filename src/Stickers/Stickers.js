import React, { useState, useEffect } from "react";
import StickersItems from "./StickersItems";
import "./Stickers.css";
import api from "./Api";

function Stickers() {
  const [sticersList, setSticersList] = useState([]);

  useEffect(() => {
    api.get().then(({ data }) => setSticersList(data));
  }, [deleteSticker]);

  function addNewSticker() {
    api
      .post("", { value: "" })
      .then(({ data }) => setSticersList([...sticersList, data]));
  }
  function toggleSticker(item, itemValue) {
    api
      .put(item.id, { ...item, value: itemValue })
      .then((res) => {
        console.log(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }

  function deleteSticker(item) {
    api
      .delete(item.id)
      .then((res) => {
        console.log(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }
  return (
    <div className="container">
      <button onClick={addNewSticker}>add new sticker</button>
      {sticersList.map((item) => (
        <StickersItems
          key={item.id}
          item={item}
          onToggleSticker={toggleSticker}
          deleteSticker={deleteSticker}
        />
      ))}
    </div>
  );
}

export default Stickers;
