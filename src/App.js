import './style/App.css';
import React from 'react';
import Header from "./components/Header/Header";
import Dashboard from "./components/Dashboard/Dashboard";
import AddBook from "./components/AddBook/AddBook";
import {Route,Switch} from "react-router-dom";
import Editing from "./components/Editing/Editing";

const App = (props) => {
    return (
        <div className="app-wrapper">
            <Header/>
            <div className="content-box">
                <Switch>
                    <Route path='/dashboard' render={() => <Dashboard />}/>
                    <Route path='/addBook' render={() => <AddBook/>}/>
                    <Route path='/edit' render={() => <Editing/>}/>
                </Switch>
            </div>
        </div>
    );
}

export default App;
