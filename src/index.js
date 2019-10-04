import React from 'react';
import ReactDOM from 'react-dom';

const baseUrl = 'http://localhost:3000/menu_items'

function create(data) {
    let options = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(data)
    }
    return fetch(baseUrl, options)
      .then((response) => response.json())
  }

class App extends React.Component{
    render(){
        
        // create({ title: 'Test item', url: '#' })

        return(
            <div>Hello World</div>
        )
    }
}

ReactDOM.render(<App />, document.getElementById('app'))
