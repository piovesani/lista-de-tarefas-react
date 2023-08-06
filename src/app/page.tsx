"use client"

import { useState } from "react";
import { TodoItem } from "./types/TodoItem";

const Page = () => {

  const [itemInput, setItemInput] = useState('');

  const [list, setList] = useState<TodoItem[]>([
    { label: 'Fazer dever de casa', checked: false },
    { label: 'Fazer o bolo', checked: false }
  ]);

  const handleAddButton = () => {
    if(itemInput.trim() === '') return;

    setList([ ...list, { label: itemInput, checked: false }]);
    setItemInput('');
  }

  const deleteItem = (index: number) => {
    setList(list.filter((item, key) => key !== index));
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

          <button onClick={handleAddButton} className="flex-1">Adicionar</button>
        </div>

        <p className="w-full my-5">{list.length} tems na lista</p>
        <ul className="w-full max-w-lg list-disc pl-5">
          {list.map((item, index)=> (
            <li key={index}>{item.label} - 
              <button onClick={() => deleteItem(index)} className="hover:underline-offset-0">[ deletar ]</button>
            </li>
          ))}
        </ul>
      </div>

    </div>
  );
}

export default Page;