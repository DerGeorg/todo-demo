
import './App.css';
import {useState} from "react";
import TodoList from "./components/TodoList/TodoList";
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {

  const [todoList] = useState([{name: "A", id:0, done: false}, {name: "B", id:1, done: false}]);

  return (
      <div className="App">
        <TodoList todos={todoList}>

        </TodoList>
      </div>
  );



}
export default App;
