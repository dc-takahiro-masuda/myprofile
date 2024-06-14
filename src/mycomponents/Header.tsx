import Link from 'next/link'
import React from 'react'

const Header: React.FC = () => {
    return (
        <header className="font-caveat w-full md lg h-16 px-12 py-2 bg-blue-300 text-xl
          flex justify-between items-center">
            <div>
                PORTFORIO
            </div>
            <div className="flex space-x-4 ">
                <Link href="/game">GAME</Link>
                <Link href="/works">WORKS</Link>
                <Link href="/aboutme">ABOUT ME</Link>
            </div>
        </header>
    )
}

export default Header