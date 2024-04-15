import React from 'react'
import './Plans.css'

const Plans = () => {
    const PricingData = [
        {
            title: "Regular Member",
            price: "$0",
            duration: " /month",
            color: "#fff",
            features: [
                "unlimited acess to the Courses",
                "Customer Support",
                "Personal Mentor",
                "Stanterd Options",
                "5 Classes Per week"
            ]
        },
        {
            title: "Premium Member",
            price: "$100",
            duration: " /month",
            color: "#6f55f2",
            features: [
                "unlimited acess to the Courses",
                "Customer Support",
                "Personal Mentor",
                "Stanterd Options",
                "5 Classes Per week"
            ]
        },
        {
            title: "Standard Member",
            price: "$10",
            duration: " /month",
            color: "#fff",
            features: [
                "unlimited acess to the Courses",
                "Customer Support",
                "Personal Mentor",
                "Stanterd Options",
                "5 Classes Per week"
            ]
        },
    ];
    return (
        <>
            <div className="conatiner">
                <div className="pricing_top">
                    <h2 className='selection_title'>Premium pricing plans</h2>
                    <p>Unlock elite tech servies with our premium pricing plan and soar a head of the competition</p>

                </div>
                <div className="pricing_wrapper">

                    {PricingData.map((PricingItem, index) => (
                        <div className="pricing_item" key={index}>
                            <div className="pricing_card-top" style={{ background: PricingItem.color }}>
                                <h2 className='section_title'>{PricingItem.title}</h2>
                                <h2 className='pricing'>{PricingItem.price}<span>{PricingItem.duration}</span></h2>
                            </div>
                            <div className="services">
                                <ul>
                                    {
                                        PricingItem.features.map((feature, index) => (
                                        <li key={index}>
                                            {feature}
                                            
                                        </li>

                                        ))
                                    }
                                </ul>
                                <button className='register-btn'> Join </button>
                            </div>
                        </div>

                    ))}


                </div>

            </div>
        </>
    )
}

export default Plans
