let Popular = document.getElementById('Popular');



// Get Page1

// // Get All Popular Movies
let arrPopular = []; 
async function GetAllPopularMovies()
{
 
  let response = await fetch(`https://api.themoviedb.org/3/movie/popular?api_key=cfc56e133f000c4de60971748c1a9804&page=1`);
  let finallData = await response.json();
  arrPopular = finallData.results;

  DisplayPageOnePopular();  

}
GetAllPopularMovies();

// Display Page One From Popular Movies List
function DisplayPageOnePopular(){
  let cartona = ``;
  window.scroll({top:0,behavior:'smooth'});
   for(let i = 0; i < arrPopular.length; i++)
   {
    cartona+=`
   <div class="col-md-4">
            <div class="inner">
              <!-- Poster Film -->
              <img onclick='GetAPIForFilmDetails(${arrPopular[i].id})' src="https://image.tmdb.org/t/p/w500/${arrPopular[i].poster_path}" alt="movie" class="w-100  rounded-5">
              <div class="Details">
                  <!-- Header Content1 -->
             <div class="header-details d-flex my-3 p-2 text-warning justify-content-between">
              <h4 class="fw-bold fst-italic">Title</h4>
              <h4 class="fw-bold fst-italic">Original Title</h4>
             </div>
             <!-- Content -->
              <div class="content fs-5 p-2 my-1 d-flex justify-content-between">
              <!-- Title Film -->
              <p class="fw-semibold">${arrPopular[i].title}</p>
              <!-- Original Title Film -->
              <p class="fw-semibold">${arrPopular[i].original_title}</p>
              </div>
              </div>
             
            
            </div>
          </div>

      
    `;
   }
   Popular.innerHTML = cartona;

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
  document.getElementsByTagName('footer')[0].classList.replace('d-block','d-none');
  window.scroll({top:0,behavior:'smooth'})
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

    Popular.innerHTML = cartona2;
}



// Get Page2
// // Get All Popular Movies
let arrPopular2 = []; 
async function GetPagePopular2()
{
 
  let response = await fetch(`https://api.themoviedb.org/3/movie/popular?api_key=cfc56e133f000c4de60971748c1a9804&page=2`);
  let finallData = await response.json();
  arrPopular2 = finallData.results;

  DisplayPageTowPopular();  

}

// Display Page One From Popular Movies List
function  DisplayPageTowPopular(){
  let cartona = ``;
  window.scroll({top:0,behavior:'smooth'});
   for(let i = 0; i < arrPopular2.length; i++)
   {
    cartona+=`
   <div class="col-md-4">
            <div class="inner">
              <!-- Poster Film -->
              <img onclick='GetAPIForFilmDetails(${arrPopular2[i].id})' src="https://image.tmdb.org/t/p/w500/${arrPopular2[i].poster_path}" alt="movie" class="w-100  rounded-5">
              <div class="Details">
                  <!-- Header Content1 -->
             <div class="header-details d-flex my-3 p-2 text-warning justify-content-between">
              <h4 class="fw-bold fst-italic">Title</h4>
              <h4 class="fw-bold fst-italic">Original Title</h4>
             </div>
             <!-- Content -->
              <div class="content fs-5 p-2 my-1 d-flex justify-content-between">
              <!-- Title Film -->
              <p class="fw-semibold">${arrPopular2[i].title}</p>
              <!-- Original Title Film -->
              <p class="fw-semibold">${arrPopular2[i].original_title}</p>
              </div>
              </div>
             
            
            </div>
          </div>

      
    `;
   }
   Popular.innerHTML = cartona;

}

// Get Page3
// // Get All Popular Movies
let arrPopular3 = []; 
async function GetPagePopular3()
{
 
  let response = await fetch(`https://api.themoviedb.org/3/movie/popular?api_key=cfc56e133f000c4de60971748c1a9804&page=3`);
  let finallData = await response.json();
  arrPopular3 = finallData.results;

  DisplayPageThreePopular();  

}

// Display Page One From Popular Movies List
function  DisplayPageThreePopular(){
  window.scroll({top:0,behavior:'smooth'});
  let cartona = ``;
   for(let i = 0; i < arrPopular3.length; i++)
   {
    cartona+=`
   <div class="col-md-4">
            <div class="inner">
              <!-- Poster Film -->
              <img onclick='GetAPIForFilmDetails(${arrPopular3[i].id})' src="https://image.tmdb.org/t/p/w500/${arrPopular3[i].poster_path}" alt="movie" class="w-100  rounded-5">
              <div class="Details">
                  <!-- Header Content1 -->
             <div class="header-details d-flex my-3 p-2 text-warning justify-content-between">
              <h4 class="fw-bold fst-italic">Title</h4>
              <h4 class="fw-bold fst-italic">Original Title</h4>
             </div>
             <!-- Content -->
              <div class="content fs-5 p-2 my-1 d-flex justify-content-between">
              <!-- Title Film -->
              <p class="fw-semibold">${arrPopular3[i].title}</p>
              <!-- Original Title Film -->
              <p class="fw-semibold">${arrPopular3[i].original_title}</p>
              </div>
              </div>
             
            
            </div>
          </div>

      
    `;
   }
   Popular.innerHTML = cartona;

}


