import warning from "../assets/icons/warning.svg";
import action from "../assets/images/action.svg";
import thriller from "../assets/images/thriller.svg";
import drama from "../assets/images/drama.svg";
import romance from "../assets/images/romance.svg";
import fiction from "../assets/images/fiction.svg";
import fantasy from "../assets/images/fantasy.svg";
import western from "../assets/images/western.svg";
import music from "../assets/images/music.svg";
import horror from "../assets/images/horror.svg";


export default function Category() {
  const categoryList = [
    {
      categoryTitle: "Action",
      backgroundColor: "#FF5209",
      imgSrc: action,
    },
    {
      categoryTitle: "Drama",
      backgroundColor: "#D7A4FF",
      imgSrc: drama,
    },
    {
      categoryTitle: "Romance",
      backgroundColor: "#148A08",
      imgSrc: romance,
    },
    {
      categoryTitle: "Thriller",
      backgroundColor: "#84C2FF",
      imgSrc: thriller,
    },
    {
      categoryTitle: "Western",
      backgroundColor: "#902500",
      imgSrc: western,
    },
    {
      categoryTitle: "Horror",
      backgroundColor: "#7358FF",
      imgSrc: horror,
    },
    {
      categoryTitle: "Fantasy",
      backgroundColor: "#FF4ADE",
      imgSrc: fantasy,
    },
    {
      categoryTitle: "Music",
      backgroundColor: "#E61E32",
      imgSrc: music,
    },
    {
      categoryTitle: "Fiction",
      backgroundColor: "#6CD061",
      imgSrc: fiction,
    },
  ];
  const items = categoryList.map((ele, index) => (
    <div
      key={index}
      className="category-container"
      style={{ backgroundColor: ele.backgroundColor }}
    >
      <p>{ele.categoryTitle}</p>
      <img src={ele.imgSrc} alt="" />
    </div>
  ));
  return (
    <>
      <div className="category-wrapper">
        <div className="category-left-wrapper">
          <h1>Super app</h1>
          <p>Choose your entertainment category</p>
          <div className="selected-categories"></div>
          <div className="waring-txt">
            <img src={warning} alt="" />
            <p>Minimum 3 category required</p>
          </div>
        </div>
        <div className="category-right-wrapper">{items}</div>
      </div>
    </>
  );
}
