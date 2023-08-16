"use client"

import { useReducer, useState } from "react";
import { TodoItem } from "@/types/TodoItem";
import { todoListReducer } from "./reducers/todoListReducer";

const Page = () => {

  const [list, dispatch] = useReducer(todoListReducer, []);
  const [addField, setAddField] = useState('');
  const handleAddClick = () => {


    dispatch({
      type: "toggleDone",
      payload: {
        id: 2
      }
    });

    dispatch({
      type: "editText",
      payload: {
        id: 2,
        newText: "Bla bla bla"
      }
    });

    dispatch({
      type: "remove",
      payload: {
        id: 3
      }
    });
  }
  /*
  
  const [list, setList] = useState<TodoItem[]>([
    { id: 1, label: 'Criar um projeto', checked: false },
    { id: 2, label: 'Dar o commit', checked: false }
  ]);

  const handleAddButton = () => {
    if (itemInput.trim() === '') return;

    setList([...list, { id: list.length + 1, label: itemInput, checked: false }]);
    setItemInput('');
  }

  const deleteItem = (id: number) => {
    setList(list.filter((item) => item.id !== id));
  }

  const toggleItem = (id: number) => {
    let newList = [...list];

    for(let i in newList){
      if(newList[i].id === id){
        newList[i].checked = !newList[i].checked;
      }
    }

    setList(newList);
  }
  */

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

  }

  const deleteItem = (id: number) => {
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
          className="bg-gray-700 border-2 border-gray-600 py-2 px-6 rounded-md ml-3 hover:bg-gray-600"
        >Adicionar
        </button>
      </div>

      <p className="w-full my-5">{list.length} items na lista</p>
      <ul className="w-full max-w-lg list-disc pl-5">
        {list.map((item) => (
          <li key={item.id} className="list-none">
            <div className="flex items-center mb-3 -ml-4 place-content-between">
              <div className="flex items-center">
                <input
                  onClick={() => toggleItem(item.id)}
                  type="checkbox"
                  checked={item.checked}
                  className="w-6 h-6 mr-4" />
                {item.label}
              </div>

              <button
                onClick={() => deleteItem(item.id)}
                className="bg-gray-700 border-2 border-gray-600 py-2 px-6 rounded-md ml-3 hover:bg-gray-600"
              >Deletar</button>
            </div>
          </li>
        ))}
      </ul>

    </div>
  );
}

export default Page;