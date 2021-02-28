import React,{useEffect, useState}from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  const products=[
    { name:'photoshop',price:'$99.99'},
    { name:'illustrator',price:'$69.99'},
    { name:'pdf reader',price:'$9.99'}
  ]
  var name= "sumaya islam"
  var details={
    firstName:"sumaya",
    lastName:"setu",
    study:"B.S.C honours in computer science and engineering"
  }

  
  var style={
    color:'red'
  }
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit done  <code>src/App.js</code> and save to reload.
        </p>
        
        <h1>my heading : {3+4}</h1>
        <h1 className="" style={style}>my name : {name}</h1>
        <p style={{backgroundColor:"goldenrod",color:"red"}}>{details.firstName+" "+ details.lastName} </p>
        <p style={{color:'goldenrod'}}>{details.study}</p>
        
        <Counter></Counter>
        <Users></Users>

       <Person name="sumaya Setu" color="pink"></Person>
       <Person name="Rokaiya Akter" color="blue"></Person>
       <Person name="Ritu Akter" color="red"></Person>


       <Product name={products[0].name} price={products[0].price}></Product>
       <Product name={products[0].name} price={products[0].price}></Product>
       <Product name={products[0].name} price={products[0].price}></Product>


      </header>
    </div>
  );
}

function Counter(){
  const[count,setCount]=useState(10);
  // const handleIncrease=()=>setCount(count+1);
  ;
  return(
    <div>
      <h1>Count : {count}</h1>
      <button onClick={()=>setCount(count+1)}>Increase</button>
      <button onClick={()=>setCount(count-1)}>Decrease</button>
    </div>
  )
}

function Users(){
  const [users,setUsers]=useState([])
  useEffect(()=>{
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(res => res.json())
    .then(data => setUsers(data));
  },[])
  return(
    <div>
      <h3>Dynamic Users : {users.length}</h3>
      <ul>
        {
          users.map(user => <li>{user.name}</li>)
        }
      </ul>
    </div>
  )
}

function Product(props){
  const productStyle={
    border:'1px solid gray',
    borderRadius:'5px',
    backgroundColor:'lightgray',
    height:'200px',
    width:'200px',
    float:'left'
  }
  return(
    <div style= {productStyle}>
      <h3>{props.name}</h3>
      <h5>{props.price}</h5>
      <button>Buy Now</button>
    </div>
  )
}

function Person(props){
  const personStyle={
    border:'5px solid red',
    margin:'10px'
    
  
}
// console.log(props)

  return(
    <div style={personStyle}>
      <h1>Name : {props.name}</h1>
      <h3>B.S.C honours in computer science and engineering</h3>
      <h3>Favourite Color : {props.color}</h3>
    </div>
  )
}
    

export default App;
