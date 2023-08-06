"use client"

import { useState } from "react";
import { TodoItem } from "./types/TodoItem";

const Page = () => {

  const [itemInput, setItemInput] = useState('');

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

  return (
    <div className="w-screen h-screen flex flex-col items-center text-2xl">
      <h1 className="text-4xl mt-5 my-5">Lista de tarefas</h1>
      <div className="w-1/3">
        <div className="flex w-full max-w-lg my-3 p-4 rounded-md bg-gray-700 border-2 border-gray-600">
          <input
            type="text"
            placeholder="O que deseja fazer?"
            className="w-3/4 border border-black p-3 text-2xl text-black rounded-md mr-3"
            value={itemInput}
            onChange={e => setItemInput(e.target.value)}
          />

          <button
            onClick={handleAddButton}
            className="bg-gray-700 border-2 border-gray-600 py-2 px-6 rounded-md ml-3 hover:bg-gray-600"
          >Adicionar
          </button>
        </div>

        <p className="w-full my-5">{list.length} tems na lista</p>
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

    </div>
  );
}

export default Page;