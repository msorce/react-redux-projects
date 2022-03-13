import React from "react";
import ReactDOM from "react-dom";
import SeasonDisplay from "./SeasonDisplay";
import Spinner from "./Spinner";

class App extends React.Component {
    state = {
        errorMessage: "",
        lat: null,
        lon: null
    };

    componentDidMount() {
        window.navigator.geolocation.getCurrentPosition(
            (pos) => {
                this.setState({ lat: pos.coords.latitude });
            },
            (err) => {
                this.setState({ errorMessage: err.message });
            }
        );
    }

    componentDidUpdate() {
        console.log("did up");
    }

    renderContent() {
        if (this.state.lat && !this.state.errorMessage) {
            return <SeasonDisplay lat={this.state.lat} />;
        }
        if (!this.state.lat && this.state.errorMessage) {
            return <div>Error: {this.state.errorMessage}</div>;
        }

        return <Spinner message="please select geo permission" />;
    }

    render() {
        return <div className="border red">{this.renderContent()}</div>;
    }
}

ReactDOM.render(<App />, document.querySelector("#root"));
