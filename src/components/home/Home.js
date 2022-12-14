import React, { Component } from 'react'

export default class Home extends Component {
    constructor () {
        super();
        this.state={
            color:"Red"
        }
    }
  render() {
    return (
      <div>
        <h1>{this.state.color}</h1>
        <button onClick={()=>this.setState({color:'Blue'})}>Blue</button>
        <button onClick={()=>this.setState({color:'Red'})}>Red</button>
        <button onClick={()=>this.setState({color:'Black'})}>Black</button>


        {/* <h1>{this.props.title}</h1>
        <h2>{this.props.subTitle}</h2> */}
      </div>
    )
  }
}















// import axios from 'axios';
// import React, { useEffect, useRef, useState } from 'react';
// const Home = () => {


//     // use state hooks
//     // const [color, setColor]=useState("Red")
    
//     // const newBlue = () => {
//     //     setColor("Blue")
//     // }

//     // const newGreen = () =>{
//     //     setColor('Green')
//     // }

//     // const newBlack = () => {
//     //     setColor('Black')
//     // }

//     // const def = () => {
//     //     setColor('Red')
//     // }


//     // use ref hooks methods
//     // let userName = useRef();
//     // let password = useRef();

//     // const submitForm = () => {
//     //     let name = userName.current.value;
//     //     let pass = password.current.value;
//     //     alert(name);
//     //     alert(pass);
//     // }

//     const [todo, setTodo] = useState([]);
//     useEffect(()=>{
//         axios.get("https://jsonplaceholder.typicode.com/todos").then((res)=>{
//             setTodo(res.data);
//         }).catch((err)=>{

//         })
//     },[]);

//     const deleteEvent=(id)=>{
//         let deleteId = "Delete id = " + id;
//         alert(deleteId);
//         // API call delete
//     }

//     const editEvent=(id)=>{
//         let editId = 'Edit id = ' + id;
//         alert(editId);
//         //API call edit
//     }

//     const detailsEvent =(id)=>{
//         let detailsId = 'Details id = ' + id;
//         alert(detailsId);
//         // API call details
//     }

//     const myList = todo.map((list, i)=>{
//         return(
//             <tr>
//                 <td>{list['userId']}</td>
//                 <td>{list['id']}</td>
//                 <td>{list['title']}</td>
//                 <td><button onClick={deleteEvent.bind(this, list['id'])} className='btn btn-danger'>Delete</button></td>
//                 <td><button onClick={editEvent.bind(this, list['id'])} className='btn btn-primary'>Edit</button></td>
//                 <td><button onClick={detailsEvent.bind(this, list['id'])} className='btn btn-success'>Details</button></td>
//             </tr>
//         )
//     })

//     return (
//         <div>


//             <table className="table table-border">
//                 <thead>
//                     <tr>
//                         <th>User Id</th>
//                         <th>Id</th>
//                         <th>User Id</th>
//                         <th>Delete</th>
//                         <th>Edit</th>
//                         <th>Details</th>
//                     </tr>
//                 </thead>
//                 <tbody>
//                  {myList}
//                 </tbody>

//             </table>
//             {/* use state hooks */}
//             {/* <h1>{color}</h1>
//             <button onClick={def}>Default</button>
//             <button onClick={newBlue}>Change Blue</button>
//             <button onClick={newGreen}>Change Green</button>
//             <button onClick={newBlack}>Change Black</button> */}


//             {/* a simple form for practice useRef hook methods
//             <input ref={userName} placeholder='User name' type="text"/>
//             <input ref={password} placeholder='Password' type="password"/>

//             <button onClick={submitForm}>Submit</button> */}


            
//         </div>
//     );
// };

// export default Home;