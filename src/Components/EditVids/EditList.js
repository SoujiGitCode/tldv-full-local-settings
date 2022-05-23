import {Fragment} from "react";
import defaultThumbnail from "../../Assets/Images/no-img.webp";
import EditModal from "./Modal";

const EditList = ({video, setLoader, setReload}) => {

    return (
        <Fragment>
            <tr
                className="bg-white bg-gray-100 border-b  border-cyan-700 hover:bg-gray-300 ">
                <td className="p-3 text-sm text-gray-700">
                    <div
                        className=" h-16 md:h-32  flex content-center justify-center px-2 py-3 group">
                        <img
                            src={video?.thumbnail !== "" ? video?.thumbnail : defaultThumbnail}
                            alt=""
                            className=" max-h-full"/>
                    </div>

                    <EditModal
                        setLoader={setLoader}
                        setReload={setReload}

                        id={video?.id}
                        thumbnail={video?.thumbnail}
                        url={video?.url}
                        tittle={video?.tittle}
                        slug={video?.slug}
                        isPublic={video?.isPublic}
                    />
                </td>
                <td className="p-3 text-sm text-gray-700">
                    {video.tittle}
                </td>
                <td className="p-3 text-sm text-gray-700">
                    {video.url}
                </td>
                <td className="p-3 text-sm text-gray-700">
                    {video.slug}
                </td>
                <td className="px-6 py-2 text-left">

                <span className={`p-1.5 text-xs  uppercase tracking-wider rounded-lg bg-opacity-60 ${video.isPublic ?
                    "text-blue-100 bg-blue-900" : "text-red-100 bg-red-900"}`}>
                    {video.isPublic === true ?
                        "Public" : "Hidden"
                    }
                </span>

                </td>
            </tr>
        </Fragment>
    )
}

export default EditList