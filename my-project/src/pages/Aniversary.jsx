import React from 'react';
import TitleSection from '../components/TitleSection'
import Members from '../components/Members'
import text from '../text_files/AniversaryText'

const Aniversary = () => {
    return (
        <>
            <div className="bg-neutral-900 rounded-md p-4 my-4">
                <TitleSection content="Concierto del Cuarto Aniversario de Mirabile." />
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

            <Members />

            <div className="mt-16 grid grid-cols-3 gap-4">
                <div className="col-span-full">
                    <p className='mb-8 text-lg font-bold'>Siguenos en redes sociales</p>
                </div>
                <div className="text-center">
                    <div className='mb-8 flex items-center justify-center h-16'>
                        <img
                            src="png/Facebook_icon.png"
                            alt="Facebook_icon"
                            className='h-full transition-transform duration-300 transform hover:scale-110'
                            onClick={() => window.location.href = "https://www.facebook.com/mirabile.ags?locale=es_LA"}
                            style={{ cursor: 'pointer' }}
                        />
                    </div>
                </div>
                <div className="text-center">
                    <div className='mb-8 flex items-center justify-center h-16'>
                        <img
                            src="png/Instagram_icon.png"
                            alt="Instagram_icon"
                            className='h-full transition-transform duration-300 transform hover:scale-110'
                            onClick={() => window.location.href = "https://www.instagram.com/mirabile_ensamblecoral/"}
                            style={{ cursor: 'pointer' }}
                        />
                    </div>
                </div>
                <div className="text-center">
                    <div className='mb-8 flex items-center justify-center h-16'>
                        <img
                            src="png/TikTok_icon.png"
                            alt="TikTok_icon"
                            className='h-full transition-transform duration-300 transform hover:scale-110'
                            onClick={() => window.location.href = "https://www.tiktok.com/@mirabile_ensamble_coral?is_from_webapp=1&sender_device=pc"}
                            style={{ cursor: 'pointer' }}
                        />
                    </div>
                </div>
            </div>

        </>
    );
}

export default Aniversary;