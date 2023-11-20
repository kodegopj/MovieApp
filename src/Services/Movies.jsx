// import React, { useEffect, useRef, useState } from 'react'
// import { HiChevronLeft, HiChevronRight } from 'react-icons/hi2'

// const screenWidth=window.innerWidth;
// function Movies() {

//   const [movieList,setMovieList] = useState([])
//   const elementRef=useRef();


//     const getMovies = ()=>{
//         fetch("https://api.themoviedb.org/3/discover/movie?api_key=58e18831c19d2142fcbb0660ac342808")
//         .then(res => res.json())
//         .then(json => setMovieList(json.results))
//     }

//     useEffect(()=>{
//         getMovies()
//     },[])


//     console.log('movieList')


//     const sliderRight=(element)=>{
//       element.scrollLeft+=screenWidth-110
//     }
//     const sliderLeft=(element)=>{
//       element.scrollLeft-=screenWidth-110
//     }
    
//   return (
//     <div>
//       <HiChevronLeft className={'hidden md:block text-white text-[30px] absolute mx-8 mt-[150px] cursor-pointer'} onClick={()=>sliderLeft(elementRef.current)}/>
//       <HiChevronRight className={'hidden md:block text-white text-[30px] absolute mx-8 mt-[150px] cursor-pointer right-0'} onClick={()=>sliderRight(elementRef.current)}/>
    
//       <div className={'flex overflow-x-auto w-full px-16 py-4 scrollbar-hide scroll-smooth'} ref={elementRef}>
//         {movieList.map((movie)=>(
//           <img  src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
//           className='min-w-full h-[310px] object-cover 
//           object-left-top mr-5 rounded-md hover:border-[4px] border-gray transition-all duration-100 ease-in '/>
//         ))}
//       </div>
//     </div>
//   )
// }

// export default Movies