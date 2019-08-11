import React, { useState, useEffect } from "react";
import Axios from "axios";

function Show(props) {
  const [beer, setBeer] = useState({});

  useEffect(() => {
    Axios.get(`https://nodeapifianl.herokuapp.com/api/beers/${props.match.params.id}`)
      .then(result => setBeer(result.data))
      .catch(err => console.error(err));
  }, [props]);

  return (
    <div className="container">
      <header>
        <h1>{beer.name}</h1>
      </header>

      <div>
        {beer.brand}
      </div>
      <div>
        {beer.size}
      </div>

    </div>
  );
}

export default Show;