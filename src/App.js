import "./App.scss";
import Table from "./components/Table/Table";

function App() {
 
  return (
    <div className="App">
      <header className="header-app">
        This is recruitment task for Qarson company.
      </header>
      {/* {console.log(dataFetched)} */}
      <Table  /> 
      {/* {false ? console.log("true") : console.log("false")} */}
    </div>
  );
}

export default App;
