import React from 'react';
import Todo from './Todo';



function App() {
  
let [item,setItem]= React.useState([])
  function addTodo(){

 let text = document.querySelector("#text").value;
if (text){
 
setItem(prev =>{return [...prev,{id:prev.length +1 ,completad: false ,text :text}]});
document.querySelector("#text").value= "";
}
  }
 
function  IfCompletad (id){

    setItem(prev =>{return prev.map((item)=> {
     return  item.id === id?{...item ,completad:!item.completad}:item
    })})
     

  }

  function   Delete (id) {
  
    setItem(prev =>{return prev.filter((it) => it.id !== id)})
    
  }


  let itemHtml = item.map(a =>   <Todo key={a.id} text= {a.text} completad= {a.completad?"complitad":""} IsCompletad ={()=>{IfCompletad(a.id)}}   delete ={()=>{ Delete(a.id)}} />);




  return (
    <div className="App contant">
    
            <h1> Add task

            </h1>
            <div className='form'>
                
                <input   type="text" id="text" required    />
                <button id="btn" onClick={addTodo} > <i className="far fa-plus-square" ></i>
                </button>                
           </div>
           <div className="todo-contanr">
        <ul className="todo-list">
            
    
    {itemHtml}
            </ul>

    </div> 
    </div>
  );
}



export default App;
