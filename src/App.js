import './App.css';
import axios from 'axios';
import { useEffect, useState } from 'react';

function App() {
  const [quote, setQuote] = useState('');
  const [author, setAuthor] = useState('');

  let randomNum = Math.floor(Math.random() * 10);

  useEffect(() => {
    getQuote();
  }, []);

  const getQuote = async (e) => {
    randomNum = Math.floor(Math.random() * 10);

    axios.get('https://type.fit/api/quotes').then(function(res) {
      setQuote(res.data[randomNum].text);
      setAuthor(res.data[randomNum].author);

      //console.log(res.data[0].author);
      //console.log(res.data[0].text);
    });
  }


  return (
    <>
    <div id="page">
      <div id="quote-box">
        <h1 id="text">"{quote}"</h1>
        <h2 id="author">- {author}</h2>
        <div id="bottom-row">
          <a id="tweet-quote" href="twitter.com/intent/tweet">Tweet</a>
          <button id="new-quote" onClick={getQuote}>New Quote</button>
        </div>
      </div>
    </div>
    </>
  );
}

export default App;
