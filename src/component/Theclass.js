import { Component } from "react";

class TheButton extends Component {
    constructor (){
        super()
        this.state={
            compteur:0
        }
    }   
        incrementer(){
            this.setState({compteur:this.state.compteur+1})
        }
        decrementer(){
            this.setState({compteur:this.state.compteur-1})
        }
        render(){
            return (
                <div id="but">
                <button onClick={()=>this.incrementer()}>+</button>
                <h1>{this.state.compteur}</h1>
                <button onClick={()=>this.decrementer()}>-</button>
               </div>
            )
            }
          }
    
  

export default TheButton