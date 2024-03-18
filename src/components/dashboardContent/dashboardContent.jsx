import AboutUs from "./aboutUs/aboutUs"
import HomepageCarousel from "./carousel/homepageCarousel"
import News from "./news/news"
import Propose from "./propose/propose"

const DashboardContent =()=>{
    return(
        <div>
            <HomepageCarousel/>
            <AboutUs/>
            <Propose/>
            <News/>
        </div>
    )
}
export default DashboardContent