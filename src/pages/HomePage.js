import React, { Component } from 'react'
import Home from '../components/home/Home';

export default class HomePage extends Component {

  constructor () {
    super();
  }
  render() {
    return (
      <div>
        <Home title= "Welcome" subTitle="to Dhaka"/>
      </div>
    )
  }
}








// import React, { Component } from 'react'
// import Home from '../components/home/Home'

// export default class HomePage extends Component {
//   render() {
//     return (
//       <div>
//         <Home />
//       </div>
//     )
//   }
// }
