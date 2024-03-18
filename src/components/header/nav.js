import MenuIcon from '@mui/icons-material/Menu';
import BugReportIcon from '@mui/icons-material/BugReport';
import NewspaperIcon from '@mui/icons-material/Newspaper';
import ConnectWithoutContactIcon from '@mui/icons-material/ConnectWithoutContact';
import HomeIcon from '@mui/icons-material/Home';
import GroupsIcon from '@mui/icons-material/Groups';
import { useDispatch, useSelector } from 'react-redux';
const Nav =()=>{
    const dispatch =useDispatch()
    const { openMenu } = useSelector((reduxData) => reduxData.headerReducer)
    const handleMouseEnter =()=>{
       dispatch({type:"open"})
    }
    const handleMouseLeave =()=>{
        dispatch(
         {type:"close"}
        )
    }
    return(
        <div>
        <div className="navbar grid grid-cols-6 ">
            <a href="/" ><HomeIcon className='mr-3' />Home</a>
            <a onMouseEnter={handleMouseEnter} href="/menu" ><MenuIcon className='mr-3' />Sản phẩm</a>
            <a href="#" ><GroupsIcon className='mr-3'/>Về chúng tôi</a>
            <a href="#" ><BugReportIcon className='mr-3'/>Dự án</a>
            <a href="#" ><NewspaperIcon className='mr-3'/>Blog</a>
            <a href="#" ><ConnectWithoutContactIcon className='mr-3'/>Liên hệ</a>
            
        </div>
        <div onMouseLeave={handleMouseLeave} style={{ display: openMenu == true ? 'flex' : "none" }} className='menu-list flex'>
        <div className='w-1/4 p-4 menu-col'>
            <strong>PHÒNG KHÁCH</strong>
            <hr />
            <ul>
                <li>
                    Bàn cafe
                </li>
                <li>
                    Kệ tivi
                </li>
                <li>
                    Tủ trang trí
                </li>
                <li>
                    Sofa
                </li>
            </ul>
        </div>
        <div className='w-1/4 p-4 menu-col'>
            <strong>PHÒNG BẾP</strong>
            <hr />
            <ul>
                <li>Bàn ăn</li>
                <li>Ghế ăn</li>
                <li></li>
                 </ul>
        </div>
        <div className='w-1/4 p-4 menu-col'>
            <strong>PHÒNG NGỦ</strong>
            <hr />
          <ul>
            <li>
                Giường ngủ
            </li>
            <li>
                Tủ đầu giường
            </li>
            <li>
                Tủ quần áo
            </li>
            <li>
                Bàn trang điểm
            </li>
          </ul>
        </div>
        <div className='w-1/4 p-4 menu-col'>
            <img className='img-menu' src='https://kika.vn/wp-content/uploads/2023/11/ghe-sofa-dep-SF315.jpg'></img>
        </div>
    </div>
    </div>
    )
}
export default Nav