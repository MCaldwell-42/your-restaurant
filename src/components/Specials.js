import React from 'react';

class Specials extends React.Component {
  render() {
    return (
        <div className="special col-3">
        <div className="card">
          {/* <img className="card-img-top" src={special.imageUrl} alt="picture of special" /> */}
          <div className="card-body">
            <h5 className="card-title">Mondays Specials</h5>
            <p className="card-text">Look at this great deal on Mondays!</p>
          </div>
        </div>
        </div>
    );
  }
}

export default Specials;
