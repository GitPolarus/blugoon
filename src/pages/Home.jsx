import img1 from "../assets/images/aerobic-girls.jpg";
import img2 from "../assets/images/mountain-reflection.jpg";
import img3 from "../assets/images/girl-nature.jpg";
import Section from "../components/Section";
const Home = () => {
  return (
    <div className="">
      <img className="mx-auto" src={img1} alt="Aerobic" />
      <div>
        <h2 className="text-white text-4xl font-bold">Introducing Blugoon</h2>
        <hr />
        <div>
          <p>
            Blugoon is free HTML template for everyone. This is a Bootstrap
            v4.3.1 layout which you can fully customize for your websites.
            Please tell your friends about Tooplate. Thank you.
          </p>
        </div>
      </div>
      {/* second */}
      <Section button="Read More" img={img2} title="Modern Web Design">
        <p>
          You are allowed to use this template for commercial or personal
          websites. You are NOT allowed to redistribute this on template
          collection website. You can feature this template on your blog post.
        </p>
        <p>
          All photos in this template are from Pexels website. Blugoon HTML
          Template is provided by Tooplate. Class aptent taciti sociosqu ad
          litora torquent per conubia nostra.
        </p>
      </Section>
      <hr />
    </div>
  );
};

export default Home;
