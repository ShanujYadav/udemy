import React from 'react'

const Topbar = ({ title, from, to }) => {
    return (
        <div class="flex flex-col h-full w-full mx-auto space-y-0 justify-center items-center">
            <section class="flex flex-col mx-auto h-80 bg-black rounded-lg p-6 shadow-md space-y-6 w-full sm:w-4/5 md:w-3/4 lg:w-full justify-center items-center">
                <span class="text-white text-4xl sm:text-5xl md:text-6xl font-bold font-serif text-center">{title}</span>
                <span class="text-white text-xs sm:text-sm md:text-base font-serif text-center">{from} &gt; {to}</span>
            </section>
        </div>
    )
}
export default Topbar