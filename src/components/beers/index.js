import React, { useState, useEffect } from "react";
import { Redirect } from "react-router-dom";
import Axios from "axios";
import { Link } from 'react-router-dom';


function Index() {
	const [beers, setBeer] = useState([]);

  useEffect(() => {
    Axios.get(`https://nodeapifianl.herokuapp.com/api/beers`)
      .then(result => {
        console.log(result);
        setBeer(result.data);
      })
      .catch(err => console.error(err));
  },[]);

return (
    <div className="container">
      <header>
        <h1>All Beers</h1>
      </header>

      <div>
        <table className="table table-striped">
          <thead>
            <tr>
              <th>Name</th>
              <th>Brand</th>
              <th>Size</th>
              <th></th>
            </tr>
          </thead>

          <tbody>
            {beers.map(beer => (
              <tr key={beer.id}>
                <td>
                  <a href={`/beers/${beer._id}`}>{beer.name}</a></td>
                <td>{beer.brand}</td>
                <td>{beer.size}</td>
                <td>
                	<Link to ={`/beers/${beer._id}/edit`}>edit</Link>|
                	<Link to ={`/beers/${beer._id}/destroy`}>Delete</Link>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default Index;
