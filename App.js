import React from "react";
import ReactDOM from "react-dom/client";

const root = ReactDOM.createRoot(document.getElementById("root"));
//const heading = React.createElement("h1", {id:"heading"}, "Hello React!");
const parent = React.createElement("div", { id: "parent" },
    [
        React.createElement("div", { id: "child1" },
            [
                React.createElement("h1", { id: "heading" }, "I am an H1 tag "),
                React.createElement("h2", {}, "I am an H2 Tag")
            ]),
        React.createElement("div", { id: "child2" },
            [
                React.createElement("h1", { id: "heading" }, "I am an H1 tag"),
                React.createElement("h2", {}, "I am an H2 Tag")
            ])
    ]
)
console.log(parent);
root.render(parent);