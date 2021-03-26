import React, {useState} from 'react';
import './App.css';
import logo1 from "./logo1.png"
import flight from "./flight.png"
import hotel from "./hotel.png"
import villa from "./villa.png"
import holiday from "./holiday.png"
import train from "./train.png"
import bus from "./bus.png"
import visa from "./visa.png"
import cabs from "./cabs.png"
import plane2 from "./plane2.png"

function App() {

  const [showFlights, setShowFlights] = useState([])

  const delhiToBangalore = {
    arrival: "Delhi",
    destination: "Bangalore",
    arrivalTime: "5:15",
    destinationTime: "7:55",
    flight: "INDIGO",
    price: "3400 INR",
    travelTime: "Non-stop",
    duration: "1 hour 30 mins",
    image: "https://upload.wikimedia.org/wikipedia/en/thumb/1/1f/IndiGo_logo.svg/250px-IndiGo_logo.svg.png"
  };

  const delhiToBangalore1 = {
    arrival: "Delhi",
    destination: "Bangalore",
    arrivalTime: "2:15",
    destinationTime: "4:05",
    flight: "Air Asia",
    price: "3650 INR",
    travelTime: "Non-stop",
    duration: "1 hour 50 mins",
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/83/AirAsia_NewLogo.svg/1200px-AirAsia_NewLogo.svg.png"
  };

  const delhiToBangalore2 = {
    arrival: "Delhi",
    destination: "Bangalore",
    arrivalTime: "5:10",
    destinationTime: "5:50",
    flight: "Spice Jet",
    price: "3500 INR",
    travelTime: "Non-stop",
    duration: "1 hour 40 mins",
    image: "https://airhex.com/images/airline-logos/tail/spicejet.png"
  };

  const delhiToMumbai = {
    arrival: "Delhi",
    destination: "Mumbai",
    arrivalTime: "2:15",
    destinationTime: "4:05",
    flight: "Air Asia",
    price: "3650 INR",
    travelTime: "Non-stop",
    duration: "1 hour 50 mins",
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/83/AirAsia_NewLogo.svg/1200px-AirAsia_NewLogo.svg.png"    
  };

  const delhiToMumbai1 = {
    arrival: "Delhi",
    destination: "Mumbai",
    arrivalTime: "5:15",
    destinationTime: "7:55",
    flight: "INDIGO",
    price: "3400 INR",
    travelTime: "Non-stop",
    duration: "1 hour 30 mins",
    image: "https://upload.wikimedia.org/wikipedia/en/thumb/1/1f/IndiGo_logo.svg/250px-IndiGo_logo.svg.png"
  };

  const delhiToMumbai2 = {
    arrival: "Delhi",
    destination: "Mumbai",
    arrivalTime: "5:10",
    destinationTime: "5:50",
    flight: "Spice Jet",
    price: "3500 INR",
    travelTime: "Non-stop",
    duration: "1 hour 40 mins",
    image: "https://airhex.com/images/airline-logos/tail/spicejet.png"
  };

  function fetchData(e) {

    e.preventDefault();
    let from = e.target[0].value;
    let to = e.target[1].value;
    let dateOfJourney = e.target[2].value;
    let noOfTraveller = e.target[3].value; 

    if( from.toLowerCase() === "delhi" && to.toLowerCase() === "bangalore") {
      
      setShowFlights([delhiToBangalore, delhiToBangalore1, delhiToBangalore2])
    }

    else if( from.toLowerCase() === "delhi" && to.toLowerCase() === "mumbai") {
      setShowFlights([delhiToMumbai, delhiToMumbai1, delhiToMumbai2])
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

      <div className="top-content">

      <img src={flight}></img>
      <img src={hotel}></img>
      <img src={villa}></img>
      <img src={holiday}></img>
      <img src={train}></img>
      <img src={bus}></img>
      <img src={visa}></img>
      <img src={cabs}></img>
      <img src={plane2}></img>

      </div>

      <div className="data-content">
        
      {showFlights.map((item) => (

        <div className="display-flight">
          <div>
            <img className="flight-logo" src={item.image}></img>
            <div><strong>{item.flight}</strong></div>
          </div>

          <div>
            <h3>{item.arrival}</h3>
            <small style={{marginLeft: "8px"}}>{item.arrivalTime}</small>
          </div>

          <div>
          <h4>{item.duration}</h4>
            <div className="divider-2">
            </div>
            <small style={{marginLeft: "25px"}}>{item.travelTime}</small>
          </div>          
          
          <div>
            <h3>{item.destination}</h3>
            <small style={{marginLeft: "25px"}}>{item.destinationTime}</small>
          </div>
          
          <h4>₹ {item.price}</h4>
        </div>
      ))}

      </div>

    </div>
  );
}

export default App;
