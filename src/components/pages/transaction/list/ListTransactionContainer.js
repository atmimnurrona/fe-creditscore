import React, {Component} from "react";
import Header from "../../../navbar/NavbarElement";
import ListTransaction from "./ListTransaction";

class ListTransactionContainer extends Component {
    render() {
        return (
            <div>
                <Header/>
                <div className="container" style={{marginTop:"10px"}}>
                    <h1 style={{fontSize:"5vw", color:"#e42556"}}>List Transaction</h1>
                    <ListTransaction/>
                </div>
            </div>
        );
    }
}

export default ListTransactionContainer;