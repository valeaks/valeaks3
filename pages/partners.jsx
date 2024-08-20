
export default function Partners() {

    return (
        <>
            <div className="w-full my-10">
            <div className="flex w-full justify-center">
      <img width="400" src="/img/bck4.png" />
      </div>
                <h1 className="py-7 animateHeader text-4xl font-extrabold text-center text-white">
                    <i className="fal fa-stars text-amber-400 mr-2" />
                    Partners
                </h1>
            </div>

            <div className="lg:max-w-screen-lg mt-10 mx-auto grid grid-cols-1 md:grid-cols-2 gap-4">

            <div className="flex flex-col justify-center text-white rounded">
            <a href="https://wvtclan.com.tr/">
                        <div className="flex-1 gap-x-4 flex items-center bg-gradient-to-b from-neutral-900/80 to-neutral-900/20 p-3 rounded-full">
                            <img className="rounded-full h-32 w-32" src="https://wvtclan.com.tr/assets/img/gallery/logo.png" />
                            <div>
                                <h1 className="leading-none text-3xl font-bold text-white">WVT CLAN</h1>        
                                <div className="flex items-center mt-1">
                                    <p className="font-normal font-sm">
                                    WVT CLAN is working to make music distribution affordable and profitable for everyone. Unique code shares are also one of the reasons for our partnership.
                                    </p>
                                </div>     
                            </div>
                        </div>
                    </a>
                    </div>


                            <div className="flex flex-col justify-center text-white rounded">
            <a href="https://codeshare.me/partners/64db583a4292ca1066ad0a1b">
                        <div className="flex-1 gap-x-4 flex items-center bg-gradient-to-b from-neutral-900/80 to-neutral-900/20 p-3 rounded-full">
                            <img className="rounded-full h-32 w-32" src="https://media.discordapp.net/attachments/1172657853056684102/1172671829673005146/maskot_profil_alev.png" />
                            <div>
                                <h1 className="leading-none text-3xl font-bold text-white">Nodesty VDS</h1>        
                                <div className="flex items-center mt-1">
                                    <p className="font-normal font-sm">
                                   DISCOUNT CODE: CODESHARE Experience uninterrupted internet speed up to 10Gb and cheap intel i9, amd ryzen series vds with Nodesty. Shop with Code Share assurance.
                                    </p>
                                </div>     
                            </div>
                        </div>
                    </a>
                    </div>

                </div>
                <div className="py-10"></div>
        </>
    );
};
