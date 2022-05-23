import {useState} from "react";
import axios from "axios"
import {Fragment} from "react";
import Swal from "sweetalert2";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faPlus} from "@fortawesome/free-solid-svg-icons";

const AddVids = () => {

    //Vids Component Logic//

    const [tittle, setTittle] = useState("")
    const [slug, setSlug] = useState("")
    const [url, setUrl] = useState("")
    const [thumbnail, setThumbnail] = useState("")
    const [status, setStatus] = useState("1")

    const requestData = {
        "data": {
            "tittle": tittle, "slug": slug, "url": url, "thumbnail": thumbnail,
            "isPublic": status === "1"
        }
    }

    const resetFields = () => {
        setTittle("")
        setSlug("")
        setThumbnail("")
        setUrl("")
        setStatus("1")
    }

    async function addVideo() {
        await Swal.fire({
            title: 'Adding New Video?',
            text: "a new video will be added to the playlist with the data you provided ",
            icon: 'success',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Confirm',
            cancelButtonText: 'Cancel',
        }).then(async (result) => {
            if (result.isConfirmed) {
                await axios.post(`/videos/`, requestData).then(async (res) => {
                    resetFields()
                    await Swal.fire(
                        res?.data !== null ? 'Created!' : 'Error',
                        res?.data !== null ? 'Video succesfully added'
                            : 'contact with an operator',
                        res?.data !== null ? 'success' : "error"
                    )
                });
            }
        })
    }

    return (
        <Fragment>
            {/* ADD Component */}
            <div className="overflow-auto rounded-xl shadow p-8">
                <div className="flex flex-wrap px-3 mb-6">
                    <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0 mt-4">
                        <label
                            className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                            htmlFor="tittle">
                            Tittle
                        </label>
                        <input
                            className="appearance-none block w-full bg-gray-400 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                            id="tittle" type="text" placeholder="Tittle of the video"
                            value={tittle}
                            onChange={e => setTittle(e.target.value)}
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
                            className="appearance-none block w-full bg-gray-400 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                            id="slug" type="text" placeholder="Slug for the video"
                            value={slug}
                            onChange={e => setSlug(e.target.value)}
                        />
                    </div>

                    <div className="w-full md:w-1/2 px-3 mt-4">
                        <label
                            className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                            htmlFor="url">
                            URL
                        </label>
                        <input
                            className="appearance-none block w-full bg-gray-400 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                            id="url" type="text" placeholder="Youtube video URL"
                            value={url}
                            onChange={e => setUrl(e.target.value)}
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
                            className="appearance-none block w-full bg-gray-400 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                            id="thumbnail" type="text" placeholder="URL with Thumbnail for the video"
                            value={thumbnail}
                            onChange={e => setThumbnail(e.target.value)}
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
                                className="block appearance-none w-full bg-gray-400 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                                id="status"
                                defaultValue={status}
                                onChange={e => setStatus(e.target.value)}>

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
                <div className="flex justify-center my-6">
                    <button
                        className="bg-blue-500 text-white active:bg-blue-900 font-bold uppercase
                                        text-xs px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1
                                        mb-1 ease-linear transition-all duration-150"
                        type="button"
                        onClick={() => addVideo()}
                    >
                        Add <FontAwesomeIcon icon={faPlus} size={"lg"}/>
                    </button>
                </div>

            </div>
        </Fragment>


    )
}

export default AddVids