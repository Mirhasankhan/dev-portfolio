import { Progress } from "antd";

const Skill = ({ data }: { data: { image: string, skillName: string } }) => {
    return (
        <div className="bg-black flex flex-col items-center rounded-md bg-opacity-40 p-4">
            <img className="h-12 w-12 rounded-md" src={data.image} alt="" />
            <h2 className="text-white font-semibold py-2">{data.skillName}</h2>
            <Progress percent={70} status="active" />
        </div>
    );
};

export default Skill;