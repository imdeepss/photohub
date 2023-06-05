import React from 'react'
import { MoonIcon } from '../icons'

const ToggleButton = () => {
    return (
        <button type='button' className='rounded-lg shadow-lg bg-transparent outline-none items-center bg-grey px-2 py-2 flex md:px-4 md:py-3 '>
            <MoonIcon />
        </button>
    )
}

export default ToggleButton