import React from "react";
import Counters from "./Component/Counters";
import NavBar from "./Navbar";
class App extends React.Component{  
    state={
        counters:[
            {id: 1, value: 1},
            {id: 2, value: 0},
            {id: 3, value: 0},
            {id: 4, value: 0}
        ]
    }
    handleDelete= (e) =>{
        const {counters}=this.state;
        const filtered=counters.filter( item => item.id !== e)
        this.setState({counters : filtered})
        
        
    }
    handleIncrement = counter =>{
        const counters = [...this.state.counters];
        const index = counters.indexOf(counter);
        counters[index]={...counter};
        counters[index].value++;
        this.setState({
            counters
        })
    }
    handleDecrement = counter =>{
        const counters=[...this.state.counters];
        const index=counters.indexOf(counter);
        counters[index]={...counter};
        counters[index].value--;
        this.setState({counters});
    }
    handleReset = () =>{
        const counters=this.state.counters.map( item => item.value = 0);
        this.setState(counters)
    }  
render(){
    return(
        <div>
            <NavBar 
            totalCounters={this.state.counters.filter(c => c.value > 0).length}
            />
            <Counters 
            counters={this.state.counters}
            onReset={this.handleReset}
            onIncrement={this.handleIncrement}
            onDecrement={this.handleDecrement}
            onDelete={this.handleDelete}
            />
        </div>
    );
}

}


export default App;