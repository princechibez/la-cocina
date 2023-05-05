import { AiOutlineHeart } from "react-icons/ai";
import cardImage from "../assets/dish1.png";
import { Link } from "react-router-dom";

const RecipeCard = ({ title, description, imgUrl, id }) => {
  return (
    <div className="max-w-[400px] rounded-[10px] p-1 pb-4" style={cardStyle}>
      <Link to={`/recipes/${id}`}>
        <div>
          <div className="relative">
            <img src={imgUrl} alt="alt" className="rounded-lg -z-30" />
            <div className="absolute w-[36px] h-[36px] right-[8%] top-[16px] bg-[#DA0A0A] rounded-[100px] border-0">
              <div className="absolute w-[20px] h-[20px]" style={heartWrapperStyle}>
                <div className="absolute flex justify-center items-center">
                  <AiOutlineHeart className="text-white text-2xl font-bold" />
                </div>
              </div>
            </div>
          </div>
          <div className="my-5 p-2">
            <h3 className="font-[600] text-[24px] text-[#DA0A0A] py-2 pb-3">{title}</h3>
            <p className="text-[16px] font-[400]">{description}</p>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default RecipeCard;

const cardStyle = {
  boxShadow: "4px 1px 22px -6px rgba(0, 0, 0, 0.15)",
};

const heartWrapperStyle = {
  left: "calc(50% - 22px/2)",
  top: "calc(50% - 22px/2)",
};
