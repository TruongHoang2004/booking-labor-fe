// ServiceProps.tsx
import React from "react";
import Image from 'next/image';
import { IconType }  from 'react-icons'

interface ServiceItem {
    icon: IconType;
    text: string;
}

interface ServiceCardProps {
    imageSrc: string;
    title: string;
    description: string;
    services: ServiceItem[];
}

const ServiceProps = ({ imageSrc, title, description, services }: ServiceCardProps) => {
    return (
        <div>
            <div className="h-60 relative w-[400px]">
                <Image 
                    src={imageSrc} 
                    className="object-cover rounded-t-lg object-top" 
                    fill 
                    alt={title}
                />
                <div className="bg-white rounded-xl absolute text-green-800 bottom-3 left-3 py-2 px-4 w-9/12">
                    <p className="text-xl font-semibold">{title}</p>
                    <p className="text-sm font-medium">{description}</p>
                </div>
            </div>
            <div className="text-green-800 rounded-b-lg w-[400px] bg-zinc-50 border border-t-0 px-4 py-3">
                <p className="font-medium text-lg mb-2 underline">Service Details:</p>
                <ul className="space-y-1 text-base">
                    {services.map((service, index) => {
                    const Icon = service.icon;
                    return (
                        <li key={index} className="flex items-center">
                        <Icon className="mr-1" /> {service.text}
                        </li>
                    );
                    })}
                </ul>
            </div>
        </div>
    )
}

export default ServiceProps;