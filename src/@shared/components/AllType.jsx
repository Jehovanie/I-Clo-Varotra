
const AllType = () => {

    const list_type= [
        { icon: "#", label: "Women's Fashion"},
        { icon: "#", label: "Men's Fashion"},
        { icon: "#", label: "Phones & Telecom"},
        { icon: "#", label: "Computer, Office & Security"},
        { icon: "#", label: "Jewlry & Watches"},
        { icon: "#", label: "Home, Pet & Appliances"},
        { icon: "#", label: "Bags & Shoes"},
        { icon: "#", label: "Toy's, Kids & bubies"},
        { icon: "#", label: "Outdoor Fun & Sports"},
        { icon: "#", label: "Home improvement & Tools"},
    ]

    const list_type_jsx= list_type.map((item, index ) => {
        return (
            <li key={index + "_all_type"} className="flex justify-between items-center w-full cursor-pointer hover:border-b-2 duration-300">
                <div className="flex justify-start items-center gap-2">
                    <svg aria-hidden="true" className="w-5 h-5 text-yellow-300 animate-spin" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path></svg>
                    <span className='text-md font-thin'>{item.label}</span>
                </div>
                <svg width='17' height='17' viewBox='0 0 17 17' fill='none' xmlns='http://www.w3.org/2000/svg'>
                <path fillRule='evenodd' clipRule='evenodd'
                    d='M0 8.71423C0 8.47852 0.094421 8.25246 0.262491 8.08578C0.430562 7.91911 0.658514 7.82547 0.896201 7.82547H13.9388L8.29808 2.23337C8.12979 2.06648 8.03525 1.84013 8.03525 1.60412C8.03525 1.36811 8.12979 1.14176 8.29808 0.974875C8.46636 0.807989 8.6946 0.714233 8.93259 0.714233C9.17057 0.714233 9.39882 0.807989 9.5671 0.974875L16.7367 8.08499C16.8202 8.16755 16.8864 8.26562 16.9316 8.3736C16.9767 8.48158 17 8.59733 17 8.71423C17 8.83114 16.9767 8.94689 16.9316 9.05487C16.8864 9.16284 16.8202 9.26092 16.7367 9.34348L9.5671 16.4536C9.39882 16.6205 9.17057 16.7142 8.93259 16.7142C8.6946 16.7142 8.46636 16.6205 8.29808 16.4536C8.12979 16.2867 8.03525 16.0604 8.03525 15.8243C8.03525 15.5883 8.12979 15.362 8.29808 15.1951L13.9388 9.603H0.896201C0.658514 9.603 0.430562 9.50936 0.262491 9.34268C0.094421 9.17601 0 8.94995 0 8.71423Z'
                    fill='gray' />
                </svg>
            </li>
        )
    })


    return (
        <>
            <ul className="flex flex-col items-start justify-start w-full">
                { list_type_jsx}
            </ul>
        </>
    );
};

export default AllType;