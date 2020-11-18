import React, { Component } from 'react';
import Customer from './components/Customer';
import './App.css';

const customers =[
  {
  'id':1,
  'image':'https://placeimg.com/64/64/1',
  'name':'김대명',
  'birthday':'10123232',
  'gender':'남자',
  'job':'선생님'
},
{
  'id':2,
  'image':'https://placeimg.com/64/64/2',
  'name':'제니',
  'birthday':'10333433',
  'gender':'여자',
  'job':'대학생'
},
{
  'id':3,
  'image':'https://placeimg.com/64/64/3',
  'name':'홍길동',
  'birthday':'10273222',
  'gender':'남자',
  'job':'개발자'
}
]

class App extends Component {
  render() {
    return (
      <div>
       {
        customers.map(c=>{
          return (
          <Customer 
            key={c.id}
            id={c.id}
            image={c.image}  
            name={c.birthday}
            birthday={c.birthday}
            gender={c.gender}
            job={c.job}                  
          />
          );
        } )       

       }
      </div>

    );
  }
}


export default App;
