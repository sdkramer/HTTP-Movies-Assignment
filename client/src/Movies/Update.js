import React, { useState, useEffect } from "react";
import { useParams, useHistory } from "react-router-dom";
import axios from "axios";

const initialItem = {
  name: "",
  price: "",
  metascore: "",
  actors: "",
  shipping: ""
};

const Update = (props) => {
  const { push } = useHistory();
  const [item, setItem] = useState(initialItem);
  const { id } = useParams();
  
  useEffect(() => {
    // axios
    //   .get(`http://localhost:3333/itemById/${id}`)
    //   .then((res) => {
    //     // res.data
    //     setItem(res.data);
    //   })
    //   .catch((err) => console.log(err));
  }, [id]);

  const changeHandler = (ev) => {
    ev.persist();
    let value = ev.target.value;

    setItem({
      ...item,
      [ev.target.name]: value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // make a PUT request to edit the item
    // axios
    //   .put(`http://localhost:3333/items/${id}`, item)
    //   .then((res) => {
    //     // res.data
    //     props.setItems(res.data);
    //     push(`/item-list/${id}`);
    //   })
    //   .catch((err) => console.log(err));
  };

  return (
    <div>
      <h2>Update Movie</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="title"
          onChange={changeHandler}
          placeholder="title"
          value={item.title}
        />
        <div className="baseline" />

        <input
          type="text"
          name="director"
          onChange={changeHandler}
          placeholder="Director"
          value={item.director}
        />
        <div className="baseline" />

        <input
          type="text"
          name="metascore"
          onChange={changeHandler}
          placeholder="Metascore"
          value={item.metascore}
        />
        <div className="baseline" />

        <input
          type="text"
          name="actors"
          onChange={changeHandler}
          placeholder="Actors"
          value={item.actors}
        />
        <div className="baseline" />

    

        <button className="md-button form-button">Update</button>
      </form>
    </div>
  );
};

export default Update;