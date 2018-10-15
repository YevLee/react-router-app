import React, {Component} from "react"
import Footer from '../components/Footer'
export default class Class extends React.Component{
    render(){
        return(
            <div className="app">
            <div className="content">
                <p>分类页面</p>
            </div>
            <div className="footer">
            <Footer />
            </div>
        </div>
           
        )
    }
}
