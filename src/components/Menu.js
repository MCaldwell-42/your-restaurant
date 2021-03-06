import React from 'react';
import Menu1 from './restaurantPics/menu1.jpg';
import Menu2 from './restaurantPics/menu2.jpg';

class Menu extends React.Component {
  render() {
    return (

        <div className="special col-12">
        <h1 className="homeBanner">Menu</h1>
        <div className="card">
          <img className="img-responsive menuPics" src={Menu1} alt="page 1 menu" />
        </div>

        <div className="card">
          <img className="img-responsive menuPics" src={Menu2} alt="page 2 menu" />
        </div>
        </div>
    );
  }
}

export default Menu;
