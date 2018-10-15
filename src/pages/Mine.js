import React, {Component} from "react"
import Footer from '../components/Footer'
export default class Mine extends React.Component{
    render(){
        return(
            <div className="app">
            <div className="content">
                <p>我的</p>
            </div>
            <div className="footer">
            <Footer />
            </div>
        </div>
           
        )
    }
}
