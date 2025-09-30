import React from "react";

const Nerd = {
  hobby: 'interest',
  interest: 'everything',
  everything: 'shit',
  shit: 'Israel'
}

function getTitle(title) {
  return title
}

const title = 'React';

// JSX
// const myElement = <h1>Hello, {title}</h1>

// transpiled into js
// const myElement = React.createElement('h1', null, `Hello ${title}`);

// rendered as html by React
<h1>Hello, React</h1>

function DisplayInfo() {

  const name = 'SomeOne';
  return (
    <>
    {/* structure familiarity */}
    <h1>Hi, {name}!</h1>
    <p>Grab your coffee, and Let's get Started!</p>
    <br /><br />

    {/* interpolation */}
    <h1>{getTitle('React')}</h1>

    {/* input */}
    <br /><br />
    <label htmlFor="search">Search: </label>
    <input type="text" id="search" />

    {/* property calls */}
    <br /><br />
    <h1>{"My hobby is my " + Nerd.hobby + " and my " + Nerd.hobby + " is in " + Nerd.interest } </h1>
    <h2>{Nerd.interest + " is a " + Nerd.everything + " and " + Nerd.everything + " is " + Nerd.shit} </h2>
    </>
  )
};

export default DisplayInfo;