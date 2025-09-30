const Nerd = {
  hobby: 'interest',
  interest: 'everything',
  everything: 'shit',
  shit: 'Israel'
}

function DisplayInfo() {

  const name = 'SomeOne';
  return (
    <>
    <h1>Hi, {name}!</h1>
    <p>Grab your coffee, and Let's get Started!</p>

    <label htmlFor="search">Search: </label>
    <input type="text" id="search" />

    <h1>{"My hobby is my " + Nerd.hobby + " and my " + Nerd.hobby + " is in " + Nerd.interest } </h1>
    <h2>{Nerd.interest + " is a " + Nerd.everything + " and " + Nerd.everything + " is " + Nerd.shit} </h2>
    </>
  )
};

export default DisplayInfo;