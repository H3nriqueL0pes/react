import Header from './Components/Header';
import Tasks from './Components/tasks';
import'./App.css';
import { useState } from 'react';

function App(){
  const [tasks,setTasks]=useState([
    {
        id:1,
        text:'Consulta médica',
        day:'5 fevereiro as 14:30',
        reminder: true,
    },
    {
        id:2,
        text:'Consulta médica',
        day:'5 fevereiro as 14:30',
        reminder: true,
    }, 
    {
        id:3,
        text:'Consulta médica',
        day:'5 fevereiro as 14:30',
        reminder: false,
    },
]);

function deletaTarefa(id){
  setTasks(tasks.filter((task) => task.id !==id));
}
  return(
    <div className="container">
     <Header  title="tarefa  de um cara calvo" />
     <header title="tarefas" />
      <Tasks tasks={tasks} onDelete={deletaTarefa} />

    </div>
  );
}
 
export default App;