import React, { useState } from "react";
import { Redirect } from "react-router-dom";
import Axios from "axios";
import './css/style.css';

function New() {
const [inputs, setInputs] = useState({});
  const [redirect, setRedirect] = useState(false);

  function handleInputChange(event) {
    event.persist();

    const { name, value} = event.target;
    setInputs(inputs =>{
      return {
        ... inputs,
        [name]: value
      };
    });
  }
  function handleSubmit(event) {
      event.preventDefault();
      Axios.post("/api/beers",{
        beer: {
          name: inputs.name,
          brand: inputs.brand,
          size: inputs.size
        }
      })
        .then(resp =>{setRedirect(true)})
        .catch(err => console.log(err));
  }

  if (redirect) return <Redirect to="/"/>

  return (
  			<div className="container">
      <header>
        <h1>New Beer</h1>
      </header>
      <div>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label>Name</label>
            <input className="form-control" name="name" required="required" onChange={handleInputChange} />
          </div>

          <div className="form-group">
            <label>Brand</label>
            <textarea className="form-control" name="brand" onChange={handleInputChange}></textarea>
          </div>

          <div className="form-group">
            <label>Size</label>
            <select className="form-control" name="size" required="required" onChange={handleInputChange}>
              <option value="CANS">cans</option>
              <option value="BOTTLES">bottles</option>
              <option value="KEGS">kegs</option>
            </select>
          </div>

          <div className="form-group">
            <button className="btn btn-dark" type="submit">Submit</button>
          </div>
        </form>
      </div>
    </div>
  	);

}

export default New;