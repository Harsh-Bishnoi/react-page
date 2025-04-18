import React from 'react'
import { CARD_DATA } from "../utils/helper"
import { FacebookIcon, InstaIcon, ShopshyIcon, TwitterIcon } from '../utils/icon'

const Card = () => {
    return (
        <>
            <div className='min-vh-100 d-flex justify-content-center align-items-center'>
                <div className='container mt-50'>
                    <div className='row'>
                        {CARD_DATA.map((item, index) => (
                            <div className="col-12 col-sm-6 col-md-4 col-lg-3 mx-auto">
                                <div key={index} className='card mx-auto'>
                                    <div className="parent-box">
                                        <div className="box">
                                            <a href="https://www.facebook.com/?_rdr" target='_blank'><FacebookIcon />
                                            </a>
                                        </div>
                                        <div className="box mt-5">
                                            <a href="https://www.instagram.com/accounts/login/?hl=en" target='_blank'>
                                                <InstaIcon />
                                            </a>
                                        </div>
                                        <div className="box mt-5">
                                            <a href="https://x.com/?lang=en" target='_blank'>
                                                <TwitterIcon />
                                            </a>
                                        </div>
                                        <div className="box mt-5">
                                            <a href="https://www.skype.com/en/" target='_blank'><ShopshyIcon />
                                            </a>
                                        </div>
                                    </div>
                                    <img src={item.image} alt={item.title} className='card-image' />
                                    <h2 className='card-text'>{item.title}</h2>
                                    <p className='card-description'>{item.descripition}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div >
            </div>
        </>
    )
}

export default Card