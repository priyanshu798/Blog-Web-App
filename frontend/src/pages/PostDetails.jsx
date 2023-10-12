import Comments from "../components/Comments";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import { BiEdit } from "react-icons/bi";
import { MdDelete } from "react-icons/md";


const PostDetails = () => {
  return (
    <div>
      <Navbar />
      <div className="px-8 md:px-[200px0] mt-8">
        <div className="flex justify-between items-center">
          <h1 className="text-2xl font-bold text-black md:text-3xl">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt
            sunt nesciunt harum porro cumque pariatur odio dicta veritatis
            voluptates aut.
          </h1>
          <div className="flex items-center justify-center space-x-2">
            <p>
              <BiEdit />
            </p>
            <p>
              <MdDelete />
            </p>
          </div>
        </div>
        <div className="flex items-center justify-between mt-2 md:mt-4">
          <p>@snehasishdev</p>
          <div className="flex space-x-2">
            <p>16/06/23</p>
            <p>16:55</p>
          </div>
        </div>
        <img
          src="https://venturebeat.com/wp-content/uploads/2021/09/artificial-intelligence-3706562-e1632761155672.jpg?fit=5340%2C2660&strip=all"
          className="w-ful mx-auto mt-8"
          alt=""
        />
        <p className="mx-auto mt-8">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto dolorum
          perferendis nisi aliquam tenetur atque nobis commodi odit repellat
          perspiciatis soluta magni numquam, accusantium velit animi cupiditate
          enim amet suscipit cum nam.Lorem ipsum dolor sit amet consectetur
          adipisicing elit. Deserunt, libero praesentium, obcaecati ducimus
          rerum quia ad fuga possimus labore, aperiam adipisci. Quos, dicta
          quaerat. Laboriosam, ipsum temporibus numquam amet facilis rerum
          atque!
        </p>
        <div className="flex items-center mt-8 space-x-4 font-semibold">
          <p>Categories:</p>
          <div className="flex justify-center items-center space-x-2">
            <div className="bg-gray-300 rounded-lg px-3 py-1">Tech</div>
            <div className="bg-gray-300 rounded-lg px-3 py-1">AI</div>
          </div>
        </div>
        <div className="flex flex-col mt-4">
          <h3 className="mt-6 mb-4 font-semibold">Comments</h3>
          {/* comments */}
          <Comments/>
          <Comments/>
        </div>
        {/* Write a comment */}
        <div className="w-full flex flex-col mt-4 md:flex-row">
          <input
            type="text"
            placeholder="Write a comment"
            className="md:w-[80%] outline-none px-4 mt-4 md:mt-0"
          />
          <button className="bg-black text-white px-4 py-2 md:w-[20%] mt-4 md:mt-0">Add Comment</button>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default PostDetails;
