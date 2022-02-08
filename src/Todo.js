    import React from 'react';

export default  function Todo (props)
{
 return (<div className={`todo ${props.completad}` }>

  <li className="todo-item"  > {props.text}  </li>
   <button  className="completad-btn" onClick={props.IsCompletad}><i className="fas fa-check" ></i></button>
   <button value="trash" className="trashBtn-btn"  onClick={ props.delete} ><i className="fas fa-trash" ></i></button>
   
  </div>)
   
  }






