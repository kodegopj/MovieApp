import React, { useEffect,useRef, useState } from 'react'
import { HiChevronLeft, HiChevronRight } from 'react-icons/hi2'

const screenWidth=window.innerWidth;
function MovieLatest() {

  const [genreList,setGenreList] = useState ([]) 
  const elementRef=useRef();


  const getGenre = ()=>{
    fetch("https://api.themoviedb.org/3/discover/movie?api_key=58e18831c19d2142fcbb0660ac342808")
    .then(res => res.json())
    .then(json => setGenreList(json.results))
  }

  useEffect(()=>{
    getGenre()
  },[])


  console.log('genreList')

  const sliderRight=(element)=>{
    element.scrollLeft+=screenWidth-110
  }
  const sliderLeft=(element)=>{
    element.scrollLeft-=screenWidth-110
  }


  return (
  <div>
    <HiChevronLeft className={'hidden md:block text-white text-[30px] absolute mx-8 mt-[150px] cursor-pointer'} onClick={()=>sliderLeft(elementRef.current)}/>
    <HiChevronRight className={'hidden md:block text-white text-[30px] absolute mx-8 mt-[150px] cursor-pointer right-0'} onClick={()=>sliderRight(elementRef.current)}/>
      <div className={'flex overflow-x-auto  scrollbar-hide  px-8 md:px-16  gap-2 md:gap-5 p-2 scroll-smooth '}  ref={elementRef}>
      {genreList.map((movie)=>(
        <img src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} className={'flex w-[160px] md:w-[180px] lg:w-[200px]  border-[2px] border-gray-600 rounded-lg '} /> 
      ))}
    </div>
  </div>
  )
}

export default MovieLatest