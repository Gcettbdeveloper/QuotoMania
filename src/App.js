import { Component } from "react";
import Card from "./componants/Card/Card";
import "./App.css";

const refreshPage = () => {
  window.location.reload();
};

class App extends Component {
  constructor() {
    super();

    this.state = {
      monsters: [],
    };
  }

  componentDidMount() {
    fetch("https://animechan.vercel.app/api/quotes")
      .then((response) => response.json())
      //.then(quotes => console.log(quotes))
      .then((quotes) =>
        this.setState(
          () => {
            return { monsters: quotes };
          },
          () => {
            console.log(this.state);
          }
        )
      );
  }

  render() {
    return (
      <div className="container">
      <div className="App">
        {this.state.monsters.map((monster) => {
          return (
           
              <Card monster ={monster}/>
              
            
            

          );
        })}
        <button className="btn" onClick={refreshPage}>Refresh</button>
      </div>
      </div>
    );
  }
}

export default App;
