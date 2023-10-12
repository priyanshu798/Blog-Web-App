const HomePosts = () => {
  return (
    <div className="w-full flex mt-8 space-x-4">
      {/* left */}
      <div className="w-[35%] h-[200px] flex justify-center items-center">
        <img
          src="https://venturebeat.com/wp-content/uploads/2021/09/artificial-intelligence-3706562-e1632761155672.jpg?fit=5340%2C2660&strip=all"
          alt=""
          className="h-full w-full object-cover"
        />
      </div>
      {/* right */}
      <div className="flex flex-col w-[65%]">
        <h1 className="text-xl font-bold md:mb-2 mb-1 md:text-2xl">
          10 Uses of AI in Day to Day life
        </h1>
        <div className="flex mb-2 text-sm font-semibold text-gray-500 items-center justify-between md:md-4">
          <p>@snehasishdev</p>
          <div className="flex space-x-2">
            <p>16/06/23</p>
            <p>16:55</p>
          </div>
        </div>
        <p className="text sm: md:text-lg">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nam, error.
          Deleniti ab maxime nesciunt laborum labore nemo eligendi perferendis
          magni, eum nobis libero tempore voluptates dolorum molestias sint odio
          similique quae. Saepe.
        </p>
      </div>
    </div>
  );
};

export default HomePosts;
