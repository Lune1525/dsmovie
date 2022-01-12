import {ReactComponent as Github} from 'assets/img/github.svg';
import './styles.css';


function Navbar () {
    return(
        <header>
        <nav className="container">
          <div className="dsmovie-nav-content">
            <h1>DSMovie</h1>
            <a href="https://github.com/Lune1525">
             <div>
               <Github />
               <p>/devsuperiors</p>
             </div>
           </a>
         </div> 
       </nav>
     </header>
    )

}
export default Navbar;