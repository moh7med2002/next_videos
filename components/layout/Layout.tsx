"use client";
import {useState, useEffect,ReactNode } from "react";
import Sidebar from "./Sidebar";
import Navbar from "./Navbar";


interface IProps {
    children: ReactNode;
}

const Layout = ({children}:IProps) => {
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);
    


    // Use useEffect to set the initial state based on screen size
    useEffect(() => {
        const mdMediaQuery = window.matchMedia("(min-width: 768px)");

        // Set the initial state based on the media query
        setIsSidebarOpen(mdMediaQuery.matches);

        // Listen for changes in screen size and update the state accordingly
        const handleMediaQueryChange = (e: MediaQueryListEvent) => {
        setIsSidebarOpen(e.matches);
        };

        mdMediaQuery.addEventListener("change", handleMediaQueryChange);

        // Cleanup the event listener when the component unmounts
        return () => {
        mdMediaQuery.removeEventListener("change", handleMediaQueryChange);
        };
    }, []);

    const toggleSidebar = () => {
        setIsSidebarOpen(!isSidebarOpen);
    };

    return (
        <div className="flex">
            {/* Sidebar */}
            <Sidebar isOpen={isSidebarOpen} onClose={toggleSidebar} />

            <div className="flex-1 flex flex-col">
                {/* Navbar */}
                <Navbar onToggle={toggleSidebar} />

                {/* Content */}
                <main className="flex-1 Container">
                    {children}
                </main>
            </div>
        </div>
    );
};

export default Layout;