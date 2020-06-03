import React from 'react';

class Home extends React.Component {
  render() {
    return (
        <div className="special col-3">
        <div className="card">
          {/* <img className="card-img-top" src={special.imageUrl} alt="picture of special" /> */}
          <div className="card-body">
          <h2>This could be YOUR RESTAURANT!</h2>
        <button className="btn btn-info"><i className="fas fa-rocket"></i></button>
          </div>
        </div>
        </div>
    );
  }
}

export default Home;
