import logo from './logo.svg';
import './App.css';

const book = {
  title: 'harry potter and the chamber of secrets',
  author: 'J.k Rowling',
  published: '2008',
  image: 'https://upload.wikimedia.org/wikipedia/en/5/5c/Harry_Potter_and_the_Chamber_of_Secrets.jpg',
  width: '264',
  height: '378'
};

function Bookshelf() {
  return (
    <div>
      <h2>{book.title} ({book.published})</h2>
      <p>{book.author}</p>
      <img
      className="bookCover"
      src={book.image}
      alt={book.title + 'cover'}
      style={{
        width: book.width,
        height: book.height
      }}
      />
    </div>
  );
}

function MagicButton() {
  return (
    <div>
      <h3>This is a magic button</h3>
    <button>Magic</button>
    </div>
    
  );
}

function App() {
  return (
    <div className="App">
      <header className="App-header">
        
        <Bookshelf />
      </header>
    </div>
  );
}

export default App;