import React, { useState, useEffect } from 'react';

const QuoteApp = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    // Function to fetch the data from the API
    const fetchQuotes = async () => {
      try {
        const response = await fetch('https://dummyjson.com/quotes');
        const data = await response.json();
        setData(data.quotes.slice(0,10)); // Get the first 10 quotes
      } catch (error) {
        console.error('Error fetching quotes:', error);
      }
    };

    fetchQuotes();
  }, []);

  return (
    <div>
      <h1>Top 10 Quotes</h1>
      <ul>
        {data.map((value, index) => (
          <li key={index}>
            <p>{value.quote}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default QuoteApp;
