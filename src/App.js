import React, {useState} from 'react';
import './App.css';
import logo1 from "./logo1.png"

function App() {

  const [showFlights, setShowFlights] = useState([])

  const delhiToBanglore = {
    flight: "spice-jet",
    price: "3400 INR",
    duration: "1 hour 30 mins"
  };

  function fetchData(e) {

    e.preventDefault();
    let from = e.target[0].value;
    let to = e.target[1].value;
    let dateOfJourney = e.target[2].value;
    let noOfTraveller = e.target[3].value; 

    if( from.toLowerCase() === "delhi" && to.toLowerCase() === "banglore") {
      setShowFlights(
        [
         {arrival: from, destination: to, date: dateOfJourney, traveller: noOfTraveller }, delhiToBanglore
        ] 
      )
    }

  }

  return (
      <div className="header">
        <img className="img-logo" src={logo1} alt=""></img>

        <div className="background">
          
          <form onSubmit={fetchData}>
              
              <div className="content">

                <input placeholder="From"></input>
                <div className="divider"></div>
                <input placeholder="TO"></input>
                <div className="divider"></div>
                <input className="date" type="date"></input>
                <div className="divider"></div>
                <input className="travel-input" placeholder="Travellers" type="number"></input>

                <div className="btn-search">
                
                <button>Search</button>

                </div> 
              </div>       
          </form>

      </div>

      <div className="data-content">
        
      {showFlights.map((item) => (

        <div>
          <li>{item.arrival}</li>
          <li>{item.destination}</li>
          <li>{item.date}</li>
          <li>{item.traveller}</li>
          <li>{item.flight}</li>
          <li>{item.price}</li>
          <li>{item.duration}</li>
        </div>
      ))}

      </div>

    </div>
  );
}

export default App;
