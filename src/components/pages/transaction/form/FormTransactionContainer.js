import React, {Component} from "react";
import FormTransaction from "./FormTransaction";
import Header from "../../../navbar/NavbarElement";

class FormTransactionContainer extends Component {
    render() {
        return (
                <div>
                    <Header/>
                    <div className="container" style={{marginTop:"10px"}}>
                        <h1 style={{fontSize:"5vw", color:"#e42556"}}>Form Transaction</h1>
                        <FormTransaction/>
                    </div>
                </div>
        );
    }
}

export default FormTransactionContainer;