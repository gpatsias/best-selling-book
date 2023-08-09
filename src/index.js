import React from "react"; 
import ReactDOM from "react-dom";

// CSS
import './index.css'

function BookList() {
  return (
    <section className="booklist">
      <Book />
      <Book />
      <Book />
      <Book />
      <Book />
      <Book />
      <Book />
      <Book />
      <Book />
    </section>
  );
}

const Book = () => {
  return (
    <article className="book">
      <Image />
      <Title />
      <Author /> 
    </article>
  );
};

const Image = () => 
  <img 
    src="https://m.media-amazon.com/images/I/51p2SDOCV9L.
    _SX218_BO1,204,203,200_QL40_ML2_.jpg" 
    alt=""
  />

const Title = () => <h1>I Love You to the Moon and Back</h1>;
const Author = () => 
  <p style={{color: '#617d98', fontSize: '0.75rem', marginTop: '0.25rem'}}>
    Amelia Hepworth
  </p>;

ReactDOM.render(<BookList/>,document.getElementById('root'));

