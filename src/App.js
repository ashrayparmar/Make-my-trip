import './App.css';
import logo from "./logo.png"
import logo1 from "./logo1.png"

function App() {

  function fetchData(){}

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

    </div>
  );
}

export default App;
