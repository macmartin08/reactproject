import React, { useState, useEffect } from "react";
import Axios from "axios";

function Show(props) {
  const [beer, setBeer] = useState([]);

  useEffect(() => {
    Axios.get(`/api/beers/${props.match.params.id}`)
      .then(result => {
        console.log(result);
        setBeer(result.data);
      })
      .catch(err => console.error(err));
  }, [props]);

  return (
    <div className="container">
      <header>
        <h1>{beer && beer.name}</h1>
      </header>

      <div>
        {beer && beer.brand}
      </div>
      <div>
        {beer && beer.size}
      </div>

    </div>
  );
}

export default Show;