import './App.css';
import React, {Component} from "react";
import {Route} from "react-router";
import {BrowserRouter} from "react-router-dom";
import HomeContainer from "./components/pages/home/HomeContainer";
import ReportContainer from "./components/pages/ReportContainer";
import FormTransactionContainer from "./components/pages/transaction/form/FormTransactionContainer";
import ListTransactionContainer from "./components/pages/transaction/list/ListTransactionContainer";
import SignUp from "./components/login/SignUp";
import SignIn from "./components/login/SignIn";

class App extends Component {
    render() {
        return (
            <div>
                <BrowserRouter>
                    <Route path="/home" exact>
                        <HomeContainer/>
                    </Route>
                    <Route path="/report" exact>
                        <ReportContainer/>
                    </Route>
                    <Route path="/form/transaction" exact>
                        <FormTransactionContainer/>
                    </Route>
                    <Route path="/list/transaction" exact>
                        <ListTransactionContainer/>
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
