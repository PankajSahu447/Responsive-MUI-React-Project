import Navbar from './components/Navbar'
import Header1 from './components/Header1'
import Header1_1 from './components/Header1-1'
import Header2 from './components/Header2'
import Header2_2 from './components/Header2-2'
import Header3 from './components/Header3'
import Deals from './components/Deals'
import Products from './components/Products'
import Recomended from './components/Recomended'
import Flash from './components/Flash'
import Hotsale from './components/Hotsale'
import Recent from './components/Recent'
import Cards from './components/Cards'
import Footer1 from './components/Footer1'
import Footer2 from './components/Footer2'
import ResponsiveAppBar from './components/ResponsiveNav'
// import Swip from './components/Swiper'



function App() {
  return (
    <>
    <ResponsiveAppBar/>
    {/* <Header1_1 /> */}
    <Header2_2/>
    <Header3/>

    <Deals />
    <Products/>
    <Recomended />
    <Flash />
    <Hotsale />
    <Cards />
    <Recent />
    <Footer1 />
    <Footer2 /> 
    
    

   
    
 
    
    </>
  );
}

export default App;
