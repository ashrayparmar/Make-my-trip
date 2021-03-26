import React, {useState} from 'react';
import './App.css';
import logo1 from "./logo1.png"

function App() {

  const [showFlights, setShowFlights] = useState([])

  const delhiToBanglore = {
    arrival: "Delhi",
    destination: "Banglore",
    arrivalTime: "5:15",
    destinationTime: "7:55",
    flight: "INDIGO",
    price: "3400 INR",
    travelTime: "Non-stop",
    duration: "1 hour 30 mins",
    image: "https://upload.wikimedia.org/wikipedia/en/thumb/1/1f/IndiGo_logo.svg/250px-IndiGo_logo.svg.png"
  };

  const delhiToBanglore1 = {
    arrival: "Delhi",
    destination: "Banglore",
    arrivalTime: "2:15",
    destinationTime: "4:05",
    flight: "Air Asia",
    price: "3650 INR",
    travelTime: "Non-stop",
    duration: "1 hour 50 mins",
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/83/AirAsia_NewLogo.svg/1200px-AirAsia_NewLogo.svg.png"
  };

  const delhiToBanglore2 = {
    arrival: "Delhi",
    destination: "Banglore",
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

    if( from.toLowerCase() === "delhi" && to.toLowerCase() === "banglore") {
      setShowFlights([delhiToBanglore, delhiToBanglore1, delhiToBanglore2])
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
