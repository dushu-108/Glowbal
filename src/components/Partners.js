import { useState, useEffect } from 'react'

function Partners() {
    const [partners, setPartners] = useState([]);

    useEffect(() => {
        fetch('https://raw.githubusercontent.com/ttg3671/glowbal_assignment/refs/heads/main/partners')
        .then((res) => res.json())
        .then((data) => {
            setPartners(data);
        });
    }, []);

    return (
        <div className="bg-black pb-16 px-8">
            <div className="max-w-7xl mx-auto">
                <h2 className="text-white text-5xl font-light tracking-normal leading-tight mb-16">
                    Our Partnerships Have Transformed How <br/> You Experience These Global Leaders
                </h2>
                <div className="grid grid-cols-5 gap-x-8 gap-y-16">
                    {partners.map((partner, id) => (
                        <div 
                            key={id} 
                            className="flex items-center justify-center opacity-70 hover:opacity-100 transition-opacity duration-300"
                        >
                            <p className="text-white text-2xl font-medium tracking-wider uppercase">
                                {partner.name}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default Partners
