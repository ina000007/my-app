import logo from "./logo.svg";
import "./App.css";
import NavBar from "./components/NavBar";
import TextForm from "./components/TextForm";
import About from "./components/About";

function App() {
  return (
    <>
      <NavBar title="MyTextUtils" about="myAbout"/>
      <div className="container my-3">

      <TextForm heading="Enter your text"/>
      {/* <About/> */}
      </div>
    </>
  );
}

export default App;
