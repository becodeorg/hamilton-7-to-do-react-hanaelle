// import logo from './logo.svg';
import "./App.css";
import Header from "./components/Header";
import TodoList from "./components/TodoList";
import Form from "./components/Form";
import "./styles/header.scss";

function App() {
  const {initialTodos} = TodoList();
  return (
    <main className="App">
      <Header />
      <Form inputTest={initialTodos} />
      <TodoList />
    </main>
  );
}

export default App;
