
import Footer from '../Footer';
import About from './about';
import Header from './Header';
import Profit from './Profit';
import Start from './Start';
import Taxes from './Taxes';

function Home() {
  return(
    <div>
        <Header/>
        <Profit/>
        <About/>
        <Start/>
        <Taxes/>
        <Footer/>
    </div>
    

  );
}

export default Home