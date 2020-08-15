const addMovieBtn=document.getElementById('add-movie-btn');
const searchBtn=document.getElementById('search-btn');

const movie=[];


const renderMovie=(filteredName='') =>{

const movieList=document.getElementById('movie-list');

if (movie.length===0){
  movieList.classList.remove('visible');
  return;
}
else{
  movieList.classList.add('visible');
}


movieList.innerHTML='';

const filterdMoviesf=!filteredName ? movie : movie.filter(
    movies => movies.info.title.includes(filteredName))

filterdMoviesf.forEach((movie) =>{
  const movieEl= document.createElement('li');
let text=movie.info.title;
for (const key in movie.info){
  if (key!=='title'){

    text=text+`${key}:${movie.info[key]}`;
  }
}

  movieEl.textContent= text;
  movieList.append(movieEl);
});

}

  const addMovieHandler=()=>{
  const title=document.getElementById('title').value;
  const extraName=document.getElementById('extra-name').value;
  const extraValue=document.getElementById('extra-value').value;


  if (title.trim()==='' || extraValue.trim()==='' || extraName===''){

    return;
  }

  const newMovies={
    info:{

      title: title,
      [extraName]:extraValue
    },
    id:Math.random()
  }
  movie.push(newMovies);
  // console.log(movie)
  renderMovie();

};
const filtredMovie= () =>{
const filteredMovies= document.getElementById('filter-title').value;
renderMovie(filteredMovies)  ;
}

searchBtn.addEventListener('click',filtredMovie);
addMovieBtn.addEventListener('click',addMovieHandler)
