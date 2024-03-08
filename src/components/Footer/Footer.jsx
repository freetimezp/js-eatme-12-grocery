import { FaFacebook, FaGoogle, FaInstagram, FaTelegram } from "react-icons/fa";

const Footer = () => {
    return (
        <div className="bg-gradient-to-r from-primary to-secondary pt-12 pb-8
        text-white">
            <div className="container">
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
                    <div className="space-y-6">
                        <h1 className="text-4xl font-bold">
                            Orange Mint
                        </h1>
                        <p className="text-sm max-w-[300px]">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum
                            sint exercitationem cum maiores nisi quos, voluptatem necessitatibus
                            veniam architecto. Facere, aliquid neque.
                        </p>
                    </div>

                    <div className="space-y-6">
                        <h1 className="text-4xl font-bold">
                            Quick Links
                        </h1>
                        <div className="grid grid-cols-2 gap-3">
                            <div>
                                <ul className="space-y-2">
                                    <li><a href="#">Home</a></li>
                                    <li><a href="#">About</a></li>
                                    <li><a href="#">Contact</a></li>
                                    <li><a href="#">Search</a></li>
                                    <li><a href="#">Privacy Policy</a></li>
                                </ul>
                            </div>
                            <div>
                                <ul className="space-y-2">
                                    <li><a href="#">Home</a></li>
                                    <li><a href="#">About</a></li>
                                    <li><a href="#">Contact</a></li>
                                    <li><a href="#">Search</a></li>
                                    <li><a href="#">Privacy Policy</a></li>
                                </ul>
                            </div>
                        </div>
                    </div>

                    <div className="space-y-6">
                        <h1 className="text-4xl font-bold">
                            Follow Us
                        </h1>
                        <div>
                            <p>+12 345 67890</p>
                            <p>69000, Ukraine, Kyiv</p>
                        </div>
                        <div className="flex items-center gap-3 cursor-pointer">
                            <FaFacebook className="text-3xl hover:scale-110 duration-300" />
                            <FaGoogle className="text-3xl hover:scale-110 duration-300" />
                            <FaInstagram className="text-3xl hover:scale-110 duration-300" />
                            <FaTelegram className="text-3xl hover:scale-110 duration-300" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Footer;
