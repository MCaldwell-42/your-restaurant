import React from 'react';
import RestPic1 from './restaurantPics/restaurant1.jpg';
import RestPic2 from './restaurantPics/restaurant2.jpg';
import RestPic3 from './restaurantPics/restaurant3.jpg';

class Home extends React.Component {
  render() {
    return (
        <div className="special">
        <h1 className="homeBanner">Your Restaurant's Name Here</h1>
        <div className="card flex-row flex-wrap homeCards">
            <div class="border-0">
          <img class="restPics" src={RestPic2} alt="restaurant tables" />
          </div>
          <div className="card-body">
          <p>Your Restaurant has been here for at least 2 months! <br/>
              In all that time you have had one mission and that's to deliver bomb ass food. <br/>
              As part of that mission every meal is made with love and good will. Even Appetizers!
          </p>
          </div>
        </div>
        <div className="card flex-row flex-wrap homeCards">
            <div class="card-header border-0">
            <p>Locally owned and locally staffed! <br/>
              Know that when you eat at Your Restaurant your money is going back into your community.
          </p>
          </div>
          <div className="border-0">
          <img class="restPics" src={RestPic3} alt="bartender" />
          </div>
        </div>
        <div className="card flex-row flex-wrap homeCards">
            <div class="border-0">
          <img class="restPics" src={RestPic1} alt="man serving a burger" />
          </div>
          <div className="card-body">
          <p>To top it all off, we have the best food in town!<br/>
          It is our pleasure to make your meal and your day! <br/>
          Supporting your community has never tasted so good!
          </p>
          </div>
        </div>
        </div>
    );
  }
}

export default Home;
