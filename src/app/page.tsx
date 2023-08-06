"use client"

import { useState } from "react";
import { TodoItem } from "./types/TodoItem";

const Page = () => {

  const [list, setList] = useState<TodoItem[]>([
    { label: 'Fazer dever de casa', checked: false },
    { label: 'Fazer o bolo', checked: false }
  ]);

  return (
    <div className="w-screen h-screen flex flex-col items-center text-2xl">
      <h1 className="text-4xl mt-5">Lista de tarefas</h1>
      <div className="flex w-full max-w-lg my-3 p-4 rounded-md bg-gray-700 border-2 border-gray-600">
        <input
          type="text"
          placeholder="O que deseja fazer?"
          className="w-3/4 border border-black p-3 text-2xl text-black rounded-md mr-3"
          
        />

        <button className="flex-1">Adicionar</button>
      </div>

      <ul className="w-full max-w-lg list-disc pl-5">
        {list.map(item => (
          <li>{item.label} - <button className="hover:underline-offset-0">[ deletar ]</button></li>
        ))}
      </ul>
    </div>
  );
}

export default Page;