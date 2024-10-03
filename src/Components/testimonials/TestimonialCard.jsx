import React from 'react'

const TestimonialCard = ({ data }) => {
    return (
        <div className="px-2 bg-gray-100 mb-8" >
            <div className="relative flex w-full max-w-[20rem] flex-col rounded-xl bg-transparent bg-clip-border text-gray-700 shadow-none">
                <div className="relative mx-0 mt-4 flex items-center gap-4 overflow-hidden rounded-xl bg-transparent bg-clip-border pt-0 pb-8 text-gray-700 shadow-none">
                    <img
                        src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1480&q=80"

                        className="relative inline-block h-[58px] w-[58px] !rounded-full object-cover object-center"
                    />
                    <div className="flex w-full flex-col gap-0.5">
                        <div className="flex items-center justify-between">
                            <h5 className="block font-sans text-xl font-semibold leading-snug tracking-normal text-blue-gray-900 antialiased">
                                {data.name}
                            </h5>
                        </div>
                        <p className="block font-sans text-base font-light leading-relaxed text-blue-gray-900 antialiased">
                            {data.position}
                        </p>
                    </div>
                </div>
                <div className="mb-6 ">
                    <p className="block font-sans text-base font-light leading-relaxed text-inherit antialiased">
                        {data.desc}
                    </p>
                </div>
            </div>
        </div>
    )
}

export default TestimonialCard