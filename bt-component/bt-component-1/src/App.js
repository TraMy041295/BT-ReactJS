import AlertTable from "./components/AlertComponent";

function App(props) {
  const render = props.render
  return (
    <AlertTable render={render}/>
  );
}

export default App;
