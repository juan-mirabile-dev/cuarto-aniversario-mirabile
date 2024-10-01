import React from 'react';

const Contact = () => {
  return (
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
  );
}

export default Contact;