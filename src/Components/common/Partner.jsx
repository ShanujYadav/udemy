import React from 'react'

const Partner = () => {
    return (
        <div className="text-center py-10 bg-white my-10">
            <h3 className="text-3xl font-semibold mb-6">Trusted by companies of all sizes</h3>
            <div className="flex justify-center space-x-8">
                <img
                    src="https://s.udemycdn.com/partner-logos/v4/nasdaq-dark.svg"
                    alt="Nasdaq"
                    className="h-12"
                />
                <img
                    src="https://s.udemycdn.com/partner-logos/v4/volkswagen-dark.svg"
                    alt="Volkswagen"
                    className="h-12"
                />
                <img
                    src="https://s.udemycdn.com/partner-logos/v4/box-dark.svg"
                    alt="Box"
                    className="h-12"
                />
                <img
                    src="https://s.udemycdn.com/partner-logos/v4/netapp-dark.svg"
                    alt="NetApp"
                    className="h-12"
                />
                <img
                    src="https://s.udemycdn.com/partner-logos/v4/eventbrite-dark.svg"
                    alt="Eventbrite"
                    className="h-12"
                />
            </div>
        </div>
    )
}
export default Partner