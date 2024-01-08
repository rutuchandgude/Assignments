
import React from "react";
import ReactDOM from "react-dom/client";

//React.createElement =>ReactElement JS Object => HTMLElement(render)
//JSX (transpiled before it reaches the JS) - PARCEL -Babel
//JSX =>Babel transpiles it to React.createElement =>ReactElement-jS Object =>HTMLElement(render)

//React Element
const heading = (
    <h1 className="head" tabIndex="5">Namaste React using JSX</h1>
);

// Functional Component 

// const NormalFunc = function () {
//     return (
//         <h1>Its normal functional Component</h1>
//     );
// };

const Title = () => (
    <h1 className="head" tabIndex="5">Namaste React using JSX</h1>
);

const HeadingComponent = () => (
    <div id="container">
        {Title()}
        <Title />
        <Title></Title>
        <h1 className="heading">Namaste React Functional Component</h1>
    </div>
);


const root = ReactDOM.createRoot(document.getElementById("root"));

// root.render(jsxHeading);
root.render(<HeadingComponent/>);