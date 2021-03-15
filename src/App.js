import './App.css';
import React, {Component} from "react";
import {Route} from "react-router";
import Header from "./components/navbar/NavbarElement";
import {BrowserRouter} from "react-router-dom";
import HomeContainer from "./components/pages/home/HomeContainer";
import TransactionContainer from "./components/pages/transaction/TransactionContainer";
import ReportContainer from "./components/pages/ReportContainer";
import FormContainer from "./components/pages/transaction/FormContainer";
import ListContainer from "./components/pages/transaction/ListContainer";
import SignUp from "./components/login/SignUp";
import SignIn from "./components/login/SignIn";
import FormTransaction from "./components/pages/transaction/FormTransaction";

class App extends Component {
    render() {
        return (
            <div>
                {/*<Header/>*/}
                <BrowserRouter>
                    <Route path="/home" exact>
                        <HomeContainer/>
                    </Route>
                    <Route path="/transaction" exact>
                        <TransactionContainer/>
                    </Route>
                    <Route path="/report" exact>
                        <ReportContainer/>
                    </Route>
                    <Route path="/form" exact>
                        <FormTransaction/>
                    </Route>
                    <Route path="/list" exact>
                        <ListContainer/>
                    </Route>
                    <Route path="/" exact>
                        <SignIn/>
                    </Route>
                    <Route path="/add/account">
                        <SignUp/>
                    </Route>
                </BrowserRouter>
            </div>
        );
    }
}

export default App;
