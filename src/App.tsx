import { Button, ButtonRemove, ButtonEdit } from "./components/Button";
import { Input } from "./components/Input";
import { Checkbox } from "./components/checkbox";
import { useState } from "react";

type TodoList = {
  value: string;
  isDone: boolean;
};

function App() {
  const [inputValue, setInputValue] = useState("");
  const [todos, setTodos] = useState<Array<TodoList>>([]);

  function AjoutElement() {
    setTodos([...todos, { value: inputValue, isDone: false }]);
    setInputValue("");
  }
  //je modifie mon elemenbt dans ma ligne de todo en affichant une popup ou alert pour modifier le texte
  function ModifierElement(index: number) {
    const newTodos = todos.map((todo, todoId) => {
      if (todoId === index) {
        const newValue = prompt("Modifier le texte", todo.value);
        if (newValue) {
          todo.value = newValue;
        }
        return todo;
      }
      return todo;
    });
    setTodos(newTodos);
  }

  function SupprimerElement(index: number) {
    const newTodos = todos.filter((_, i) => i !== index);
    setTodos(newTodos);
  }

  function checkboxChange(index: number) {
    const newTodos = todos.map((todo, todoId) => {
      if (todoId === index) {
        todo.isDone = !todo.isDone;
        return todo;
      }
      return todo;
    });
    setTodos(newTodos);
  }

  return (
    <>
      <h1 className="text-3xl text-center mb-2">My todo list</h1>
      <div className="flex justify-center mb-2">
        <div className="border-2 border-grey rounded-2xl mr-2 text-center content-center px-2 py-2">
          <Input
            placeholder="Ajouter un élément"
            value={inputValue}
            onChange={(e) => {
              setInputValue(e.target.value);
            }}
          />
        </div>
        <div className="bg-emerald-400 px-2 py-2 rounded-xl">
          <Button onClick={AjoutElement} text="Ajouter"></Button>
        </div>
      </div>
      <div className="flex justify-center flex-col ">
        <ul>
          {todos.map((todo, index) => (
            <div key={index} className="flex justify-between border-2 rounded-xl border-black mr-80 ml-80 mb-2 px-2 py-2">
              <span data-testid={`resultSpan${index}`}>{todo.value}</span>
              <div className="flex">
                <Checkbox checked={todo.isDone} onChange={() => checkboxChange(index)} />
                <div className="bg-blue-600 px-2 py-2 rounded-xl text-white ml-4">
                  <ButtonEdit
                    onClick={() => {
                      ModifierElement(index);
                    }}
                    text="Modifier"
                  ></ButtonEdit>
                </div>
                <div className="bg-red-600 px-2 py-2 rounded-xl text-white ml-4">
                  <ButtonRemove
                    onClick={() => {
                      SupprimerElement(index);
                    }}
                    text="supprimer"
                  ></ButtonRemove>
                </div>
              </div>
            </div>
          ))}
        </ul>
      </div>
    </>
  );
}

export default App;
