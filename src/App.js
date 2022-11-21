// import logo from './logo.svg';
import "./App.css";
import Header from "./components/Header";
import Checkbox from "./components/Checkbox";
import Button from "./components/Button";
import Input from "./components/Input";
import "./styles/header.scss";
import "./styles/checkbox.scss";
import "./styles/input.scss";

function App() {
  return (
    <main className="App">
      <Header />
      <Input />
      <Button />
      <Checkbox />
    </main>
  );
}

export default App;
