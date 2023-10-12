import Navbar from "../components/Navbar";
import ProfilePosts from "../components/ProfilePosts";
import Footer from "../components/Footer";

function Profile() {
  return (
    <div>
      <Navbar />
      <div className="px-8 md:px-[200px] mt-8 flex md:flex-row sm:flex-col-reverse md:items-start">
        {/* left div */}
        <div className="flex flex-col md:w-[70%] w-full">
          <h1 className="text-xl font-bold mb-4">Your Posts:</h1>
          <ProfilePosts />
          <ProfilePosts />
          <ProfilePosts />
          <ProfilePosts />
        </div>
        {/* right div */}
        <div className="flex justify-end items-start md:w-[30%] w-full md:items-end">
          <div className="flex flex-col space-y-4 items-startjlkigf">
            <h1 className="text-xl font-bold mb-4">Profile</h1>
            <input
              className="outline-none px-4 py-2 text-gray-500"
              placeholder="Your username"
              type="text"
            />
            <input
              className="outline-none px-4 py-2 text-gray-500"
              placeholder="Your email"
              type="email"
            />
            <input
              className="outline-none px-4 py-2 text-gray-500"
              placeholder="Your password"
              type="password"
            />
            <div className="flex items-center space-x-4 mt-8">
              <button className="text-white font-semibold bg-black px-4 py-2 hover:text-black hover:bg-gray-500">
                Update
              </button>
              <button className="text-white font-semibold bg-black px-4 py-2 hover:text-black hover:bg-gray-500">
                Delete
              </button>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Profile;
