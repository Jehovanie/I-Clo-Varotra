
const MiniCard = ({ image, name }) => {
    return (
        <div className="flex flex-col items-center bg-white border border-gray-200 rounded-lg shadow md:flex-row md:w-1/3 sm:w-1/2 xs:w-full hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700 hidden duration-700 ease-in-out" data-carousel-item>
            <img className="object-cover w-full rounded-t-lg h-96 md:h-auto md:w-48 md:rounded-none md:rounded-l-lg" src={image} alt={name} />
            <div className="flex flex-col justify-between p-4 leading-normal">
                <h6 className="mb-2 tracking-tight text-gray-900 dark:text-white">Noteworthy </h6>
            </div>
        </div>
    );
};

export default MiniCard;