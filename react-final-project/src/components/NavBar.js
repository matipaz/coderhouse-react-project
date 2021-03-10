import React from 'react'
import {CartdWidget} from './CartWidget'

function NavBar()   {
    return (
        <>
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
                <a className="navbar-brand" href="#">Game store</a>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav">     
                        <li className="nav-item">
                            <a className="nav-link active" href="#">Home <span className="sr-only">(current)</span></a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">PC</a>
                        </li>
                        <li class="nav-item dropdown">
                            <a class="nav-link dropdown-toggle" href="#" id="navbarDropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                            Playstation
                            </a>
                            <div class="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                            <a class="dropdown-item" href="#">Playstation 5</a>
                            <a class="dropdown-item" href="#">Playstation 4</a>
                            <a class="dropdown-item" href="#">Playstation 3</a>
                            </div>
                        </li>
                        <li class="nav-item dropdown">
                            <a class="nav-link dropdown-toggle" href="#" id="navbarDropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                            Xbox
                            </a>
                            <div class="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                            <a class="dropdown-item" href="#">Xbox Series</a>
                            <a class="dropdown-item" href="#">Xbox One</a>
                            <a class="dropdown-item" href="#">Xbox 360</a>
                            </div>
                        </li>
                        <li class="nav-item dropdown">
                            <a class="nav-link dropdown-toggle" href="#" id="navbarDropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                            Nintendo
                            </a>
                            <div class="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                            <a class="dropdown-item" href="#">Nintendo Switch</a>
                            <a class="dropdown-item" href="#">Nintendo DS</a>
                            <a class="dropdown-item" href="#">Nintendo 3DS</a>
                            </div>
                        </li>
                    </ul>
                    <ul className="nav navbar-nav ml-auto" >
                        <li className="nav-item">
                            <CartdWidget/>
                        </li>
                    </ul>

                </div>
            </nav>
        </>
    );
  }
   
export default NavBar