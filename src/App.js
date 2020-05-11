import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';

class App extends Component {
  state = {
    persons: [
      {name: 'Jayson', age: 30},
      {name: 'Max', age: 10},
      {name: 'Mick', age: 20}
    ],
    otherState: 'some other state value' 
  };

      switchNameHandler = (newName) => {
        //console.log('was clicked!');
        // DO NOT DO THIS this.state.persons[0].name = 'Louie';
        this.setState({
          persons: [
            {name: newName, age: 24},
            {name: 'NovieJane', age: 22},
            {name: 'Mick', age: 24}
          ]
        })
      }

      nameChangeHandler = (event) => {
        this.setState( {
          persons: [
            {name: 'Gabby', age: 24},
            {name: event.target.value, age: 22},
            {name: 'Mick', age: 26}
          ]
        })
      }

  render() {
    const style = {
      backgroundColor:'white',
      font:'inherit',
      border:'1px solid blue',
      padding: '8px',
      cursor:'pointer'
    };


    return ( 
      <div className="App">
        <h1>Hi! i am react app</h1>
        <p>this is actually working</p>
        <button 
        style={style}
        onClick={() => this.switchNameHandler('Maximillina!!')}>name switch</button>
        <Person 
        name={this.state.persons[0].name} 
        age={ this.state.persons[0].age }/>
        <Person 
        name={this.state.persons[1].name} 
        age={ this.state.persons[1].age }
        changed={this.nameChangeHandler}/>
        <Person 
        name={this.state.persons[2].name} 
        age={ this.state.persons[2].age }
        click={this.switchNameHandler.bind(this,'Max')}> hobbies: dancing </Person>
      </div>
      
    );
    //return React.createElement('div', {class: 'App'},React.createElement('h1', null, 'Hi, I\'m React App'));
  }
}

export default App;
