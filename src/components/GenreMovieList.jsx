// import React, { useEffect, useState } from 'react'

// function GenreMovieList() {

//     const genre= [
//         {
//         "id": 28,
//         "name": "Action"
//         },
//         {
//         "id": 12,
//         "name": "Adventure"
//         },
//         {
//         "id": 16,
//         "name": "Animation"
//         },
//         {
//         "id": 35,
//         "name": "Comedy"
//         },
//         {
//         "id": 80,
//         "name": "Crime"
//         },
//         {
//         "id": 99,
//         "name": "Documentary"
//         },
//         {
//         "id": 18,
//         "name": "Drama"
//         },
//         {
//         "id": 10751,
//         "name": "Family"
//         },
//         {
//         "id": 14,
//         "name": "Fantasy"
//         },
//         {
//         "id": 36,
//         "name": "History"
//         },
//         {
//         "id": 27,
//         "name": "Horror"
//         },
//         {
//         "id": 10402,
//         "name": "Music"
//         },
//         {
//         "id": 9648,
//         "name": "Mystery"
//         },
//         {
//         "id": 10749,
//         "name": "Romance"
//         },
//         {
//         "id": 878,
//         "name": "Science Fiction"
//         },
//         {
//         "id": 10770,
//         "name": "TV Movie"
//         },
//         {
//         "id": 53,
//         "name": "Thriller"
//         },
//         {
//         "id": 10752,
//         "name": "War"
//         },
//         {
//         "id": 37,
//         "name": "Western"
//         }
    
//     ]


//     const [getList,setGetList] = useState([])

//     const getGenreList = ()=>{
//         fetch("https://api.themoviedb.org/3/genre/movie/list?api_key=58e18831c19d2142fcbb0660ac342808")
//         .then(res => res.json())
//         .then(json => setGetList(json.results))
//     }

//     useEffect(()=>{
//         getGenreList()
//     },[])

//     console.log('getList')


//   return (
//     <div className={'flex text-white text-[20px] p-2 px-5 md:px-16 border-gray-600 rounded border-[2px]'}>
//         <div className={'pr-4 p-2 px-5 md:px-16 border-gray-600 rounded border-[2px'}>
//           {genre.map((item)=>(
//              <h2>{item.name}</h2>
//            ))}
//         </div>
//     </div>
//   )
// }

// export default GenreMovieList


import React from 'react'

function GenreMovieList() {
  return (

    <div className={''}>
      <div className={'text-white text-[20px] md:text-[25px] sm:text-[20px] font-bold  gap-2 md:gap-5 p-2 px-5 md:px-16'}>
        MOVIE GENRE
      </div>
      {/* <div className={'flex-wrap justify-evenly w-[1440px]'}>
        <button className={'mx-5 text-white bg-blue-900 '}>
          ACTION
        </button>
        <button className={'mx-5 text-white bg-blue-900 '}>
          ACTION
        </button>
        <button className={'mx-5 text-white bg-blue-900 '}>
          ACTION
        </button>
        <button className={'mx-5 text-white bg-blue-900 '}>
          ACTION
        </button>
        <button className={'mx-5 text-white bg-blue-900 '}>
          ACTION
        </button>
        <button className={'mx-5 text-white bg-blue-900 '}>
          ACTION
        </button>
        <button className={'mx-5 text-white bg-blue-900 mt-[20px] '}>
          ACTION
        </button>
        <button className={'mx-5 text-white bg-blue-900 '}>
          ACTION
        </button>
        <button className={'mx-5 text-white bg-blue-900 '}>
          ACTION
        </button>
        <button className={'mx-5 text-white bg-blue-900 '}>
          ACTION
        </button>
        <button className={'mx-5 text-white bg-blue-900 '}>
          ACTION
        </button>
        <button className={'mx-5 text-white bg-blue-900 '}>
          ACTION
        </button>
        <button className={'mx-5 text-white bg-blue-900 '}>
          ACTION
        </button>
        <button className={'mx-5 text-white bg-blue-900 '}>
          ACTION
        </button>
        <button className={'mx-5 text-white bg-blue-900 '}>
          ACTION
        </button>
        <button className={'mx-5 text-white bg-blue-900 '}>
          ACTION
        </button>
        <button className={'mx-5 text-white bg-blue-900 '}>
          ACTION
        </button>
        <button className={'mx-5 text-white bg-blue-900 '}>
          ACTION
        </button>
        <button className={'mx-5 text-white bg-blue-900 '}>
          ACTION
        </button>
        <button className={'mx-5 text-white bg-blue-900 '}>
          ACTION
        </button>


      </div> */}
      <div className={'text-white px-5 flex justify-center h-[100px] align-middle mt-[20px] '}>
       Center Code Copyrights 2023 -All Rights Reserved
      </div>
    </div>    
  

  )
}

export default GenreMovieList