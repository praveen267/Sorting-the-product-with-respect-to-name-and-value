import React,{Component} from 'react';

import './App.css';
import Bat from './Bat.PNG'
import Dai from './Dai.PNG'
import Eth from './Eth.PNG'
import axios from 'axios';
class App extends Component {
	constructor(props)
	{
		super(props)
		this.state={
			name:['Bat','Eth','Dai'],
			IMG:[Bat,Eth,Dai],
			price:"",
			mon:[300,400,350],
			money:'',
			ab:[],
			
					}
	}
	 componentDidMount() {
          axios.get("data/price?fsym=BTC&tsyms=USD,JPY,EUR")
          .then(res => {
         
		  //console.log(this.state.price)
          this.setState({ price:res.data });
		  console.log(this.state.price)
		  //this.state.price.map((person, index) => (<p>Hello, {person.USD} from {person.JPY}</p>
          //
    //))
      })
  }
  onChange=(event)=>
  {
	  event.preventDefault();
	  this.setState({[event.target.name]:event.target.value});
	  console.log(event.target.value)
	  console.log(event.target.name)
	  if (event.target.name==="name")
	  {
		  console.log(this.state.name.sort());
		  this.setState({name:this.state.name.sort()})
		  this.setState({IMG:this.state.IMG.sort()})
		  console.log(this.state.name);
		  console.log(this.state.IMG);
	  }
	  
	  if (event.target.name==="mon")
	  {
		  console.log(this.state.name.sort());
		  this.state.ab = this.state.mon.sort((a, b) => {
                                     return a - b;
                                                       });
		  console.log(this.state.ab);
		  this.setState({mon:this.state.ab})
		  this.setState({IMG:this.state.IMG.sort()})
		  console.log(this.state.IMG);
		  //console.log(this.state.mon);
	  }
	  
  }
  onSubmits=(event)=>
  {
	 event.preventDefault(); 
	  
  }

	render()
	{
  return (
    <div style={{gridRowGap: '-40px'}}>
	<p style={{backgroundColor:'yellow',color:'red',fontSize:'60px',height:'80px',width:'100%',textAlign:'center',float:'top'}}>
	Flipcart Coin Selling system
    </p>  
	
	<p style={{backgroundColor:'#DEDEDE',color:'red',fontSize:'40px',width:'100%',textAlign:'center'}}>
	Please Sort your Product<br/>
	<form style={{backgroundColor:'#DEDEDE',color:'red',fontSize:'20px',width:'100%',textAlign:'center',display:'flex',marginLeft:'500px'}} onSubmit={this.onSubmits}>
	ByMoney: 
	<input type="checkbox" name='mon' value={this.state.mon} onChange={this.onChange}/>
	ByName: 
	<input type="checkbox" name='name' value={this.state.name} onChange={this.onChange}/>
	
	</form>
	</p>
	
    <div style={{display:'flex'}}>	
    <p style={{fontSize:'5px',textAlign:'center',width:'32%',border:'1px solid blue',float:'left',paddingLeft:'30px',backgroundColor:'#DEDEDE'}}>
	<img src={this.state.IMG[0]} /><br/>
		<h1 >{this.state.name[0]}</h1><br/>
		<h1 >USD:{this.state.price.USD}</h1><br/>
		<h1 >JPY:{this.state.price.JPY}</h1><br/>
		<h1 >EYR:{this.state.price.EUR}</h1><br/>
		<h1 >Doller:{this.state.mon[0]}</h1><br/>
		
	
    </p>

     <p style={{fontSize:'5px',textAlign:'center',width:'32%',border:'1px solid blue',backgroundColor:'#DEDEDE'}}>
	<img src={this.state.IMG[1]} /><br/>
	<h1 >{this.state.name[1]}</h1>
	<br/>
		<h1 >USD:{this.state.price.USD}</h1><br/>
		<h1 >JPY:{this.state.price.JPY}</h1><br/>
		<h1 >EYR:{this.state.price.EUR}</h1><br/>
		<h1 >Doller:{this.state.mon[1]}</h1><br/>
	
    </p>	
	
	<p style={{fontSize:'5px',textAlign:'center',width:'32%',border:'1px solid blue',float:'right',backgroundColor:'#DEDEDE'}}>
	<img src={this.state.IMG[2]}/><br/>
	<h1 >{this.state.name[2]}</h1>
	<br/>
		<h1 >USD:{this.state.price.USD}</h1><br/>
		<h1 >JPY:{this.state.price.JPY}</h1><br/>
		<h1 >EYR:{this.state.price.EUR}</h1><br/>
		<h1 >Doller:{this.state.mon[2]}</h1><br/>
	
    </p>
	</div>
    </div>
  );
}}

export default App;
