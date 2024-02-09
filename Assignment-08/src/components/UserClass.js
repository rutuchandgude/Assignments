import React from "react";

class UserClass extends React.Component{
    constructor(props){
        super(props);
        console.log("Child Constructor");

     this.state = { };
    }

    componentDidMount(){
        console.log("Child Component Did Mount");
        //API call
    }
    render(){
        const {name , location} = this.props;

        // console.log(this.props.name+ "Child Render");

        return(
            <div className="user-card">
           
            <h2>Name:{name}</h2>
            <h3>Location:{location}</h3>
            <h4>Contact:@rutuchandgude</h4>
            </div>
        );
    }
}
export default UserClass;