import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Header from './components/Header'
// import Movies from './Services/Movies'
import Slider from './components/Slider'
import ProductionHouse from './components/ProductionHouse'
import Movie from './components/Movie'
import Action from './components/Action'
import MovieAction from './components/MovieAction'
import Popular from './components/Popular'
import MovieLatest from './components/MovieLates'
import Latest from './components/Latest'
import GenreMovieList from './components/GenreMovieList'


function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
      <Header/> 

      <Slider/>
      
      <ProductionHouse/>

      <Popular/>

      <Movie/>

      <Latest/>
     
      <MovieAction/>

      <Action/>
 

      <MovieLatest/>

      <GenreMovieList/>
      
    </div>
  )
}

export default App
