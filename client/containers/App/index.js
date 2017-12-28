import React from 'react';

class App extends React.Component {
  render() {
    return (
      <div className="container">
        <h4>Round 4</h4>

        <div className="squares">
          <div className="square">
            <button style={{backgroundColor: '#2ecc71'}}></button>
          </div>
          <div className="square active">
            <button style={{backgroundColor: '#3498db'}}></button>
          </div>
          <div className="square">
            <button style={{backgroundColor: '#f39c12'}}></button>
          </div>
          <div className="square">
            <button style={{backgroundColor: '#e74c3c'}}></button>
          </div>
        </div>

        <div className="row">
          <div className="col-xs-12 text-center">
            <h5>Your score: 14</h5>
            <button className="btn btn-primary">
              Try again
            </button>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
