import React, {Component} from "react"
class Detail extends React.Component{
    constructor(){
        super();
        this.state={
            id:''
        }
    }
    render(){
        return(
            <div className="app">
                <div className="content">
                    <p>详情页-{this.state.id}</p>
                </div>
            </div>
        )
    }
    componentDidMount(){
        var $id=this.props.match.params.id
        //console.log(this.props.match.params.id);
        this.setState(
            {
                id:$id
            }
        )
    }
}
export default Detail;