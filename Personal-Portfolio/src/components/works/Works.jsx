import { useState } from "react";
import "./works.scss";

export default function Works() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const data = [
    // {
    //   id: "1",
    //   icon: "./assets/mobile.png",
    //   title: "Shopping Website",
    //   desc:
    //     "Developed a full-featured e-commerce website with functionalities similar to Flipkart, enabling seamless shopping, product browsing, and secure transactions.",
    //   img:
    //     "https://99designs-blog.imgix.net/blog/wp-content/uploads/2018/10/attachment_100040756-e1538485934255.jpeg?auto=format&q=60&fit=max&w=930",
    //   gitLink: 'https://github.com/aryadishant414/MERN_FLIPKART_2024',
    //   // liveDemo: '/',
    // },
    // {
    //   id: "2",
    //   icon: "./assets/globe.png",
    //   title: "Movie Application",
    //   desc:
    //     "Built a dynamic movie app using React, featuring movie browsing, search, and detailed information for an enhanced user experience.",
    //   img:
    //     "https://i.pinimg.com/originals/e9/c9/2f/e9c92f7869d682a6fa5a97fb8a298f30.jpg",
    //   gitLink: 'https://github.com/aryadishant414/movieApp2024',
    //   // liveDemo: '/',
    // },
    // {
    //   id: "3",
    //   icon: "./assets/writing.png",
    //   title: "Branding",
    //   desc:
    //     "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
    //   img:
    //     "https://i.pinimg.com/originals/a9/f6/94/a9f69465d972a004ad581f245d6ad581.jpg",
    // },



    {
      id: "1",
      icon: "./assets/mobile.png",
      title: "Shopping Website",
      desc:
        "Developed a full-featured e-commerce website with functionalities similar to Flipkart, enabling seamless shopping, product browsing, and secure transactions.",
      img:
        "https://cdn.dribbble.com/userupload/8627406/file/original-00075081fc348a864a534261c8078ab0.png?resize=1200x900&vertical=center",
      gitLink: 'https://github.com/aryadishant414/MERN_FLIPKART_2024',
      // liveDemo: '/',
    },
    {
      id: "2",
      icon: "./assets/globe.png",
      title: "Movie Application",
      desc:
        "Built a dynamic movie app using React, featuring movie browsing, search, and detailed information for an enhanced user experience.",
      img:
        "https://cdn.dribbble.com/userupload/16314060/file/original-5145dc0a3df723c0cb40707ff2f07d8e.png?resize=1200x900&vertical=center",
      gitLink: 'https://github.com/aryadishant414/movieApp2024',
      // liveDemo: '/',
    },
    {
      id: "3",
      icon: "./assets/globe.png",
      title: "Trading Leaderboard",
      desc:
        "An interactive trading system leaderboard showcasing the top 10 leaders based on their trading performance and rankings.",
      img:
        "https://cdn.dribbble.com/userupload/15666775/file/original-9fd6e78dea6dbfae98955bbed30f4493.png?resize=1200x901&vertical=center",
      gitLink: 'https://github.com/aryadishant414/TradingSystemLeaderboard2024',
      // liveDemo: '/',
    },
    {
      id: "4",
      icon: "./assets/globe.png",
      title: "Blog Website",
      desc:
        "A dynamic blog website featuring engaging articles, seamless navigation, and personalized content for readers.",
      img:
        "https://cdn.dribbble.com/userupload/5300978/file/original-63652306e44124f3352690b835c86e55.jpg?resize=1200x900&vertical=center",
      gitLink: 'https://github.com/aryadishant414/megaBlogWebsite',
      // liveDemo: '/',
    },
    {
      id: "5",
      icon: "./assets/globe.png",
      title: "Brand Page",
      desc:
        "A sleek single-page brand website showcasing the essence of the brand through captivating visuals and concise storytelling.",
      img:
        "https://cdn.dribbble.com/userupload/16488421/file/original-6d6be5aed9e7303620a1144f904b31ff.jpg?resize=1200x900&vertical=center",
      gitLink: 'https://github.com/aryadishant414/brand-page',
      // liveDemo: '/',
    },
    {
      id: "6",
      icon: "./assets/globe.png",
      title: "Dice Game",
      desc:
        "A fun and interactive dice game where players test their luck and strategy with each roll.",
      img:
        "https://cdn.dribbble.com/userupload/14396095/file/original-5e45ae03ce9065af6851e64b3fa8fdf4.jpg?resize=1200x900&vertical=center",
      gitLink: 'https://github.com/aryadishant414/Dice-Game',
      // liveDemo: '/',
    },
    {
      id: "7",
      icon: "./assets/globe.png",
      title: "Foody Zone",
      desc:
        "An intuitive food discovery website, offering a wide range of restaurants, dishes, and seamless online ordering experiences.",
      img:
        "https://cdn.dribbble.com/users/508588/screenshots/4942666/media/ac35cd08bc5dc1d3c0b73671711bab26.jpg?resize=800x600&vertical=center",
      gitLink: 'https://github.com/aryadishant414/Foody-Zone',
      // liveDemo: '/',
    },
    {
      id: "8",
      icon: "./assets/globe.png",
      title: "To Do List",
      desc:
        "A simple and efficient to-do list app that allows users to create, read, update, and delete tasks for better task management.",
      img:
        "https://cdn.dribbble.com/userupload/14124616/file/original-2f1d19559f30d37af42774ed286b7450.png?resize=1200x900&vertical=center",
      gitLink: 'https://github.com/aryadishant414/Firebase-CRUD',
      // liveDemo: '/',
    },









  ];

  const handleClick = (way) => {
    way === "left"
      ? setCurrentSlide(currentSlide > 0 ? currentSlide - 1 : 7)
      : setCurrentSlide(currentSlide < data.length - 1 ? currentSlide + 1 : 0);
  };
  
  return (
    <div className="works" id="works">
      <div
        className="slider"
        style={{ transform: `translateX(-${currentSlide * 100}vw)` }}
      >
        {data.map((d) => (
          <div className="container">
            <div className="item">
              <div className="left">
                <div className="leftContainer">
                  <div className="imgContainer">
                    <img src={d.icon} alt="" />
                  </div>
                  <h2>{d.title}</h2>
                  <p>{d.desc}</p>
                  <a href={`${d.gitLink}`}><span>See Code on Githhub</span></a>
                  {/* <a href={`${d.liveDemo}`}><span>View Live Demo</span></a> */}
                </div>
              </div>
              <div className="right">
              <img
                src={d.img}
                alt={d.title} // Optional: Alt text
              />
              </div>
            </div>
          </div>
        ))}
      </div>
      <img
        src="assets/arrow.png"
        className="arrow left"
        alt=""
        onClick={() => handleClick("left")}
      />
      <img
        src="assets/arrow.png"
        className="arrow right"
        alt=""
        onClick={() => handleClick()}
      />
    </div>
  );
}