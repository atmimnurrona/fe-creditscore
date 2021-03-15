import React, {Component} from "react";
import FormTransaction from "./FormTransaction";
import Header from "../../navbar/NavbarElement";

class FormContainer extends Component {
    render() {
        return (
                <div>
                    <Header/>
                    <h1 className="display-2">Form Transaction</h1>
                    <FormTransaction/>
                </div>
        );
    }
}

export default FormContainer;