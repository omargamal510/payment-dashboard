import React from 'react'
import style from './Navbar.module.css'
import Link from 'next/link'

export default function navbar() {
    return (
        <nav className={`navbar navbar-expand-lg bg-body-tertiary ${style.myNav} `}>
            <div className="container">
                <Link className="navbar-brand" href={"/"}>
                    <span className={`navFakeImage ${style.navFakeImage}`}><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-person-fill" viewBox="0 0 16 16">
                        <path d="M3 14s-1 0-1-1 1-4 6-4 6 3 6 4-1 1-1 1H3Zm5-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z" />
                    </svg></span>
                    <span>Profile

                    </span>


                </Link>

                <div className="" id="navbarSupportedContent">
                    <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                        <li className="nav-item d-block d-lg-block">
                            <Link className="nav-link active" aria-current="page" href={'/checkout'}>
                                <span className='me-2'>Checkout</span>
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-credit-card text-success" viewBox="0 0 16 16">
                                    <path d="M0 4a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V4zm2-1a1 1 0 0 0-1 1v1h14V4a1 1 0 0 0-1-1H2zm13 4H1v5a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V7z" />
                                    <path d="M2 10a1 1 0 0 1 1-1h1a1 1 0 0 1 1 1v1a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1v-1z" />
                                </svg>

                            </Link>
                        </li>

                    </ul>

                </div>
            </div>
        </nav>






    )
}
