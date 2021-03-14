import {Component} from "react";
import Cardbox from "./Cardbox";
import {Jumbotron} from "reactstrap";
import './HomeContainer.css';

class HomeContainer extends Component {
    render() {
        return (
            <div>
                <div className="jumbotron">
                    <Jumbotron>
                        <h1 className="display-2">Hello, Admin!</h1>
                        <p className="display-3">What do you want to do?</p>
                    </Jumbotron>
                </div>
                <Cardbox/>
            </div>
        );
    }
}

export default HomeContainer;