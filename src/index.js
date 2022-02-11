import React from "react";
import ReactDOM from "react-dom";
//css
import "./index.css";

const book1 = {
  img: "https://m.media-amazon.com/images/I/81WdStiLuFL._AC_UY218_.jpg",
  title: "Book 1",
  job: "Developer",
  author: "Book_1 author",
};
const book2 = {
  img: "https://m.media-amazon.com/images/I/81WdStiLuFL._AC_UY218_.jpg",
  title: "Book 2",
  job: "Develope2",
  author: "Book_2 author",
};
const book3 = {
  img: "https://m.media-amazon.com/images/I/81WdStiLuFL._AC_UY218_.jpg",
  title: "Book 3",
  job: "Developer3",
  author: "Book_3 author",
};

function Booklist() {
  return (
    <section className="booklist">
      <Book
        job={book1.job}
        img1={book1.img}
        title1={book1.title}
        author1={book1.author}
      >
        <p></p>
      </Book>
      <Book job="Web Designer" img1={book2.img} />
      <Book job={book2.job} img1={book3.img} />
    </section>
  );
}

const Book = ({ job, img1, author1 }) => {
  //const { job, img1, author1 } = props;<h3>{props.job}</h3>
  return (
    <div className="books">
      <img src={img1} alt="" />
      <h3>{job}</h3>

      <p>Auther:{author1}</p>
    </div>
  );
};

ReactDOM.render(<Booklist></Booklist>, document.getElementById("root"));
