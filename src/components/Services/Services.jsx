import Fruit1 from '../../assets/images/fruits/fruits1.webp';
import Fruit2 from '../../assets/images/fruits/fruits2.png';
import Fruit3 from '../../assets/images/fruits/fruits3.png';

const ServicesData = [
    {
        id: 1,
        image: Fruit1,
        title: "Fresh Fruits",
        subtitle: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
        aosDelay: "300",
    },
    {
        id: 2,
        image: Fruit2,
        title: "Natural Products",
        subtitle: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
        aosDelay: "500",
    },
    {
        id: 3,
        image: Fruit3,
        title: "Orange Juice",
        subtitle: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
        aosDelay: "700",
    },
];

const Services = () => {
    return (
        <div className='container my-16 space-y-4'>
            <div className='text-center max-w-lg mx-auto space-y-2'>
                <h1 className='text-3xl font-bold text-dark'>
                    Fresh and <span className='text-primary'>Tasty Fruits</span>
                </h1>
                <p className='text-sm opacity-60'>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Perferendis vel quae deserunt expedita recusandae ullam
                    excepturi quisquam tempore odio pariatur.
                </p>
            </div>

            <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8'>
                {ServicesData.map((item) => (
                    <div
                        data-aos="fade-up"
                        data-aos-delay={item.aosDelay}
                        key={item.id}
                        className='p-4 text-center space-y-6'
                    >
                        <img src={item.image} alt="service" className='max-w-[200px] mx-auto
                            hover:scale-110 transition-all duration-300 img-shadow2' />
                        <div className='space-y-2'>
                            <h1 className='text-2xl font-bold text-primary'>{item.title}</h1>
                            <p className='text-dark'>{item.subtitle}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Services;
