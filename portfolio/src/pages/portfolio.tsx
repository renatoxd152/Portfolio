import React from "react";
import { Nav } from "../components/nav";
import { About } from "./about/about";
import { Contact } from "./contact/contact";
import { Home } from "./home/home";
import { Projects } from "./projetos/projects";

export const Portfolio:React.FC = ()=>
{
    return(
        <>
            <Nav/>
            <Home/>
            <About/>
            <Projects/>
            <Contact/>
        </>
    )
}