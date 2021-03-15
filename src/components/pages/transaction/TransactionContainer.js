import React, {Component} from "react";
import Cardboxtransaction from "./Cardbox";
import Header from "../../navbar/NavbarElement";

class TransactionContainer extends Component {
    render() {
        return (
            <div>
                <Header/>
                <Cardboxtransaction/>
            </div>
        );
    }
}

export default TransactionContainer;