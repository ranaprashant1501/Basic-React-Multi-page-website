import React from 'react'
import { Link, Outlet } from 'react-router-dom'

const Product = () => {
    return (
        <div >
            <nav>
                <Link className='link' to='/product/men'>Men</Link>
                <Link className='link' to='/product/women'>Women</Link>
            </nav>

            <Outlet />
        </div>
    )
}

export default Product
