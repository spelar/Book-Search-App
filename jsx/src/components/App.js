import React from 'react';

class App extends React.Component {
  _sayDj(){
    alert('sayDj');
  }

  render(){
    let text = "Webpack"

    let style = {
      color: 'red',
      backgroundColor: 'lightGreen'
    };

    return (
      <div>
        <h1>Hi React</h1>
        <p>Welcome to {text}</p>
        <button onClick={this._sayDj}>Click Button</button>
        <p style={style}>{1 == 1 ? 'true' : 'false'}</p>
      </div>
    );
  }
}

export default App;
