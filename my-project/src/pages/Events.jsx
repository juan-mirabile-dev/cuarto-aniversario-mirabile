import React from 'react';
import TitleSection from '../components/TitleSection'
import Members from '../components/Members'
import text from '../text_files/AniversaryText'

const Events = () => {
    return (
        <>
            <div className="rounded-md mt-8 mb-2 lg:px-0 px-4 grid gap-4">
                <div>
                    <TitleSection content="Concierto del Cuarto Aniversario de Mirabile." />
                </div>

                <div className="bg-inst-card rounded-md p-4">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
                        <div className="w-full h-64 overflow-hidden">
                            <img className="w-full h-full object-cover" src="png/mirabile_img_test.png" alt="Placeholder Image" />
                        </div>
                        <div className="text-start">
                            {text.map((text, index) => (
                                <div key={index} className="text-base mb-3">
                                    {text}
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

                <div>
                    <Members />
                </div>

            </div>

        </>
    );
}

export default Events;