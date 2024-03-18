import React from "react";
import Slider from "react-slick"
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
var settings = {
    autoplay:true,
    autoplaySpeed:3000,
    dots:true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    cssEase: "linear"
};
const HomepageCarousel = () => {
    return (
        <div className="">
            <Slider {...settings} id="crsl" >
                <div>
                   <img src="https://kika.vn/wp-content/uploads/2022/08/noi-that-dep-phong-khach.jpg" alt="crsl" className="img-crsl"/>
                </div>
                <div>
                   <img src="https://png.pngtree.com/thumb_back/fh260/back_pic/03/69/42/6857b4809a1f944.jpg" alt="crsl" className="img-crsl"/>
                </div>
                <div>
                   <img src="https://wallpapercave.com/wp/wp9625940.jpg" alt="crsl" className="img-crsl"/>
                </div>
                <div>
                   <img src="https://wallpapercave.com/wp/wp9625933.jpg" alt="crsl" className="img-crsl"/>
                </div>
                
            </Slider>
        </div>
    )
}
export default HomepageCarousel