"use client"

import { useReducer, useState } from "react";
import { TodoItem } from "@/types/TodoItem";
import { todoListReducer } from "./reducers/todoListReducer";

const Page = () => {

  const [list, dispatch] = useReducer(todoListReducer, []);
  const [addField, setAddField] = useState('');

  const handleAddButton = () => {
    if (addField.trim() === '') return false;

    dispatch({
      type: 'add',
      payload: {
        text: addField.trim()
      }
    });
    setAddField('');
  }

  const toggleItem = (id: number) => {
    dispatch({
      type: "toggleDone",
      payload: { id }
    });
  }

  const deleteItem = (id: number) => {
    if(!window.confirm('Tem certeza que deseja excluir?')) return false;
    dispatch({
      type: "remove",
      payload: { id }
    });
  }

  const editItem = (id: number) => {
    const item = list.find(i => i.id === id);

    if (!item) return false;

    const newText = window.prompt('Editar tarefa', item.label);

    if (!newText || newText.trim() == "") return false;
    dispatch({
      type: "editText",
      payload: { id, newText }
    });

  }

  return (
    <div className="container mx-auto">
      <h1 className="text-center text-4xl my-4">Lista de tarefas</h1>
      <div className="max-w-2xl mx-auto flex rounded-md border bg-gray-800 border-gray-400 p-4 my-4">
        <input
          type="text"
          placeholder="Digite uma nova tarefa"
          className="flex-1 rounded-md  border border-white p-3 bg-transparent text-white outline-none"
          value={addField}
          onChange={e => setAddField(e.target.value)}
        />

        <button
          onClick={handleAddButton}
          className="bg-green-700 py-2 px-6 rounded-md ml-3 hover:bg-green-600"
        >Adicionar
        </button>
      </div>

      <p className="text-center">{list.length} items na lista</p>
      <ul className="max-w-2xl mx-auto">
        {list.map((item) => (
          <li
            key={item.id}
            className="list-none flex items-center p-3 my-3 border-b border-gray-600">
            <input
              onClick={() => toggleItem(item.id)}
              type="checkbox"
              checked={item.checked}
              className="w-6 h-6 mr-4" />
            <p className="flex-1 text-lg">{item.label}</p>

            <button
              onClick={() => editItem(item.id)}
              className="bg-blue-700 py-2 px-6 rounded-md ml-3 hover:bg-blue-600"
            >Editar</button>

            <button
              onClick={() => deleteItem(item.id)}
              className="bg-red-700 py-2 px-6 rounded-md ml-3 hover:bg-red-600"
            >Deletar</button>
          </li>
        ))}
      </ul>

    </div>
  );
}

export default Page;