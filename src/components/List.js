import React, {Component} from "react"
import { Link } from 'react-router-dom';
class List extends React.Component{
    constructor(){
        super()
        this.state={
            propsArrList:[]
        }
    }
    render(){
        return(
            <ul>
                {this.state.propsArrList.map((item,index)=>{
               return(
                   <li key={index}>
                       <Link to={`/detail/${item}`}>列表-{item}</Link>
                   </li>
               )
           })}
            </ul>
           
        )
    }
    componentDidMount(){
        console.log(this.props.arrList);
        var arrList=this.props.arrList;
        this.setState({
            propsArrList:arrList
        })
      }
}
export default List;