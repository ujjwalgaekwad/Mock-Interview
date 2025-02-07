import Container from "@/components/Container"
import Footer from "@/components/Footer"
import Header from "@/components/Header"
import { Outlet } from "react-router"

function MainLayout() {
    return (
        <div>
            <Header />
            <Container>
                <main>
                    <Outlet />
                </main>
            </Container>
            <Footer />
        </div>
    )
}

export default MainLayout
