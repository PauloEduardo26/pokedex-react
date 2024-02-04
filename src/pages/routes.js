import { Route, Routes, BrowserRouter } from "react-router-dom";
import { Menu } from './menu'
import { PokemonPage } from "./pokemonPage";

const AppRoutes = () => (
    <BrowserRouter>
        <Routes>
            <Route exact path='/' element={<Menu />}/>
            <Route exact path='/pokemonPage' element={<PokemonPage />}/>
        </Routes>
    </BrowserRouter>
)
export { AppRoutes }