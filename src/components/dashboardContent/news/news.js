import Slider from "react-slick"

function SampleNextArrow(props) {
    const { className, style, onClick } = props;
    return (
      <div
        className={className}
        style={{ ...style ,display: "block", background: "black" ,borderRadius:"50%"}}
        onClick={onClick}
      />
    );
  }
  
  function SamplePrevArrow(props) {
    const { className, style, onClick } = props;
    return (
      <div
        className={className}
        style={{ ...style, display: "block", background: "black",borderRadius:"50%" }}
        onClick={onClick}
      />
    );
  }
var settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 4,
    swipeToSlide: true,
    cssEase: "linear",
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
    responsive:
        [
            {
                breakpoint: 400,
                settings: {
                  slidesToShow: 1,
                  slidesToScroll:1
                },
              },
            {
              breakpoint: 800,
              settings: {
                slidesToShow: 2,
                slidesToScroll:2
              },
            },
            {
              breakpoint: 1150,
              settings: {
                slidesToShow: 3,
                slidesToScroll:3
              },
            },
            {
              breakpoint: 1300,
              settings: {
                slidesToShow: 4,
                slidesToScroll:4
              },
            },
            ]
};
const News = () => {
    return (
        <div className="flex justify-center">
        <div className="news mt-5 w-11/12">
            <h2>
                TIN TỨC HỮU ÍCH
            </h2>
            <Slider {...settings}>
                    <div className="news-card">
                        <img src="	https://kika.vn/wp-content/uploads/2023/11/sofa-cong-2m4-03.jpg" alt="news" />
                        <h6>10 Mẫu Ghế Sofa 2m4 Cao Cấp, Sang Trọng Cho Phòng Khách</h6>
                        <div className="is-divider"></div>
                        <p>
                            Mẫu ghế sofa 2m4 được sử dụng phổ biến tại phòng khách vừa và rộng. Sản phẩm này thường được thiết kế 3 – 4...</p>
                        <a href="#">
                            Xem thêm
                        </a>
                    </div>
                    <div className="news-card">
                        <img src="	https://kika.vn/wp-content/uploads/2023/11/ghe-sofa-dep-SF315.jpg" alt="news" />
                        <h6>10 Mẫu Ghế Sofa 2m4 Cao Cấp, Sang Trọng Cho Phòng Khách</h6>
                        <div className="is-divider"></div>
                        <p>
                            Mẫu ghế sofa 2m4 được sử dụng phổ biến tại phòng khách vừa và rộng. Sản phẩm này thường được thiết kế 3 – 4...</p>
                        <a href="#">
                            Xem thêm
                        </a>
                    </div>
                    <div className="news-card">
                        <img src="	https://kika.vn/wp-content/uploads/2023/11/sofa-doi-1m6.jpg" alt="news" />
                        <h6>10 Mẫu Ghế Sofa 2m4 Cao Cấp, Sang Trọng Cho Phòng Khách</h6>
                        <div className="is-divider"></div>
                        <p>
                            Mẫu ghế sofa 2m4 được sử dụng phổ biến tại phòng khách vừa và rộng. Sản phẩm này thường được thiết kế 3 – 4...</p>
                        <a href="#">
                            Xem thêm
                        </a>
                    </div>
                    <div className="news-card">
                        <img src="	https://kika.vn/wp-content/uploads/2023/11/ghe-an-louis-09.jpeg" alt="news" />
                        <h6>10 Mẫu Ghế Sofa 2m4 Cao Cấp, Sang Trọng Cho Phòng Khách</h6>
                        <div className="is-divider"></div>
                        <p>
                            Mẫu ghế sofa 2m4 được sử dụng phổ biến tại phòng khách vừa và rộng. Sản phẩm này thường được thiết kế 3 – 4...</p>
                        <a href="#">
                            Xem thêm
                        </a>
                    </div>
                    <div className="news-card">
                        <img src="	https://kika.vn/wp-content/uploads/2023/11/mau-giuong-tang-bang-sat-dep-08.jpg" alt="news" />
                        <h6>10 Mẫu Ghế Sofa 2m4 Cao Cấp, Sang Trọng Cho Phòng Khách</h6>
                        <div className="is-divider"></div>
                        <p>
                            Mẫu ghế sofa 2m4 được sử dụng phổ biến tại phòng khách vừa và rộng. Sản phẩm này thường được thiết kế 3 – 4...</p>
                        <a href="#">
                            Xem thêm
                        </a>
                    </div>
                    <div className="news-card">
                        <img src="https://kika.vn/wp-content/uploads/2023/11/ghe-an-tan-co-dien.jpg" alt="news" />
                        <h6>10 Mẫu Ghế Sofa 2m4 Cao Cấp, Sang Trọng Cho Phòng Khách</h6>
                        <div className="is-divider"></div>
                        <p>
                            Mẫu ghế sofa 2m4 được sử dụng phổ biến tại phòng khách vừa và rộng. Sản phẩm này thường được thiết kế 3 – 4...</p>
                        <a href="#">
                            Xem thêm
                        </a>
                    </div>
                    <div className="news-card">
                        <img src="https://kika.vn/wp-content/uploads/2023/11/ghe-an-bang-go-08.jpg" alt="news" />
                        <h6>10 Mẫu Ghế Sofa 2m4 Cao Cấp, Sang Trọng Cho Phòng Khách</h6>
                        <div className="is-divider"></div>
                        <p>
                            Mẫu ghế sofa 2m4 được sử dụng phổ biến tại phòng khách vừa và rộng. Sản phẩm này thường được thiết kế 3 – 4...</p>
                        <a href="#">
                            Xem thêm
                        </a>
                    </div>
                    <div className="news-card">
                        <img src="	https://kika.vn/wp-content/uploads/2023/11/ban-tra-inox-dep-01.jpg" alt="news" />
                        <h6>10 Mẫu Ghế Sofa 2m4 Cao Cấp, Sang Trọng Cho Phòng Khách</h6>
                        <div className="is-divider"></div>
                        <p>
                            Mẫu ghế sofa 2m4 được sử dụng phổ biến tại phòng khách vừa và rộng. Sản phẩm này thường được thiết kế 3 – 4...</p>
                        <a href="#">
                            Xem thêm
                        </a>
                    </div>
            </Slider>
        </div>
        </div>
    )
}
export default News 