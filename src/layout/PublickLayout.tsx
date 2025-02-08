import Container from "@/components/Container"
import Footer from "@/components/Footer"
import Header from "@/components/Header"

import { Outlet } from "react-router-dom"

function PublickLayout() {
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

export default PublickLayout
