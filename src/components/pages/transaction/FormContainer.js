import {Component} from "react";
import FormTransaction from "./FormTransaction";
import {Container} from "reactstrap";

class FormContainer extends Component {
    render() {
        return (
            <Container>
                <div>
                    <h1 className="display-2">Form Transaction</h1>
                    <FormTransaction/>
                </div>
            </Container>

        );
    }
}

export default FormContainer;