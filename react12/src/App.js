import logo from './logo.svg';
import './App.css';

const magazines = [
{id: 1, title: 'readers digest', theme: 'news and culture', isAvaliable: true},
{id: 2, title: 'The daily bugle', theme: 'daily news', isAvaliable: true},
{id: 3, title: 'The daily prophet', theme: 'Wizard news', isAvaliable: false },
];

function ZineRack() {
const listZines = magazines.map(zine =>
  <li
  keys={zine.id}
  style={{
    color: zine.isAvaliable ? 'red' : 'green'
  }}
  >
    {zine.title}
  </li>
);
return (
  <ul>{listZines}</ul>
)
}

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
        <ZineRack />
        <Bookshelf />
      </header>
    </div>
  );
}

export default App;