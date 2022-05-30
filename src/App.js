import React, { Component } from 'react';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import AllCars from './component/AllCars';
import About from './component/About';
import Contact from './component/Contact';
import DetailsPage from "./component/DetailsPage";

import './App.css';
import DetailsPageNewCar from "./component/DetailsPageNewCar";

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {text: ''};
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(e){
        this.setState({text: e.target.value});
    }

    render() {
        return (
            <BrowserRouter>
                <div className="App">
                    <div className="split left">
                        <div className="centered">
                            <ul className="App-header">
                                <li>
                                    <Link to="/all">All Cars</Link>
                                </li>
                                <li>
                                    <input
                                        id="carId"
                                        onChange={this.handleChange}
                                        value={this.state.text}
                                    />
                                    <Link to={`/getCarById/${this.state.text}`}>Get Car by Id</Link>
                                </li>
                                <li>
                                    <Link to="/newCar">Create New Car</Link>
                                </li>
                                <li>
                                    <Link to="/contact">Contact Us</Link>
                                </li>
                                <li>
                                    <Link to="/about">About</Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className="split right">
                        <div className="centered">
                            <Routes>
                                <Route exact path='/all' element={<AllCars />} />
                                <Route exact path='/about' element={<About/>} />
                                <Route exact path='/contact' element={<Contact />} />
                                <Route exact path='/getCarById/:id' element={<DetailsPage />} />
                                <Route exact path='/newCar' element={<DetailsPageNewCar />} />
                            </Routes>
                        </div>
                    </div>
                </div>
            </BrowserRouter>
        );
    }
}

export default App;