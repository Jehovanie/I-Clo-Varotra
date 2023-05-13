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
        <div id={"defaultModal_" + id} tabIndex="-1" aria-hidden="true" className="fixed top-0 left-0 right-0 hidden w-auto p-4 overflow-x-hidden overflow-y-auto md:inset-0 h-[calc(100%-1rem)] content_modal" >
            <div className="relative w-full h-full max-w-3xl md:h-auto">
                {/* Modal content */}
                <div className="relative bg-white rounded-lg shadow dark:bg-gray-700">
                    <div class="flex items-start justify-between p-4 border-b rounded-t dark:border-gray-600">
                        <h3 class="text-xl font-semibold text-gray-900 dark:text-white">
                            Classement {category}
                        </h3>
                        <button type="button" class="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center dark:hover:bg-gray-600 dark:hover:text-white" data-modal-hide={"defaultModal_" + id}>
                            <svg aria-hidden="true" class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
                            <span class="sr-only">Close modal</span>
                        </button>
                    </div>
                    {/* Modal body */}
                    <div className="block p-3 xs:p-4">
                        <div className="w-full flex flex-col items-center bg-white md:flex-row dark:border-gray-700 dark:bg-gray-800">
                            <img className="w-full md:w-1/2 h-full" src={produit1} alt={name} />
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