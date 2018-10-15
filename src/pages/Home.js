import React, {Component} from "react"
import {Link} from 'react-router-dom'
import Footer from '../components/Footer'
import List from '../components/List'
class Home extends React.Component{
    constructor(){
        super()
        this.state={
            arrList:[1,2,3]
        }
    }
    render(){
        return(
           <div className="app">
                <div className="content">
                <div>
                    <List arrList={this.state.arrList} />
                </div>
                </div>
                <div className="footer">
                <Footer/>
                </div>
           </div>
        )
    }
}
export default Home;