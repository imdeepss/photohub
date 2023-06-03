import React from 'react'

const loading = () => {
    return (
        <section className="grid animate-pulse grid-cols-2 gap-4 px-8 py-20 md:grid-cols-4 md:px-20">
            {Array.from({ length: 12 }).map((_, index) => (
                <div
                    key={index}
                    className="h-[250px] max-w-full rounded-lg bg-gray-300"
                />
            ))}
        </section>
    )
}

export default loading