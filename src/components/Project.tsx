import { FaChrome, FaGithub } from "react-icons/fa";
import FullPageScroll from "./PageScroll";


type TDetails = {
    description: string
    _id: string
    features: string
    projectName: string
    liveLink: string
    clientLink: string
    serverLink: string
}


const Project = ({ details }: { details: TDetails }) => {
    const truncatedText = details.description.length > 160 ? `${details.description.slice(0, 160)}...` : details.description;
    return (
        <div
            key={details._id}
            className=" rounded-md border border-orange-400 bg-[#1c222a] text-white mb-6 p-3"
        >
            <div className=" min-h-64">
                <div>
                    <FullPageScroll pageSS={details.features}></FullPageScroll>
                </div>
                <div>
                    <h1 className="text-center text-2xl py-2 font-semibold">
                        {details.projectName}
                    </h1>
                    <p>{truncatedText}</p>
                    <div className="flex justify-evenly mt-6">
                        <a
                            className="flex gap-2 items-center"
                            target="_blank"
                            href={details.liveLink}
                        >
                            <FaChrome className="text-xl"></FaChrome>
                            <p>Live Link</p>
                        </a>
                        <a
                            className="flex gap-2 items-center"
                            target="_blank"
                            href={details.clientLink}
                        >
                            <FaGithub className="text-xl"></FaGithub>
                            <p>Client Link</p>
                        </a>
                        <a
                            className="flex gap-2 items-center"
                            target="_blank"
                            href={details.serverLink}
                        >
                            <FaGithub className="text-xl"></FaGithub>
                            <p>Github Server</p>
                        </a>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default Project;