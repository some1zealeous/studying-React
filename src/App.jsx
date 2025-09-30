function DisplayInfo() {

  const name = 'SomeOne';
  return (
    <>
    <h1>Hi, {name}!</h1>
    <p>Grab your coffee, and Let's get Started!</p>

    <label htmlFor="search">Search: </label>
    <input type="text" id="search" />
    </>
  )
};

export default DisplayInfo;