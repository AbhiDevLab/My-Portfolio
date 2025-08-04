import React from 'react'
import { socialImgs } from '../constants'

const Footer = () => {
    return (
        <footer className='footer'>
            <div className='footer-container'>
                <div className="flex justify-center md:justify-start mt-4">
                    <a
                        href="/AbhiCV.pdf"
                        target="_blank"
                        rel="noopener noreferrer"
                        onClick={(e) => {
                            e.preventDefault();
                            const resumeURL = '/AbhiCV.pdf';
                            window.open(resumeURL, '_blank');

                            const link = document.createElement('a');
                            link.href = resumeURL;
                            link.download = 'AbhiCV.pdf';
                            document.body.appendChild(link);
                            link.click();
                            document.body.removeChild(link);
                        }}
                        className="download-btn"
                    >
                        Download CV
                        <img src="/images/arrow-down.svg" alt="arrow" className="arrow-right" />
                    </a>

                </div>

                <div className='socials'>
                    {socialImgs.map((img) => (
                        <a href={img.url} className='icon' target='main' key={img.url} >
                            <img src={img.imgPath} alt="" />
                        </a>
                    ))}
                </div>

                <div className='flex flex-col justify-center'>
                    <p className='text-center md:text-end'>
                        © {new Date().getFullYear()} | AbhiDevLab | All Rights Reserved
                    </p>
                </div>
            </div>
        </footer>
    )
}

export default Footer