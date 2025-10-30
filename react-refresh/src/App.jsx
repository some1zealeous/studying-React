function Greeting(props) {
  return <h1>Hello, {props.name}</h1>;
}

function UserCard({ name, profession }) {
  return(
    <div>
      <h2>{ name }</h2>
      <p>{ profession }</p>
    </div>
  )
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
      
      <UserCard name="Anshu" profession="Data Entry" />
    </div>
  );
}

export default App;