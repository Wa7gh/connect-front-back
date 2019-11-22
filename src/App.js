import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import {BrowserRouter as Router,Switch, Route,Link} from "react-router-dom";

import Navbar from './components/navbar'
import ExercisesList from './components/exercisesList'
import EditExercise from './components/editexercise'
import CreateExercise from './components/createExercise'
import CreateUser from './components/createuser'

function App() {
  return (
    <Router>
    <Navbar/>
    <br/>

    <Route path="/" exact component={ExercisesList}/>
    <Route path="/edit/:id" component={EditExercise}/>
    <Route path="/create" component={CreateExercise}/>
    <Route path="/user" component={CreateUser}/>

    </Router>
  );
}

export default App;
