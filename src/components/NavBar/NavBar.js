import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import "./NavBar.css"
import logo from "../../assets/logo.png"

const NavBar = ()=>{
  return(
    <AppBar position="static" className= "Navbar-Main">
        <Toolbar>
          <Typography variant="h6">
          <div className="logo">
          <img  src= {logo} alt={'logoMain'}/>
          </div>
          </Typography>
          <ul className="Lista-NavBar">
        <li> <Button color="inherit">Home</Button></li> 
        <li> <Button color="inherit">Productos</Button></li>  
        <li> <Button color="inherit">Contacto</Button></li> 
        </ul>
        <div className="cart-button">
           </div>
        </Toolbar>
      </AppBar>
  )
} 
export default NavBar;