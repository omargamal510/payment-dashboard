'use client'
import React, { useState } from 'react'
import style from './Navbar.module.css'
import Link from 'next/link'

export default function navbar() {


    let [navState, setNavState] = useState<boolean>(false)
    let [switchState, setSwitchState] = useState<boolean>(false);

    const navSwitch = () => {
        setNavState(!navState);
    };


    return (



        <>

            <button onClick={navSwitch} className={`${style.navswitch} d-none d-sm-none d-md-block`}>
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-list-ul" viewBox="0 0 16 16">
                    <path fillRule="evenodd" d="M5 11.5a.5.5 0 0 1 .5-.5h9a.5.5 0 0 1 0 1h-9a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h9a.5.5 0 0 1 0 1h-9a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h9a.5.5 0 0 1 0 1h-9a.5.5 0 0 1-.5-.5zm-3 1a1 1 0 1 0 0-2 1 1 0 0 0 0 2zm0 4a1 1 0 1 0 0-2 1 1 0 0 0 0 2zm0 4a1 1 0 1 0 0-2 1 1 0 0 0 0 2z" />
                </svg>
                <span>Menu</span>
            </button>

            <nav className={`${style.myNav} ${navState ? 'active' : ''}`}>

                <button className={`${style.navswitch2} d-none d-sm-none d-md-block`} onClick={navSwitch}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-x" viewBox="0 0 16 16">
                        <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z" />
                    </svg>
                </button>


                <div className={`${style.userdata} d-none d-sm-none d-md-block d-lg-block `}>

                    <div className={`imgdata`}>
                        <span className={`navFakeImage ${style.navFakeImage}  d-flex align-items-center justify-content-center`}>
                            <span>L</span>
                        </span>
                    </div>


                    <div className={`${style.textdata} `}>
                        <p>
                            Leanne Graham
                        </p>
                        <p>Sincere@april.biz</p>
                    </div>


                </div>
                <ul>
                    <li className=''>
                        <Link className={`${style.link}`} href={"/"}>
                            <span><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-person" viewBox="0 0 16 16">
                                <path d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6Zm2-3a2 2 0 1 1-4 0 2 2 0 0 1 4 0Zm4 8c0 1-1 1-1 1H3s-1 0-1-1 1-4 6-4 6 3 6 4Zm-1-.004c-.001-.246-.154-.986-.832-1.664C11.516 10.68 10.289 10 8 10c-2.29 0-3.516.68-4.168 1.332-.678.678-.83 1.418-.832 1.664h10Z" />
                            </svg> Profile</span>
                        </Link>
                    </li>

                    <li className=''>
                        <Link className={style.link} href={'/checkout'}>
                            <span>
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-credit-card text-success" viewBox="0 0 16 16">
                                    <path d="M0 4a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V4zm2-1a1 1 0 0 0-1 1v1h14V4a1 1 0 0 0-1-1H2zm13 4H1v5a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V7z" />
                                    <path d="M2 10a1 1 0 0 1 1-1h1a1 1 0 0 1 1 1v1a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1v-1z" />
                                </svg>
                            </span>

                            <span className='ms-2'>Checkout</span>
                        </Link>
                    </li>
                </ul>
            </nav >
        </>


    )
}
