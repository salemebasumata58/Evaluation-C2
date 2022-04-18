import { useEffect,useState } from "react";

import "./myapp.css"

export const ShowStudents = () => {
    const [todos, setTodos]= useState([]);
    const [text, setText] = useState("");

    useEffect(()=>{
        console.log("mounted Todos");
        getData();
  
        return function(){
           //closure ---> curried Function
           console.log("unmouting todos");
        }
       },[]);
       
 const getData = async () =>{
    const data=await fetch("http://localhost:8080/students")
     .then((d)=> d.json()
     );
     setTodos(data);
   
       // console.log("todos",data)
    }
    

    return (
      <div>
        <div className="controls">
          <div>
            Sort By:{" "}
            <select
              // select dropdown needs both value and onChange
              className="sortby"
            >
              <option value="first_name">First Name</option>
              <option value="gender">Gender</option>
              <option value="age">Age</option>
              <option value="tenth_score">10th Score</option>
              <option value="twelth_score">12th Score</option>
            </select>
          </div>
          <div>
            Order:
            <select
              // select dropdown needs both value and onChange
              className="sortorder"
            >
              <option value="asc">Ascending</option>
              <option value="desc">Descending</option>
            </select>
          </div>
          <button className="sort">sort</button>
        </div>
        <table className="table">
          <thead>
            <tr>
             <th>First Name</th>
              <th>Last Name</th>
              <th>Email</th>
              <th>Gender</th>
              <th>Age</th>
              <th>10th Score</th>
              <th>12th Score</th>
              <th>Branch</th>
            </tr>
          </thead>
          <tbody className="tbody">
            {/* populate all rows like below: */}
            <tr className="row">
            {todos.map(t=><td className="first_name">{t.first_name}</td>)}
              {todos.map(t=><td className="last_name">{t.last_name}</td>)}
                {todos.map(t=><td className="email">{t.email}</td>)}
                {todos.map(t=><td className="gender">{t.gender}</td>)}
                {todos.map(t=><td className="age">{t.age}</td>)}
                {todos.map(t=> <td className="tenth_score">{t.tenth_score}</td>)}
                {todos.map(t=><td className="twelth_score">{t.twelth_score}</td>)}
                {todos.map(t=> <td className="preferred_branch">{t.preferred_branch}</td>)}
            </tr>
          </tbody>
        </table>
      </div>
    );
  };