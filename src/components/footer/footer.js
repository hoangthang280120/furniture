import LocationOnIcon from '@mui/icons-material/LocationOn';
import ContactPhoneIcon from '@mui/icons-material/ContactPhone';
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';
const Footer = () => {
    return (
        <div className="grid grid-cols-4 gap-5 p-3 footer mt-5">
            <div className="">
                <img src="https://static.vecteezy.com/system/resources/thumbnails/007/410/276/small/furniture-logo-design-vector.jpg"
                    alt="icon" />
                <p className="mt-3"><span>Nội thất Furniture </span>là thương hiệu chuyên phân phối các dòng sản phẩm nội thất cao cấp như ghế sofa,
                    bàn ăn, giường ngủ, bàn trang điểm. Chúng tôi luôn định hướng tập trung vào chất lượng sản phẩm cũng như quy
                    trình bán hàng nhằm mang lại trải nghiệm chuyên nghiệp, tiện nghi cho quý khách hàng. </p>
                <img className="w-1/2 mt-3" src="https://kika.vn/wp-content/uploads/2022/07/thong-bao-website-voi-bo-cong-thuong_grande.png" alt="note" />
                <img className="mt-3" src="https://images.dmca.com/Badges/dmca_protected_sml_120n.png?ID=fb44403b-8192-4c72-8c6f-eebc4dd3fc89" alt="protect" />
            </div>
            <div>
                <h3>HỆ THỐNG SHOWROOM</h3>
                <div>
                <p><LocationOnIcon/> Số 000 Quang Trung, Hà Đông, Hà Nội</p>
                <p><LocationOnIcon/>  Số 000 Cộng Hòa, Quận Tân Bình, TP. Hồ Chí Minh</p>
                <p><LocationOnIcon/>  Số 000 Đường Nguyễn Tất Thành, TP. Đà Nẵng</p>
                <p><LocationOnIcon/>  Xưởng sản xuất: KCN Bình Phú, Thạch Thất, Hà Nội</p>
                <p><ContactPhoneIcon/>   Hotline tổng đài / Zalo: 000.0000.000</p>
                </div>
            </div>
            <div>
                <h3>DANH MỤC SẢN PHẨM</h3>
                <div>
                <p><KeyboardArrowRightIcon/> Phòng khách</p>
                <p><KeyboardArrowRightIcon/> Phòng bếp			</p>
                <p><KeyboardArrowRightIcon/> Phòng ngủ			</p>
                </div>
            </div>
            <div>
                <h3>CHÍNH SÁCH BÁN HÀNG</h3>
                <div>
                <p><KeyboardArrowRightIcon/> Giới thiệu	</p>
                <p><KeyboardArrowRightIcon/> Liên hệ</p>
                <p><KeyboardArrowRightIcon/> Chính sách đổi trả	</p>
                <p><KeyboardArrowRightIcon/> Chính sách bảo hành				</p>
                <p><KeyboardArrowRightIcon/> Chính sách giao hàng				</p>
                <p><KeyboardArrowRightIcon/> Chính sách thanh toán				</p>
                <div className='flex'>
                    <FacebookIcon className='cursor-pointer mr-3' />
                    <InstagramIcon className='cursor-pointer mr-3'/>
                    <TwitterIcon className='cursor-pointer mr-3'/>
                </div>
                </div>
            </div>
        </div>
    )
}
export default Footer