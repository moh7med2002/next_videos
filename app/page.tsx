import VideoBox from "components/VideoBox";

const HomePage = () => {
  return(
      <div>
        <div className="flex justify-center items-center mb-8 mt-2 gap-x-8">
          <button className="MainButton">Random</button>
          <button className="MainButton">Recent</button>
          <button className="MainButton">Views</button>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-x-3 gap-y-8">
          {
            [1,2,3,4,5,6,7,8,9].map(item=><VideoBox key={item}/>)
          }
        </div>
      </div>
  )
};

export default HomePage;
