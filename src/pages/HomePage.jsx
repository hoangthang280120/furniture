import Contact from "../components/contact/contact"
import DashboardContent from "../components/dashboardContent/dashboardContent"
import Footer from "../components/footer/footer"
import Header from "../components/header/Header.components"

const HomePage = () => {
    return (
        <>
            <Header></Header>
            <DashboardContent/>   
            <Footer/>   
            <Contact/>
        </>
    )
}
export default HomePage