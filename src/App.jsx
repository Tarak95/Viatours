
import './App.css'
import Articles from './Components/Articles/Articles'
import Banner from './Components/Banner/Banner'
import Boking from './Components/Boking/Boking'
import Destinations from './Components/Destinations/Destinations'
import Favorite from './Components/Favorite/Favorite'
import Last1 from './Components/Last1/Last1'
import Last2 from './Components/Last1/Last2'
import Navbar from './Components/Navbar/Navbar'
import Popular from './Components/Popular/Popular'
import Reviews from './Components/Reviews/Reviews'
import Tours from './Components/Tours/Tours'
import Tourz from './Components/Tourz/Tourz'
import Trending from './Components/Trending/Trending'

function App() {


  return (
   <>
   

   <div>
     

     <Navbar/>
     <Banner/>
     <Tourz/>
     <Destinations/>
     <Tours/>
     <Favorite/>
     <Popular/>
     <Trending/>
     <Reviews/>
     <Boking/>
     <Articles/>
     <Last1/>
     <Last2/>

   </div>

   </>
  )
}

export default App
