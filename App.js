/*const heading = React.createElement("h1", {id: "heading"}, "Hello World from React");
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(heading); */


//Nested Element

/**
 * 
 * <div id ="parent">
 *       <div id="child">
 *         <h1>"I am H1 tag" </h1>
 *       </div>
 * </div>
 * 
 * ReactElement(Object) => HTML(Browser)
 */


// const parent = React.createElement("h1",
//     { id: "parent" },
//     React.createElement(
//         "div",
//         { id: "child" },
//         React.createElement("h1", {}, "I am n H1 tag")
//     )
//     );
// const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(parent);



//Sibling 
// create an array and wrap siblings inside the array

/**
 * 
 * <div id ="parent">
 *       <div id="child">
 *         <h1>"I am H1 tag" </h1>
 *          <h1>"I am H1 tag" </h1>
 *       </div>
 * </div>
 * 
 * ReactElement(Object) => HTML(Browser)
 */


// const parent = React.createElement("h1",
//     { id: "parent" },
//     React.createElement(
//         "div",
//         { id: "child" },
//         [React.createElement("h1", {}, "I am n H1 tag"),
//          React.createElement("h2", {}, "I am n H2 tag")
//         ]
//     )
//     );
// const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(parent);



//More nested
/**
 * 
 * <div id ="parent">
 *       <div id="child">
 *         <h1>"I am H1 tag" </h1>
 *          <h1>"I am H1 tag" </h1>
 *       </div>
 *  *       <div id="child2">
 *         <h1>"I am H1 tag" </h1>
 *          <h1>"I am H1 tag" </h1>
 *       </div>
 * </div>
 * 
 * ReactElement(Object) => HTML(Browser)
 */


const parent = React.createElement("h1",
    { id: "parent" }, [
        React.createElement(
            "div",
            { id: "child" },
            [React.createElement("h1", {}, "I am n H1 tag"),
             React.createElement("h2", {}, "I am n H2 tag")
            ]
        ),
        React.createElement(
            "div",
            { id: "child2" },
            [React.createElement("h1", {}, "I am n H1 tag"),
             React.createElement("h2", {}, "I am n H2 tag")
            ]
        )
    ]

    );
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(parent);