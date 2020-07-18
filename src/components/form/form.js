import React from 'react';


class Form extends React.Component{
    constructor(){
        super();
        this.state = {
            url : '',
            price: '',
            email: '',
            text: ''
        }
    }
    onUrlChange = (event)=> {
        this.setState({url: event.target.value})
    }
    onPriceChange = (event)=> {
        this.setState({price: event.target.value})
    }
    onEmailChange = (event)=> {
        this.setState({email: event.target.value})
    }
    
    onNotifyMe = () => {
        fetch('http://localhost:4000/',{
            method: 'post',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({
                url: this.state.url,
                price: this.state.price,
                email: this.state.email

            })
            
           
                })
                this.setState({text: 'You will be notified through mail when the price drops!'});

    }
    render() {
        return (
            <div >  
                <h1 className='white f1 courier'>AMAZON PRICE TRACKER</h1>
                <div>
                    <input onChange={this.onUrlChange} className='f4 pa1 center w-40 bg-silver br-pill' type='url' placeholder='  enter the amazon url of the product'/><br></br>
                    <input onChange={this.onPriceChange}  className='f4 pa1 mt3  w-40 bg-silver br-pill' type='number' placeholder=' enter the price below which you want that product'/><br></br>
                    <input onChange={this.onEmailChange}  className='f4 pa1 mt3  w-30 bg-silver br-pill' type='email' placeholder='  your email id'/><br></br>
                    <button onClick={this.onNotifyMe} className='b  w-20 grow mt3 input-reset f4 link pa2 ph3 pv2 dib ba white bg-transparent consolas br4'>Notify Me!</button>
                
            </div>
        <h1 className='red f3 calisto'>{this.state.text}</h1>
        
        </div>
        )

    }
   

}

export default Form;