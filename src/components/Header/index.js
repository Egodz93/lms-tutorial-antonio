import {Link} from "react-router-dom";
import logo from '../../assets/images/logo.webp';
import Button from '@mui/material/Button';
import { IoMenu } from "react-icons/io5";
const Header=()=>{
    return(
        <>
            <header className="d-flex align-items-center"> 
                <div className="container-fluid w-100">
                    <div className="row d-flex align-items-center ">
                        
                        <div className="col-3">
                            <Link to={'/'} className="d-flex align-items-center logo">
                                <img src={logo} alt=""/>
                                <span className="ml-2">MyEGO</span>
                            </Link>
                        </div>

                        <div className="col-3 d-flex align-items-center">
                            <Button className="rounded-circle"><IoMenu/></Button>
                        
                        </div>
                    </div>
                </div>
            </header>
        </>
    );
}

export default Header;