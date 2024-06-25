
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

import AllContant from './AllContant';
import ReactRouter from './ReactRouter';



function App() {


  window.onscroll = function () {
    if (window.scrollY > 0) {
      document.getElementById("nav-fix-scrol").classList.add("scroll-nav")

    } else {
      document.getElementById("nav-fix-scrol").classList.remove("scroll-nav")


    }
  }



  return (
    <>

      <ReactRouter />

    </>
  );
}

export default App;
