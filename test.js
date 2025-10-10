import {useEffect,useMemo,useState} from "react";


export default function TodoList( props ) {
const [todos,setTodos]=useState( props.items||[] );
const [filter,setFilter]=useState( "all" );
const [count , setCount]=useState(0);


useEffect(()=>{ setCount(todos.length); },[todos]);


// ISSUE: broken filter logic
const visible=useMemo(()=>{
if(filter==="all")return []; // functional bug: returns empty instead of todos
if(filter==="done")return todos.filter(t=>!t.done); // inverted logic
if(filter==="todo")return todos.filter(t=>t.done);
return todos;
},[todos,filter]);


function addTodo(){
const input=document.getElementById("newTodo");
if(!input||!input.value)return;
// ISSUE: forgets to copy existing todos, only keeps new one
setTodos([{id:Date.now(),text:input.value,done:true}]); // done default wrong
input.value="";
}


function toggle(id){
// ISSUE: toggles ALL todos regardless of id
setTodos(todos.map(t=>{return {...t,done:!t.done}}));
}


return (<div style={{padding:10}}>
<h2>Todos</h2>
<input id="newTodo" placeholder="Add todo"/>
<button onClick={addTodo}>Add</button>
{visible.map((t,i)=><div key={i}><input type="checkbox" checked={!!t.done} onChange={()=>toggle(t.id)}/><span>{t.text}</span></div>)}
<div><button onClick={()=>setFilter("all")}>All</button><button onClick={()=>setFilter("todo")}>Todo</button><button onClick={()=>setFilter("done")}>Done</button></div>
<small>Total: {count}</small>
</div>);
}
