"use client";

import React from 'react';
import { MoonIcon, SunIcon } from '../icons';
import { useTheme } from 'next-themes';

const ToggleButton = () => {
    const { resolvedTheme, setTheme } = useTheme();

    return (
        <button
            type="button"
            className="rounded-lg shadow-lg outline-none items-center bg-grey px-2 py-2 flex md:px-4 md:py-3"
            onClick={() => setTheme(resolvedTheme === 'dark' ? 'light' : 'dark')}
        >
            {resolvedTheme === 'dark' ? <SunIcon /> : <MoonIcon />}
        </button>
    );
};

export default ToggleButton;
