import Footer from "./Footer";
import Navbar from "./navbar";

export default function layout({ children }) {
    return (
        <div className="h-screen flex flex-col justify-between">
            <Navbar />
            <main className="mb-auto">
                {children}
            </main>
            <Footer />
        </div>
    )
}