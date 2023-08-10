import React from "react"; 
import ReactDOM from "react-dom";

// CSS
import './index.css'

// setup vars
const firstBook = {
  img: "https://m.media-amazon.com/images/I/51p2SDOCV9L._SX218_BO1,204,203,200_QL40_ML2_.jpg",
  author: "Amelia Hepworth",
  title: "I Love You to the Moon and Back"
}

const secondBook = {
  img: "https://images-na.ssl-images-amazon.com/images/I/91vnzZO5yPL._AC_UL300_SR300,200_.jpg",
  author: "Eric Carle",
  title: "The Very Hungry Caterpillar"
}

// const title = "I Love You to the Moon and Back";
// const author = "Amelia Hepworth";
// const img = "https://m.media-amazon.com/images/I /51p2SDOCV9L._SX218_BO1,204,203,200_QL40_ML2_.jpg";

function BookList() {
  return (
    <section className="booklist">
      <Book 
        img={firstBook.img} 
        title={firstBook.title} 
        author={firstBook.author} 
      >
        <p>Nulla duis labore nulla elit. Dolore cillum minim 
          anim fugiat eiusmod veniam id ut enim officia 
          ullamco. Dolore eu ut enim adipisicing id ad et.
        </p>
      </Book>
      <Book 
        img={secondBook.img} 
        title={secondBook.title} 
        author={secondBook.author}
      >
        <p>Esse sint eu nulla ex minim mollit anim. Reprehenderit ipsum deserunt pariatur minim reprehenderit nostrud veniam adipisicing et qui. Non et enim non consequat voluptate ut. Tempor deserunt incididunt pariatur sit est voluptate ex id nulla nisi. Esse consectetur cupidatat culpa ullamco cupidatat veniam nulla sit et ad ex sint.</p>
      </Book>
      <Book />
      <Book />
      <Book />
      <Book />
    </section>
  );
}

const Book = ({img,title,author,children}) => {
  // const {img, title, author} = props;
  return (
    <article className="book">
      <img src={img} alt="" />
      <h1>{title}</h1>
      <h4>{author}</h4>
      {children}
    </article>
  );
};

ReactDOM.render(<BookList/>,document.getElementById('root'));

