import img1 from "../assets/images/woman-beach.jpg";
import img2 from "../assets/images/escalator-blue.jpg";
import img3 from "../assets/images/woman-chair-sunshine.jpg";
import img4 from "../assets/images/woman-bikini.jpg";
import img5 from "../assets/images/woman-feeling.jpg";
import img6 from "../assets/images/woman-pretty.jpg";

const Gallery = () => {
  return (
    <div className="text-white">
      <h2>Gallery</h2>
      <hr />
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum ullam,
        architecto deserunt consectetur quo itaque repudiandae? Nostrum,
        pariatur voluptate? Saepe rem suscipit dignissimos quo accusamus
        repellat beatae nihil deserunt laborum!
      </p>
      <div>
        {/* add filters here */}
        <div className="grid grid-cols-3 gap-3">
          <div className="row-span-2">
            <img src={img1} alt="" />
          </div>
          <div className="">
            <img src={img3} alt="" srcset="" />
          </div>
          <div className="row-span-2">
            <img src={img6} alt="" srcset="" />
          </div>
          <div className="">
            <img src={img5} alt="" srcset="" />
          </div>
          <div className="row-span-2">
            <img src={img2} alt="" srcset="" />
          </div>
          <div className="">
            <img src={img4} alt="" srcset="" />
          </div>
        </div>
      </div>
      <br />
    </div>
  );
};

export default Gallery;
