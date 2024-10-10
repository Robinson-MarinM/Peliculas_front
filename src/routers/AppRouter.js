import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Footer from '../components/common/Footer';
import NavBar from '../components/common/NavBar';
import Media from '../components/medias/Media';
import NotFound from '../components/common/NotFound';
import GestionMedia from '../components/medias/GestionMedia';
import Generos from '../components/generos/Generos';
import Productoras from '../components/productoras/Productoras';
import Tipos from '../components/tipos/Tipos';
import Directores from '../components/directores/Directores';
import AdminGeneros from '../components/generos/adminGeneros';

export default function AppRouter() {

    const TITLE = 'Peliculas IUD'

    return (
        <>
            <NavBar title={TITLE} />

            <main className='container'>
                <Routes>
                    <Route path="/" element={<Media />} />
                    <Route path="/generos" element={<Generos />} />
                    <Route path="/directores" element={<Directores />} />
                    <Route path="/productoras" element={<Productoras />} />
                    <Route path="/tipos" element={<Tipos />} />
                    <Route path="/medias" element={<Media />} />
                    <Route path="*" element={<NotFound />} />
                    <Route path="/generos/create" element={<AdminGeneros />} />
                    <Route path="/medias/create" element={<GestionMedia />} />
                </Routes>
            </main>


            <Footer />
        </>
    )
}
