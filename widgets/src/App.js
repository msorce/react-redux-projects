import React from "react";
import Accordion from "./Accordion";
const items = [
    {
        title: "whats react",
        content: "react is a frontend js framework"
    },

    {
        title: "why use react?",
        content: "react is a favorite js framework among engineers"
    },
    {
        title: "How do you use React?",
        content: "You use react by creating components"
    },
];
export default () => {
    return <Accordion items={items} />;
};
