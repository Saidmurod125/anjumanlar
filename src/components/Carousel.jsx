import { useState } from 'react';

export const Carousel = () => {
    const mainCard = [
        {
            img: "https://anjumanlar.uz/img/conference-icons/republic-icon.jpg",
            text: 'Turkiston ma’rifatparvar ziyolilar merosining fan, adabiyot, madaniyat hamda ma’naviyat taraqqiyotidagi o‘rni',
            addres: "20.04.2024 Mirzo Qarshi shahri",
            practice: "fan ta'lim"
        },
        {
            img: "https://anjumanlar.uz/storage/UNMfcZhMsRiP55rH7kqGiXbucphO7b9WfYZ7SzAK.jpg",
            text: 'Yangi O‘zbekiston sharoitida tarix va etnologiya fanlarining dolzarb masalalari va istiqbollari',
            addres: "15.03.2024 Termiz shahri",
            practice: "fan ta'lim"
        },


        {
            img: "https://anjumanlar.uz/img/conference-icons/republic-icon.jpg",
            text: "Fan va ta'limda innovasion texnika va pedagogik texnologiyalarning rivojlanish istiqbollari",
            addres: "20.04.2024 Mirzo Qarshi shahri",
            practice: "axborot va kommunikatsiya"
        },


        {
            img: "https://anjumanlar.uz/img/conference-icons/republic-icon.jpg",
            text: "geografiya va kelajakka nazar",
            addres: "24.04.2024  nukus shahri",
            practice: "fan ta'lim"
        },

        {
            img: "https://anjumanlar.uz/storage/UNMfcZhMsRiP55rH7kqGiXbucphO7b9WfYZ7SzAK.jpg",
            text: 'Yangi O‘zbekiston sharoitida tarix va etnologiya fanlarining dolzarb masalalari va istiqbollari',
            addres: "15.03.2024 Termiz shahri",
            practice: "fan ta'lim"
        },

        {
            img: "https://anjumanlar.uz/storage/gJ0e7NVw5JeRORAR5K5Cs9hQzllsgm0gQsnQYGzK.jpg",
            text: "Psixologik tadqiqotlarda muammolar, yutuqlar, innovatsiyalar",
            addres: "22.11.2024  buxoro shahri",
            practice: "fan ta'lim"
        },

        {
            img: "https://anjumanlar.uz/img/conference-icons/republic-icon.jpg",
            text: "yangi o'zbekiston yoshlar ijodida",
            addres: "11.06.2024  mirzo ulug'bek tumani",
            practice: "fan ta'lim"
        }];

    const [startIndex, setStartIndex] = useState(0);
    const isPrevDisabled = startIndex === 0;
    const isNextDisabled = startIndex + 3 >= mainCard.length;

    const handlePrevClick = () => {
        if (!isPrevDisabled) {
            setStartIndex(startIndex - 1);
        }
    };

    const handleNextClick = () => {
        if (!isNextDisabled) {
            setStartIndex(startIndex + 1);
        }
    };

    return (
        <div className='mt-[100px] w-full dark:text-white  dark:bg-gray-900'>
            <div className='flex flex-wrap w-[90%] mx-auto gap-10 justify-around items-center'>
                <button className={`w-[60px] h-[60px] cursor-pointer transition-all duration-300 rounded-full border-2 border-gray-500 ${isPrevDisabled ? 'bg-[#088269]' : ''}`} onClick={handlePrevClick} disabled={isPrevDisabled}>
                    <i className="fa-solid fa-arrow-left"></i>
                </button>
                {mainCard.slice(startIndex, startIndex + 3).map((item, index) => (
                    <div key={index} className='rounded-lg border-2 transition-all duration-800 hover:shadow-lg w-[450px] h-[300px] flex justify-center items-center flex-col cursor-pointer'>
                        <img src={item.img} alt="" className='w-[100px] rounded-full h-[100px]' />
                        <h2 className='capitalize h-[50px] mt-3 ml-2 font-semibold text-[15px] mb-3 text-center'>{item.text}</h2>
                        <h4 className='text-[#404040] text-[16px] font-normal dark:text-white'>{item.addres}</h4>
                        <p className='text-[#404040] font-normal dark:text-white text-[16px] capitalize'>{item.practice}</p>
                    </div>
                ))}
                <button className={`w-[60px] h-[60px] cursor-pointer transition-all duration-300  rounded-full border-2 border-gray-500 ${isNextDisabled ? 'bg-[#088269]' : ''}`} onClick={handleNextClick} disabled={isNextDisabled}>
                    <i className="fa-solid fa-arrow-right"></i>
                </button>
            </div>
            <div className='w-[80%] flex justify-between mx-auto h-[200px] items-center'>
            </div>
        </div >
    );
};

export default Carousel
