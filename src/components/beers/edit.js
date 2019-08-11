import React, { useEffect, useState } from "react";
import { Redirect } from "react-router-dom";
import Axios from "axios";

function Edit(props) {
  const [inputs, setInputs] = useState({});
  const [redirect, setRedirect] = useState(false);

  useEffect(() => {
    Axios.get(`https://nodeapifianl.herokuapp.com/api/beers/${props.match.params.id}`)
      .then(result =>   setInputs(result.data))
      .catch(err => console.error(err));
  }, [props]);

  function handleSubmit(event) {
    event.preventDefault();

    Axios.post(
      '/api/beers/update',
      {
        id: props.match.params.id,
        beer: {
          name: inputs.name,
          brand: inputs.brand,
          size: inputs.size
        }
      }
    )
      .then(resp => {
        console.log(resp);
        setRedirect(true);
      })
      .catch(err => {
        console.log(err);
      });
  }

  function handleInputChange(event) {
    event.persist();
    const name = event.target.name;
    const value = event.target.value;

    setInputs(inputs => {
      return {
        ...inputs, [name]: value
      }
    });
  }

  if (redirect) {
    return <Redirect to="/beers" />;
  }

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
export default Edit;