import React, { useEffect, useState } from "react";
import axios from "axios";

const Clients = () => {
  const url = "https://run.mocky.io/v3/8260aa5d-8af8-4cff-999e-6e81b217f0ba";
  const [client, setClient] = useState(null);

  let content = null;

  useEffect(() => {
    axios.get(url).then((response) => {
      setClient(response.data);
    });
  }, [url]);

  if (client) {
    content = (
      <div>
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
          <div className="container-fluid">
            <a className="navbar-brand" href="#">
              Web Developer
            </a>
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div
              className="collapse navbar-collapse"
              id="navbarSupportedContent"
            >
              <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                <li className="nav-item">
                  <a className="nav-link active" aria-current="page" href="#">
                    Home
                  </a>
                </li>
              </ul>
              <form className="d-flex">
                <input
                  className="form-control me-2"
                  type="search"
                  placeholder="Search"
                  aria-label="Search"
                />
                <button className="btn btn-outline-success" type="submit">
                  Search
                </button>
              </form>
            </div>
          </div>
        </nav>

        <div>
          <table className="table">
            <thead>
              <tr>
                <th scope="col">No</th>
                <th scope="col">Clients</th>
                <th scope="col">Company</th>
                <th scope="col">Invoicepaid</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th scope="row">1</th>
                <td>{client.clients[0].name}</td>
                <td>{client.clients[0].company}</td>
                <td>{client.clients[0].invoicepaid}</td>
              </tr>
              <tr>
                <th scope="row">2</th>
                <td>{client.clients[1].name}</td>
                <td>{client.clients[1].company}</td>
                <td>{client.clients[1].invoicepaid}</td>
              </tr>
              <tr>
                <th scope="row">2</th>
                <td>{client.clients[2].name}</td>
                <td>{client.clients[2].company}</td>
                <td>{client.clients[2].invoicepaid}</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    );
  }

  return <div>{content}</div>;
};

export default Clients;
