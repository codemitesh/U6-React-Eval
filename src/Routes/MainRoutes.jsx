import { Route, Routes } from "react-router-dom"
import About from "../components/About"
import Home from "../components/Home"
import { MoviesDashboard } from "../components/MoviesDashboard"
import { SingleMovieDetails } from "../components/SingleMovieDetails"

export const MainRoutes = ()=>{
    return(
        <>
        <Routes>
            <Route path="/" element={<Home/>}></Route>
            <Route path="/about" element={<About />}></Route>
            <Route path="/movies" element={<MoviesDashboard/>}></Route>
            <Route path="/movies/:id" element={<SingleMovieDetails/>}></Route>
        </Routes>
        
        </>
    )
}