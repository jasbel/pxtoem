import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

class ConvertApp extends React.Component {
  constructor(props){
    super(props);
    this.state= {
      items:[], number: ''
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  render(){
    return (
      <div>
       <div class="container" className="container">
          <h3>PX to EM</h3>
          <form onSubmit={this.handleSubmit} >
            <label htmlFor="base-convert">
              Base: 16px
            </label>
            <br></br>
            <label htmlFor="new-convert">
              Insert PX please
            </label>
            <input id="new-convert" onChange={this.handleChange} value={this.state.number}/>
            <button> Calculate </button>
            <ConvertList items={this.state.items}/>
          </form>
       </div>
      </div>
    );
  }

  handleChange(e) {
    this.setState({ number: e.target.value});
  }

  handleSubmit(e) {
    e.preventDefault();
    if (this.state.number.length === 0) {
      return;
    }
    const newItem = {
      number: this.state.number,
      id: Date.now()
    };
    this.setState(state => ({
      items: state.items.concat(newItem),
      number: ''
    }))
  }
}

class ConvertList extends React.Component {
  render(){
    return(
      <ul>
        {this.props.items.map(item => (
          <li key={item.id} > {item.number} px to x {item.number / 16}em</li>
        ))}
      </ul>
    )
  }
}

function joinAll(item) {
  if(item){
    return item.title + ' with base -> ' + item.base;
  }
  return 'Null Article'
}

const itemConvert= {
  title: 'Po To Em',
  base: '16px',
  inputPx: '25px',
  outputEm: '25px / 16px'
};
const element=( 
  <div>
    <h1>** {joinAll(itemConvert)} **</h1>
    <div>
      <label> Base:  {itemConvert.base}</label>
    </div>
  </div>
);

ReactDOM.render(
  <ConvertApp/>,
  // element,
  // <React.StrictMode>
    // <App />
  // </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
