import React, { Component } from 'react';
import axios from 'axios'
import Quote from './Quote';
import './randomMachine.css'

class RandomMachine extends Component{
    static defaultProps={
        numQuotesToGet:1
    }
    constructor(props){
        super(props);
        this.state={
            quote:'',
            author:''
        }
        //this.handleClick=this.handleClick.bind(this);
    }

   componentDidMount(){
        //load data
        if(this.state.quote.length===0) this.getQuote();
    }
    async getQuote(){
        let res=await axios.get('https://gist.githubusercontent.com/camperbot/5a022b72e96c4c9585c32bf6a75f62d9/raw/e3c6895ce42069f0ee7e991229064f167fe8ccdc/quotes.json');
        let quoteArray=res.data.quotes
        let randIdx=()=>{return Math.floor(Math.random()*quoteArray.length)}
        let randomQuote=quoteArray[randIdx()]
        this.setState({
            quote: randomQuote.quote,
            author: randomQuote.author
        })
    }


    render(){
        //let allQ=this.state.quote.map(q=><li>{q}</li>)

        return(
            <div>
                <i class="fas fa-quote-right"></i>
                <Quote quote={this.state.quote} author={this.state.author} newQuote={()=>this.getQuote()}/>
            </div>
        )
    }
}

export default RandomMachine;