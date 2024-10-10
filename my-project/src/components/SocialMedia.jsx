const SocialMedia = () => {
    return (
        <>
            <div className="mt-8 grid lg:grid-cols-3 grid-cols-1 lg:px-0 px-4 gap-4">
                <div className="col-span-full text-start">
                    <p className='mb-2 md:text-lg text:base font-bold'>Siguenos en redes sociales</p>
                </div>

                <div
                    className="grid grid-cols-[auto_1fr] p-4 bg-inst-card"
                    onClick={() => window.location.href = "https://www.facebook.com/mirabile.ags?locale=es_LA"}
                    style={{ cursor: 'pointer' }}
                >
                    <div className='text-start'>
                        <img
                            src="png/Facebook_icon.png"
                            alt="Facebook_icon"
                            className='h-16 transition-transform duration-300 transform hover:scale-110'
                        />
                    </div>

                    <div className='text-start ps-4'>
                        <p className="md:text-base text-sm font-bold">Mirabile Ensamble Coral</p>
                        <p className="md:text-base text-sm text-muted">Facebook</p>
                    </div>

                    <div className='text-start col-span-full grid grid-cols-2 m-0 lg:mt-4'>
                        <div className="hidden lg:block col-span-1 text-xl font-bold">393</div>
                        <div className="hidden lg:block col-span-1 text-xl font-bold"></div>

                        <div className="hidden lg:block col-span-1 text-muted">Seguidores</div>
                        <div className="hidden lg:block col-span-1 text-muted"></div>
                    </div>
                </div>

                <div
                    className="grid grid-cols-[auto_1fr] p-4 bg-inst-card"
                    onClick={() => window.location.href = "https://www.instagram.com/mirabile_ensamblecoral/"}
                    style={{ cursor: 'pointer' }}
                >
                    <div className='text-start'>
                        <img
                            src="png/Instagram_icon.png"
                            alt="Instagram_icon"
                            className='h-16 transition-transform duration-300 transform hover:scale-110'
                        />
                    </div>

                    <div className='text-start ps-4'>
                        <p className="md:text-base text-sm font-bold">mirabile_ensamblecoral</p>
                        <p className="md:text-base text-sm text-muted">Instagram</p>
                    </div>

                    <div className='text-start col-span-full grid grid-cols-2 m-0 lg:mt-4'>
                        <div className="hidden lg:block col-span-1 text-xl font-bold">115</div>
                        <div className="hidden lg:block col-span-1 text-xl font-bold">18</div>

                        <div className="hidden lg:block col-span-1 text-muted">Seguidores</div>
                        <div className="hidden lg:block col-span-1 text-muted">Posts</div>
                    </div>
                </div>

                <div
                    className="grid grid-cols-[auto_1fr] p-4 bg-inst-card"
                    onClick={() => window.location.href = "https://www.tiktok.com/@mirabile_ensamble_coral?is_from_webapp=1&sender_device=pc"}
                    style={{ cursor: 'pointer' }}
                >
                    <div className='text-start'>
                        <img
                            src="png/TikTok_icon.png"
                            alt="TikTok_icon"
                            className='h-16 transition-transform duration-300 transform hover:scale-110'
                        />
                    </div>

                    <div className='text-start ps-4'>
                        <p className="md:text-base text-sm font-bold">mirabile_ensamble_coral</p>
                        <p className="md:text-base text-sm text-muted">TikTok</p>
                    </div>

                    <div className='text-start col-span-full grid grid-cols-2 m-0 lg:mt-4'>
                        <div className="hidden lg:block col-span-1 text-xl font-bold">45</div>
                        <div className="hidden lg:block col-span-1 text-xl font-bold">9</div>

                        <div className="hidden lg:block col-span-1 text-base text-sm text-muted">Seguidores</div>
                        <div className="hidden lg:block col-span-1 text-base text-sm text-muted">Posts</div>
                    </div>
                </div>

            </div>
        </>
    );
}

export default SocialMedia;