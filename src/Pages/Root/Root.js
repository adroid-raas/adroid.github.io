import { Outlet } from "react-router-dom";
import Header from "../../Components/Header/Header";
import Footer from "../../Components/Footer/Footer";

export const Root = () => {
    return (
        <>
            <Header />
                <div className="content-main">
                    <Outlet />
                </div>
            <Footer />
        </>
    )
}
