import React from 'react'

const Footer = () => {
    const  dateTime = new Date().getFullYear();
    
    return (
        <footer className='bkg-gray py-10'>
            <div className="content-1280">
                <h4 className='text-center color-white'>&copy; CopyRight - {dateTime}</h4>
            </div>
        </footer>
    )
}

export default Footer