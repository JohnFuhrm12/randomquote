import './App.css';
import axios from 'axios';
import { useEffect, useState } from 'react';

import bird from './bird.png';

function App() {
  const [quote, setQuote] = useState('');
  const [author, setAuthor] = useState('');

  let randomNum = Math.floor(Math.random() * 10);
  let tweetPath = `https://twitter.com/intent/tweet?text=%22If%20you%20do%20what%20you%E2%80%99ve%20always%20done%2C%20you%E2%80%99ll%20get%20what%20you%E2%80%99ve%20always%20gotten.%22%20Tony%20Robbins`

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
            <a id="tweet-quote" target="blank" href={tweetPath}><img id="bird" src={bird}></img></a>
          <button id="new-quote" onClick={getQuote}>New Quote</button>
        </div>
      </div>
    </div>
    </>
  );
}

export default App;
