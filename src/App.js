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
import ListCustomerContainer from "./components/pages/customer/list/ListCustomerContainer";
import EditCustomerContainer from "./components/pages/customer/EditCustomerContainer";
import DetailCustomerContainer from "./components/pages/customer/DetailCustomerContainer";
import FormCustomerContainer from "./components/pages/customer/form/FormCustomerContainer";
import EditTransactionContainer from "./containers/EditTransactionContainer";
import DetailTransactionContainer from "./containers/DetailTransactionContainer";
import {Provider} from "react-redux";
import store from "./configs/store";

class App extends Component {
    render() {
        return (
            <Provider store={store}>
                <div>
                    <BrowserRouter>
                        <Route path="/" exact>
                            <SignIn/>
                        </Route>
                        <Route path="/add/account">
                            <SignUp/>
                        </Route>
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
                        <Route path="/edit/transaction/:id" exact>
                            <EditTransactionContainer/>
                        </Route>
                        <Route path="/detail/transaction/:id" exact>
                            <DetailTransactionContainer/>
                        </Route>
                        <Route path='/customer' exact>
                            <ListCustomerContainer/>
                        </Route>
                        <Route path='/customer/edit/:no' exact>
                            <EditCustomerContainer/>
                        </Route>
                        <Route path='/customer/detail/:no' exact>
                            <DetailCustomerContainer/>
                        </Route>
                        <Route path='/customer/form' exact>
                            <FormCustomerContainer/>
                        </Route>
                    </BrowserRouter>
                </div>            </Provider>
        );
    }
}

export default App;
