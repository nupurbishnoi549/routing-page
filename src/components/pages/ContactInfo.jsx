import React from 'react'
import { inputGroups } from '../../utils/helper'
import CustomBtn from '../common/CustomButton'

const ContactInfo = () => {

    const handleSubmit = (event) => {
        event.preventDefault();
        console.log("Form submitted");
    };

    return (
        <form
            onSubmit={handleSubmit}
            className="max-w-xl mx-auto p-10 space-y-6 bg-white shadow-md rounded-lg"
        >
            {inputGroups.map((group, Index) => (
                <div key={Index} className="flex flex-col md:flex-row gap-4">
                    {group.map((input, inputIndex) => (
                        <input
                            key={inputIndex}
                            type={input.type}
                            placeholder={input.placeholder}
                            className="w-full p-3 border border-black font-normal text-base rounded-md focus:outline-none focus:ring focus:ring-black"
                        />
                    ))}
                </div>
            ))}
            <textarea
                placeholder="About Me"
                className="w-full p-2 border border-black rounded h-24 resize-none font-normal text-base focus:outline-none focus:ring focus:ring-black"
            ></textarea>
            <CustomBtn text="Submit" myClass="!w-full" />
        </form>
    );
};

export default ContactInfo;