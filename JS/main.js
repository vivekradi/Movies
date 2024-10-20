let rowData = document.getElementById('rowData');
let SerachTool = document.querySelector('.containg-search-tool');
let home = document.getElementsByTagName('header')[0];
let input = document.getElementById('input');







// Get Api For New Movies
let arr = [{}];
async function GetApiForNewMovies()
{
    let response = await fetch(`https://api.themoviedb.org/3/movie/now_playing?api_key=cfc56e133f000c4de60971748c1a9804&page=1`);
    let finallData = await response.json();
    arr = finallData.results;
    DisplayNewMovies();
}
GetApiForNewMovies();

// Display New Movies
function DisplayNewMovies()
{
    let cartona = ``;
    for(let i = 0; i < arr.length; i++)
    {
        cartona+=`
       <div class="col-md-4">
            <div class="inner">
              <!-- Poster Film -->
              <img onclick='GetAPIForFilmDetails(${arr[i].id})' src="https://image.tmdb.org/t/p/w500/${arr[i].poster_path}" alt="movie" class="w-100  rounded-5">
              <div class="Details">
                  <!-- Header Content1 -->
             <div class="header-details d-flex my-3 p-2 text-warning justify-content-between">
              <h4 class="fw-bold fst-italic">Title</h4>
              <h4 class="fw-bold fst-italic">Original Title</h4>
             </div>
             <!-- Content -->
              <div class="content fs-5 p-2 my-1 d-flex justify-content-between">
              <!-- Title Film -->
              <p class="fw-semibold">${arr[i].title}</p>
              <!-- Original Title Film -->
              <p class="fw-semibold">${arr[i].original_title}</p>
              </div>
              </div>
             
            
            </div>
          </div>

        `;
    }
    rowData.innerHTML = cartona;
}


//  Get API For Film Details
let arr2 = ``;
async function GetAPIForFilmDetails(ID)
{
    let response = await fetch(`https://api.themoviedb.org/3/movie/${ID}?api_key=cfc56e133f000c4de60971748c1a9804`);
    let finallData = await response.json();
    arr2 = finallData; 
    DisplayDetailsFilm();   
}

// Display Details Film
function DisplayDetailsFilm()
{

    // Search Tool Hide
    SerachTool.classList.replace('d-block','d-none');
    document.querySelector('.new-section').classList.replace('py-3','pt-5')
    let cartona2 = ``;
    cartona2 += `
        <div class="col-md-6 animate__animated animate__zoomInDown">
            <div class="inner">
              <!-- Poster Film -->
              <img src="https://image.tmdb.org/t/p/w500/${arr2.poster_path}" alt="movie" class="w-75  rounded-5">
            </div>
        </div>
        <div class="col-md-6 animate__animated animate__zoomInDown">
        <div class="inner">
           <div class="Detail">
                  <!-- Header Content1 -->
                  <div class="header-details animate__animated animate__zoomInDown d-flex my-3 p-2 text-warning justify-content-between">
                      <h4 class="fw-bold fst-italic">Title</h4>
                      <h4 class="fw-bold fst-italic">Original Title</h4>
                  </div>
                  <!-- Content -->
                  <div class="content animate__animated animate__zoomInDown fs-5 p-2 my-1 d-flex justify-content-between">
                      <!-- Title Film -->
                      <p class="fw-semibold">${arr2.title}</p>
                      <!-- Original Title Film -->
                      <p class="fw-semibold">${arr2.original_title}</p>
                  </div>
                  <img src='https://image.tmdb.org/t/p/w500/${arr2.backdrop_path}' alt='poster Movie' class='rounded-5 w-100 my-2'>
                  <div class='py-5 my-2'>
                <p class='mt-3 h2  fs-5 fst-italic fs-5 text-warning'>Original Language<span class='text-info fw-bold px-3 fs-4'>${arr2.original_language}</span></p>
                  <p class='fs-5 text-warning'>OverView<span class='px-3 text-white'>${arr2.overview}</span></p>
                  <p class='h2'>Popularity<span class='px-3 text-info'>${arr2.popularity}</span></p>
                  <p class='h2'>Release Date <span class='px-3 text-info'>${arr2.release_date}</span><p>
                  <p class='h2'>Average Rating<span class='px-3 text-info'>${arr2.vote_average}</span></p>
                  <p class='h2'>Number of Reviewsg<span class='px-3 text-info'>${arr2.vote_count}</span></p>
                  </div>
              </div>
        </div>
        </div>
    `;

    rowData.innerHTML = cartona2;
}

// Function Go To Home
function GoToHome()
{
    GetApiForNewMovies();
    SerachTool.classList.replace('d-none','d-block');
    document.querySelector('.new-section').classList.replace('pt-5','py-3');
}

// Get Movie By Search About it
let arr3 = {};
async function GetMovieBySearchAPI(Movie){
  try{
    let response  = await fetch(`https://api.themoviedb.org/3/search/movie?api_key=cfc56e133f000c4de60971748c1a9804&query=${Movie}`);
    let finallData = await response.json();
    arr3 = finallData.results[0]; 
    DisplayMovieBySearch();
  }
  catch(error)
  {
    window.alert('what You Search About It Not Found');
  }
   
}

// Function Search
btn.addEventListener('click',function(){
    GetMovieBySearchAPI(input.value);
    input.value = ``;
});

// Search By Enter
document.addEventListener('keyup',function(e){
    if(e.key === 'Enter')
    {
     GetMovieBySearchAPI(input.value);
    input.value = ``; 
    }
}) 

// Display Movie By Search

function DisplayMovieBySearch()
{
    let cartona = `

       <div class="col-md-6">
            <div class="inner">
              <!-- Poster Film -->
              <img src="https://image.tmdb.org/t/p/w500/${arr3.poster_path}" alt="movie" class="w-75  rounded-5">
            </div>
        </div>
        <div class="col-md-6">
        <div class="inner">
           <div class="Detail">
                  <!-- Header Content1 -->
                  <div class="header-details d-flex my-3 p-2 text-warning justify-content-between">
                      <h4 class="fw-bold fst-italic">Title</h4>
                      <h4 class="fw-bold fst-italic">Original Title</h4>
                  </div>
                  <!-- Content -->
                  <div class="content fs-5 p-2 my-1 d-flex justify-content-between">
                      <!-- Title Film -->
                      <p class="fw-semibold">${arr3.title}</p>
                      <!-- Original Title Film -->
                      <p class="fw-semibold">${arr3.original_title}</p>
                  </div>
                  <img src='https://image.tmdb.org/t/p/w500/${arr3.backdrop_path}' alt='poster Movie' class='rounded-5 w-100 my-2'>
                  <div class='py-5 my-2'>
                <p class='mt-3 h2  fs-5 fst-italic fs-5 text-warning'>Original Language<span class='text-info fw-bold px-3 fs-4'>${arr3.original_language}</span></p>
                  <p class='fs-5 text-warning'>OverView<span class='px-3 text-white'>${arr3.overview}</span></p>
                  <p class='h2'>Popularity<span class='px-3 text-info'>${arr3.popularity}</span></p>
                  <p class='h2'>Release Date <span class='px-3 text-info'>${arr3.release_date}</span><p>
                  <p class='h2'>Average Rating<span class='px-3 text-info'>${arr3.vote_average}</span></p>
                  <p class='h2'>Number of Reviewsg<span class='px-3 text-info'>${arr3.vote_count}</span></p>
                  </div>
              </div>
        </div>
        </div>
    `;

    rowData.innerHTML = cartona;

}













