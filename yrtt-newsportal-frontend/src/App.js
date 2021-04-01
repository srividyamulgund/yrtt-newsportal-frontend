import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import React from "react";
import Dashboard from './Dashboard/Dashboard';


const Home = () => (
  <div>
    <h2>Home</h2>
  </div>
);

function App() {
  return (
    <div className="App">
      <Dashboard />
    </div>
  );
}


export default App;