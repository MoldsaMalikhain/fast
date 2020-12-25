import React from 'react'
import './App.css';
import list from './list'

class App extends React.Component{
  constructor(props){
    super(props)
    this.state={
      inCart:[]
    }
    this.setSelected = this.setSelected.bind(this);
    this.checkItems = this.checkItems.bind(this);
  }
  checkItems(){
    let counter = 0;
    this.state.inCart.forEach(element => {
      if(element.color === 'blue')counter++;
      else counter --;

    });
    
    if(counter === 3) alert("Congrats!!!")
    else alert("err!")
  }
  setSelected(item){
    const cartItems = this.state.inCart.slice();
    let isIn = false;
    cartItems.forEach(element => {
      console.log('item ID: ' + item.id + 'element ID: ' + element.id)

      if(item.id === element.id){
        isIn = true;
      }
    });
    if(isIn === false) {
      cartItems.push({...item})
      this.setState({inCart: cartItems})
    }
    console.log(cartItems)
    console.log(this.state.inCart)
  }
  render(){
    return(
      <div className="App">
        <div className='handler'>
          {list.map((item,key)=>{
            return(
              <div key={key++} 
                  className='checkbox'
                  value={this.state.isSelected}
                  onClick={()=> this.setSelected(item)}
                  style={{backgroundColor:item.color}}>
              </div>
            );
          })}
        </div>
        <button className='submit' onClick={this.checkItems}>
          submit
        </button>
        </div>
      )
  }
}

export default App;
