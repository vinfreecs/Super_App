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
import { useState } from "react";

export default function Category() {
  const [categoryList,setCategoryList] = useState([
    {
      categoryTitle: "Action",
      backgroundColor: "#FF5209",
      imgSrc: action,
      selected:false
    },
    {
      categoryTitle: "Drama",
      backgroundColor: "#D7A4FF",
      imgSrc: drama,
      selected:false
    },
    {
      categoryTitle: "Romance",
      backgroundColor: "#148A08",
      imgSrc: romance,
      selected:false
    },
    {
      categoryTitle: "Thriller",
      backgroundColor: "#84C2FF",
      imgSrc: thriller,
      selected:false
    },
    {
      categoryTitle: "Western",
      backgroundColor: "#902500",
      imgSrc: western,
      selected:false
    },
    {
      categoryTitle: "Horror",
      backgroundColor: "#7358FF",
      imgSrc: horror,
      selected:false
    },
    {
      categoryTitle: "Fantasy",
      backgroundColor: "#FF4ADE",
      imgSrc: fantasy,
      selected:false
    },
    {
      categoryTitle: "Music",
      backgroundColor: "#E61E32",
      imgSrc: music,
      selected:false
    },
    {
      categoryTitle: "Fiction",
      backgroundColor: "#6CD061",
      imgSrc: fiction,
      selected:false
    },
  ])
  const [selectedCategories, setSelectedCategories] = useState([]);
  const [showWarning, setShowWarning] = useState(false);
  const handleSelectCategory = (e) => {
    let nameEle = e.target.name ? e.target.name : e.target.textContent;
    let add = true;
    for (let i = 0; i < selectedCategories.length; i++) {
      if (selectedCategories[i] === nameEle) {
        add = false;
        setCategoryList((prevState)=>{
          prevState.map((ele)=>{
            if(ele.categoryTitle === nameEle){
              ele.selected = false;
            }
          })
          return prevState
        })
        setSelectedCategories((prevState) => {
          let newState = prevState.filter((ele) => ele != nameEle);
          return newState;
        });
        break
      }
    }
    if (add) {
      setCategoryList((prevState)=>{
        prevState.map((ele)=>{
          if(ele.categoryTitle === nameEle){
            ele.selected = true;
          }
        })
        return prevState
      })
      setSelectedCategories((prevState) => {
        
        setShowWarning(false);
        return [...prevState, nameEle];
      });
    }
  };
  const handleDelete = (e) => {
    setCategoryList((prevState)=>{
      prevState.map((ele)=>{
        if(ele.categoryTitle === e.target.name){
          ele.selected = false;
        }
      })
      return prevState
    })
    setSelectedCategories((prevState) => {
      let newState = prevState.filter((ele) => ele != e.target.name);
      return newState;
    });
  };

  const handleNextBtn = () => {
    if (selectedCategories.length < 3) setShowWarning(true);
    else {
      let check = JSON.parse(localStorage.getItem("userData"));
      console.log(check);
      check = { ...check, categories: selectedCategories };
      JSON.stringify(check);
      console.log(check);
      localStorage.setItem("userData", JSON.stringify(check));
    }
  };
  const items = categoryList.map((ele, index) => (
    <button
      key={index}
      name={ele.categoryTitle}
      className={ele.selected ? "category-container selected" :"category-container"}
      style={{ backgroundColor: ele.backgroundColor }}
      onClick={handleSelectCategory}
    >
      <p name={ele.categoryTitle}>{ele.categoryTitle}</p>
      <img name={ele.categoryTitle} src={ele.imgSrc} alt="" />
    </button>
  ));
  const selectedItems = selectedCategories.map((ele, index) => (
    <div key={index} className="selected-category">
      <p>{ele}</p>
      <button name={ele} onClick={handleDelete}>
        X
      </button>
    </div>
  ));
  return (
    <>
      <div className="category-wrapper">
        <div className="category-left-wrapper">
          <h1>Super app</h1>
          <p>Choose your entertainment category</p>
          <div className="selected-categories">{selectedItems}</div>
          {showWarning && (
            <div className="warning-txt">
              <img src={warning} alt="" />
              <p>Minimum 3 category required</p>
            </div>
          )}
        </div>
        <div className="category-right-wrapper">{items}</div>
        <button className="next-btn" onClick={handleNextBtn}>
          Next Page
        </button>
      </div>
    </>
  );
}
