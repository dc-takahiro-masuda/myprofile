import Image from 'next/image'
import React from 'react'

const ContentBody: React.FC<React.PropsWithChildren<{}>> = ({children}) => {
  return (
    <div className='w-full bg-sky-100 mx-auto py-10 flex flex-col items-center'>
        {children}
    </div>
  )
}

export default ContentBody