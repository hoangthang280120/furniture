import MyBreadcrumb from "../components/breadcrumb/breadcrumb"
import Contact from "../components/contact/contact"
import Footer from "../components/footer/footer"
import Header from "../components/header/Header.components"
import MenuContent from "../components/menuContent/menuContent"

const Menu =()=>{
    return(
        <div>
            <Header/>
            <MyBreadcrumb thisPage="Menu"/>
            <MenuContent/>
            <Footer/>
            <Contact/>
        </div>
    )
}
export default Menu