import React from "react";
import "./SeasonDisplay.css"
const getSeason = (lat, month) => {
    if (month > 2 && month < 9) {
        return lat > 0 ? "summer" : "winter";
    } else {
        return lat > 0 ? "winter" : "summer";
    }
};

let seasonConfig = {
    "summer": {
        iconName: "sun",
        text:"lets hit the beach"
    },
    "winter": {
        iconName: "snowflake",
        text:"burr its chilly"
    }
};

const SeasonDisplay = (props) => {
    const season = getSeason(props.lat, new Date().getMonth());
    const {iconName, text} = seasonConfig[season];

    return (
        <div className={`season-display ${season}`}>
            <i className={`${iconName} icon-left icon massive`} />
            <h1>{text}</h1>
            <i className={`${iconName} icon-right icon massive`} />
        </div>
    );
};

export default SeasonDisplay;
