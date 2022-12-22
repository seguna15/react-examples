
import React, {Component} from 'react';
import Products from './Components/Products';
import {Button} from 'react-bootstrap';
import Rating from './Components/Rating';
import JumboTronComponent from './Components/JumboTronComponent';
 
class App extends Component {
  formatName(user) {
    return `${user.firstName} ${user.secondName}`;
  }

  render() {
    const isValid = true;
    const user = {
      firstName: "Oluwasegun",
      secondName: "Qasim",
      imageUrl:
        "https://img.freepik.com/free-vector/businessman-character-avatar-isolated_24877-60111.jpg?size=338&ext=jpg&uid=R15601527&ga=GA1.2.1824277215.1667850666&semt=sph",
    };
    return (
      <div>
{/*         <Products /> */}
        <JumboTronComponent />
        
      </div>
    );
  }
}

export default App;
