import Table from "./Table";

function DisplayInfo() {
  const human = 'SomeOne';
  return (
    <>
    <h1>Hi, {human}!</h1>
    <p>Grab your coffee, and Let's get Started!</p>
    <Table />
    </>
  )
};

export default DisplayInfo;