import {useState} from "react";
import Swal from "sweetalert2";
import axios from "axios";

export default function Modal({thumbnail, tittle, url, slug, id, isPublic, setReload}) {

    const [tittleEdit, setTittleEdit] = useState(tittle)
    const [slugEdit, setSlugEdit] = useState(slug)
    const [urlEdit, setUrlEdit] = useState(url)
    const [thumbnailEdit, setThumbnailEdit] = useState(thumbnail)
    const [statusEdit, setStatusEdit] = useState(isPublic? "1" : "0")

    const requestData = {
        "data": {
            "tittle": tittleEdit, "slug": slugEdit, "url": urlEdit, "thumbnail": thumbnailEdit,
            "isPublic": statusEdit === "1"
        }
    }

    async function updateData() {
        setShowModal(false)
        await Swal.fire({
            title: 'Are you sure you want to Update this Data?',
            text: "changes applied may not be reverted",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Confirm',
            cancelButtonText: 'Cancel',
        }).then(async (result) => {
            if (result.isConfirmed) {
                await axios.put(`/videos/${id}`, requestData).then(async (res) => {
                    await Swal.fire(
                        res?.data !== null ? 'Updated!' : 'Error',
                        res?.data !== null ? 'Video succesfully updated'
                            : 'contact with an operator',
                        res?.data !== null ? 'success' : "error"
                    )
                });
                setReload(true)
            }
        })
    }

    const openModal = () =>{
        setShowModal(true)
        setReload(false)
    }

    const [showModal, setShowModal] = useState(false);
    return (
        <div className={"text-center"}>
            <button
                className="font-medium text-blue-800 hover:underline"
                onClick={() => openModal()}
            >
                Edit
            </button>
            {showModal && (
                <>
                    <div className="justify-center items-center mx-auto my-auto flex fixed inset-0 z-50
                    outline-none focus:outline-none ">
                        <div className=" w-4/5 md:w-3/5 my-6 mx-auto sm:max-w-[90%] md:max-w-[50%] sm:h-full md:h-auto">
                            {/*content*/}
                            <div
                                className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-gray-300 outline-none focus:outline-none">
                                {/*header*/}
                                <div
                                    className="flex items-start justify-between p-5 border-b border-solid border-slate-200 rounded-t">
                                    <h3 className=" sm:text-xl lg:text-3xl font-semibold">
                                        Edit Video Data
                                    </h3>
                                    <button
                                        className="p-1 ml-auto bg-transparent border-0 text-black opacity-5 float-right text-3xl leading-none font-semibold outline-none focus:outline-none"
                                        onClick={() => setShowModal(false)}
                                    >
                    <span
                        className="bg-transparent text-black opacity-5 h-6 w-6 text-2xl block outline-none focus:outline-none">
                      ×
                    </span>
                                    </button>
                                </div>
                                {/*body*/}
                                <div className="flex flex-wrap px-3 mb-6">
                                    <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0 mt-4">
                                        <label
                                            className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                                            htmlFor="tittle">
                                            Tittle
                                        </label>
                                        <input
                                            className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                                            id="tittle" type="text" placeholder="Tittle of the video"
                                            value={tittleEdit}
                                            onChange={e => setTittleEdit(e.target.value)}
                                        />
                                        <p className="text-red-500 text-xs italic">Field Required.</p>
                                    </div>
                                    <div className="w-full md:w-1/2 px-3 mt-4">
                                        <label
                                            className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                                            htmlFor="slug">
                                            Slug
                                        </label>
                                        <input
                                            className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                                            id="slug" type="text" placeholder="Slug for the video"
                                            value={slugEdit}
                                            onChange={e => setSlugEdit(e.target.value)}
                                        />
                                    </div>

                                    <div className="w-full md:w-1/2 px-3 mt-4">
                                        <label
                                            className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                                            htmlFor="url">
                                            URL
                                        </label>
                                        <input
                                            className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                                            id="url" type="text" placeholder="Youtube video URL"
                                            value={urlEdit}
                                            onChange={e => setUrlEdit(e.target.value)}
                                        />
                                        <p className="text-red-500 text-xs italic">Field Required.</p>
                                    </div>

                                    <div className="w-full md:w-1/2 px-3 mt-4">
                                        <label
                                            className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                                            htmlFor="thumbnail">
                                            Thumbnail
                                        </label>
                                        <input
                                            className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                                            id="thumbnail" type="text" placeholder="URL with Thumbnail for the video"
                                            value={thumbnailEdit}
                                            onChange={e => setThumbnailEdit(e.target.value)}
                                        />
                                    </div>

                                    <div className="w-full md:w-1/2 px-3 my-6 md:mb-0">
                                        <label
                                            className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                                            htmlFor="status">
                                            Status
                                        </label>
                                        <div className="relative">
                                            <select
                                                className="block appearance-none w-full bg-gray-200 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                                                id="status"
                                                defaultValue={isPublic ? "1" : "0"}
                                                onChange={e => setStatusEdit(e.target.value)}>

                                                <option className="text-center" value={"1"}>Public</option>
                                                <option className="text-center" value={"0"}>Hidden</option>
                                            </select>
                                            <div
                                                className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                                                <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg"
                                                     viewBox="0 0 20 20">
                                                    <path
                                                        d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"/>
                                                </svg>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                {/*footer*/}
                                <div
                                    className="flex items-center justify-end p-6 border-t border-solid border-slate-200 rounded-b">
                                    <button
                                        className="text-red-500 background-transparent font-bold uppercase px-6 py-2 text-xs
                                        outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                                        type="button"
                                        onClick={() => setShowModal(false)}
                                    >
                                        Close
                                    </button>
                                    <button
                                        className="bg-blue-500 text-white active:bg-blue-900 font-bold uppercase
                                        text-xs px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1
                                        mb-1 ease-linear transition-all duration-150"
                                        type="button"
                                        onClick={() => updateData()}
                                    >
                                        Save Changes
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>


                    <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
                </>
            )
            }
        </div>
    );
}