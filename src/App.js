
import { useState } from 'react';
import './App.css';

function App() {
  const[inputData,setInputData] = useState();
  const[random,setRandom] = useState(3);
 const[data,setData] = useState([
  {
    id:1,
    name:"Akash",
    like:0,
    dislike:0,
  },
  {
    id:2,
    name:"Sachin",
    like:0,
    dislike:0,
  }
 ]);

const addData = () =>{
  setRandom(random+1);
  setData((prev) => [...prev,{id:random,name:inputData,like:0,dislike:0}])
};

const handleDelete = (id) =>{
  setData(data.filter((prev) => prev.id !== id))
}
console.log(data);

const handleLike = (id,like) =>{
      const new_data = data.map((item) => item.id === id ? {...item, like:like+1} : item)
      setData(new_data);
}

const handleDislike = (id,dislike) =>{
  const new_data = data.map((item) => item.id === id ? {...item, dislike:dislike+1} : item)
  setData(new_data);
}

const handleSort = () =>{
    const sortData = [...data].sort((a,b) => b.like - a.like)
    setData(sortData);
}

  return (
    <div className="App">
     <h2>playing with object using hooks  </h2>
     <div><button onClick={handleSort}>Sort</button></div>
     <br></br>
     <input 
     className='input-box'
      type="text" placeholder='add here'
       onChange={(e) =>{setInputData(e.target.value)}} />
     <button className='button-box' onClick={addData}>Add</button>
     {data.map((ele)=>(
      <div key={ele.id} className='main_div'>
          <h2>{ele.name}</h2> 
          <p>like :{ele.like} </p>
          <p>dislike :{ele.dislike} </p>
          <button onClick={() => handleLike(ele.id,ele.like)}>like</button>
          <button onClick={()=>handleDelete(ele.id)}>Delete </button>
          <button onClick={() => handleDislike(ele.id,ele.dislike)}>dislike</button>
      </div>
     ))}


    </div>
  );
}

export default App;
