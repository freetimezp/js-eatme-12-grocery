import BannerImg from '../../assets/images/website/banner.jpg';
import PlayStoreImg from '../../assets/images/website/play_store.png';
import AppStoreImg from '../../assets/images/website/app_store.png';

const bannerStyle = {
    backgroundImage: `url(${BannerImg})`,
    backgroundPosition: "center",
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    width: "100%",
    height: "100%",
};

const AppBanner = () => {
    return (
        <>
            <div className="container my-14">
                <div style={bannerStyle} className='sm:min-h-[400px] sm:flex sm:justify-end
                    sm:items-center rounded-xl'>
                    <div>
                        <div className='space-y-6 max-w-xl mx-auto'>
                            <h1 className='text-2xl text-center sm:text-4xl font-semibold'>
                                Download the App
                            </h1>
                            <p
                                data-aos="fade-up"
                                data-oas-delay="300"
                                className='text-center sm:px-20'
                            >
                                Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                                Repellat dolorum molestias ad. Magnam, earum.
                            </p>

                            <div className='flex justify-center items-center gap-4'>
                                <a href="#">
                                    <img src={PlayStoreImg} alt="play market"
                                        className='max-w-[150px] sm:max-w-[120px] md:max-w-[200px]' />
                                </a>
                                <a href="#">
                                    <img src={AppStoreImg} alt="apple market"
                                        className='max-w-[150px] sm:max-w-[120px] md:max-w-[200px]' />
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default AppBanner;
