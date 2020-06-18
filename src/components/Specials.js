import React from 'react';

class Specials extends React.Component {
  render() {
    return (
        <div className="special col-12" id="specials-page">
        <h1 className="homeBanner"> Daily Specials </h1>
        <div className="card specials-card">
          <div className="card-body">
            <h5 className="card-title">Weekday Happy Hour Special</h5>
            <p className="card-text">Every weekday: 3:30 - 6:00pm <br/>
            All domestic bottles: $2.00 <br/>
            Drafts, Wine, and Liquour: half-price <br/>
            Appetizers: $2 off
             </p>
          </div>
        </div>
        <div className="card specials">
          <div className="card-body">
            <h5 className="card-title">Monday Specials</h5>
            <p className="card-text">$5 burgers!</p>
          </div>
          </div>
        <div className="card specials">
          <div className="card-body">
            <h5 className="card-title">Tueday Specials</h5>
            <p className="card-text">Tace Tuesdays! $2 tacos</p>
          </div>
        </div>
        <div className="card specials">
          <div className="card-body">
            <h5 className="card-title">Wednesday Specials</h5>
            <p className="card-text">Trivia Night! <br/>
            $5 pitchers and $5 wings</p>
          </div>
          </div>
          <div className="card specials">
          <div className="card-body">
            <h5 className="card-title">Thursday Specials</h5>
            <p className="card-text">$3 drafts all night</p>
          </div>
        </div>
        </div>
    );
  }
}

export default Specials;
