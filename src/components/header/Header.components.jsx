import { Component } from "react";
import ContentHeader from "./contentHeader";
import Nav from "./nav";

class Header extends Component{
    render(){
        return(
            <div className="header">
                <ContentHeader/>
                <Nav/>
            </div>
        )
    }
}
export default Header