import React from "react";  

const Nerd = {
  hobby: "interest",
  interest: "everything",
  everything: "shit",
  shit: "Israel",
};

function getTitle(title) {
  return title;
}

const title = "React";

// JSX
// const MyElement = <h1>Hello, {title}</h1>;

// transpiled into js
const MyElement = React.createElement("h1", null, `Welcome to ${title}`);

// rendered as html by React
{
  /* <h1>Hello, React</h1> */
}

const list = [
  {
    title: "React",
    url: "https://react.dev/",
    author: "Jordan Walke",
    num_comments: 3,
    points: 4,
    objectID: 0,
  },
  {
    title: "Redux",
    url: "https://redux.js.org/",
    author: "Dan Abramov, Andrew Clark",
    num_comments: 2,
    points: 5,
    objectID: 1,
  },
];

console.log('Hello, World');
setTimeout(() => {
  console.log('by by');
}, 2000)
const obj = {id: 1, name: 'panda', occupation: 'IT'}
console.log(obj)

function DisplayInfo() {
  const name = "SomeOne";
  return (
    <>
      {/* structure familiarity */}
      <h1>Hi, {name}!</h1>
      <p>Grab your coffee, and Let's get Started!</p>
      <br />
      <br />

      {/* interpolation */}
      <h1>{getTitle("React")}</h1>

      {/* input */}
      <br />
      <br />
      <label htmlFor="search">Search: </label>
      <input type="text" id="search" />

      {/* property calls */}
      <br />
      <br />
      <h1>
        {"My hobby is my " +
          Nerd.hobby +
          " and my " +
          Nerd.hobby +
          " is in " +
          Nerd.interest}{" "}
      </h1>
      <h2>
        {Nerd.interest +
          " is a " +
          Nerd.everything +
          " and " +
          Nerd.everything +
          " is " +
          Nerd.shit}{" "}
      </h2>

      <br />
      <br />

      {MyElement}

      <br />
      <br />

      {list.map(function (item) {
        return (
            <li key={item.objectID}>
              <a href={item.url}>{item.title}</a> — {item.author}
            </li>
        )
      })}
    </>
  );
}

export default DisplayInfo;
