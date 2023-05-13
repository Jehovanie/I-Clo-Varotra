import { useDispatch } from "react-redux";
import { ADD_TO_PANIER } from "../../redux/@shared/constant";
import produit1 from "./../../@assets/produit/image2.png"

const ModalDetails = ({ product }) => {
    const { id, category, titre: name, description, origin, fournisseur, stock, price, image, note } = product;
    const dispatch = useDispatch();

    const addToPannier = (category, id) => {
        dispatch({ type: ADD_TO_PANIER, payload: { category, id } })
    }
    return (
        <div id={"defaultModal_" + id} tabIndex="-1" aria-hidden="true" className="fixed top-0 left-0 right-0 z-50 hidden w-auto p-4 overflow-x-hidden overflow-y-auto md:inset-0 h-[calc(100%-1rem)] " >
            <div className="relative w-full h-full max-w-3xl md:h-auto">
                {/* Modal content */}
                <div className="relative bg-white rounded-lg shadow dark:bg-gray-700">
                    {/* Modal body */}
                    <div className="p-2">
                        <div className="w-full flex flex-col items-center bg-white md:flex-row dark:border-gray-700 dark:bg-gray-800">
                            <img className="w-full  md:w-1/2" src={produit1} alt={name} />
                            <div className="flex flex-col p-5 w-full">
                                <div className="element">
                                    <h3 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{name}</h3>
                                    <p className="value price c-yellow-300 hover:color-yellow-500"> {`${price}€`} </p>
                                </div>
                                <p className="mb-3 text-gray-500 dark:text-gray-400">
                                    {description}
                                </p>

                                <div className="element">
                                    <h6 className="mb-2 font-bold tracking-tight text-gray-900 dark:text-white">Origin</h6>
                                    <p className="value"> {origin} </p>
                                </div>

                                <div className="element">
                                    <h6 className="mb-2 font-bold tracking-tight text-gray-900 dark:text-white">Fournisseur</h6>
                                    <p className="value"> {fournisseur} </p>
                                </div>

                                <div className="element">
                                    <h6 className="mb-2 font-bold tracking-tight text-gray-900 dark:text-white">Stock</h6>
                                    <p className="value"> {stock} (pieces)</p>
                                </div>

                                <button
                                    data-modal-hide="defaultModal"
                                    type="button"
                                    className="text-white bg-yellow-300 hover:bg-yellow-500 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-yellow-600 dark:hover:bg-yellow-700 dark:focus:ring-yellow-800"
                                    onClick={() => addToPannier(category, id)}
                                >
                                    Acheter des maintenat
                                </button>

                            </div>
                        </div>

                    </div>
                    {/* Modal footer
                        <div className="flex justify-end items-center p-2 space-x-2 border-t border-gray-200 rounded-b dark:border-gray-600">

                            {/* <button data-modal-hide="defaultModal" type="button" className="text-gray-500 bg-white hover:bg-gray-100 focus:ring-4 focus:outline-none focus:ring-blue-300 rounded-lg border border-gray-200 text-sm font-medium px-5 py-2.5 hover:text-gray-900 focus:z-10 dark:bg-gray-700 dark:text-gray-300 dark:border-gray-500 dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-gray-600">Annuler</button> */}
                    {/* </div> */}
                </div>
            </div>
        </div>
    )
}

export default ModalDetails;