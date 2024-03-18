import { Component } from "react";

const Divider = () => {
    return (
      <div className="flex items-center">
        <div className="flex-1 h-px bg-gray-300"></div>
        <span className="mx-4 text-gray-400">|</span>
        <div className="flex-1 h-px bg-gray-300"></div>
      </div>
    );
  };

class TopHeader extends Component{
    render(){
        return(
            <div className="header-top">
                    <a href="#">Giới thiệu</a>
                    <Divider/>
                    <a href="#">Liên hệ</a>

            </div>
        )
    }
}
export default TopHeader