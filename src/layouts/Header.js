import React from 'react'
import { Link } from 'react-router-dom'

export const Header = () => {
  return (
        <header>
            <nav>
                <div className="project__logo">
                    <Link to="/" className="">Restaurant Delivery</Link>
                </div>
            </nav>
        </header>
  )
}
