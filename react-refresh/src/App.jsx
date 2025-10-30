function Greeting(props) {
  return <h1>Hello, {props.name}</h1>;
}

function App() {
  const userName = "Md Kaif";
  return (
    <div>
      <h1>Hello, { userName }</h1>
      <p>Welcome to React JSX World.</p>

      <Greeting name='Kaif' />
      <Greeting name='Rehan' />
      <Greeting name='Addya' />
    </div>
  );
}

export default App;