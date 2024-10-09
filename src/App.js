import React, { useState } from 'react';
import './App.css';
import { BrowserAgent } from '@newrelic/browser-agent';



function App() {
  const [apiData, setApiData] = useState([]);
  const [numbers, setNumbers] = useState('');
  var agent=new BrowserAgent();

  // Function to fetch data from an open-source API (e.g., JSONPlaceholder)
  const fetchApiData = async () => {
    setNumbers(''); // Clear the numbers when fetching API data
    try {
  
 
      for (let i = 1; i <= 1000; i++) {
        console.log('I am executing');
        agent.log('I am calling my placeholder API - Log loop' +i , {level: 'debug'});
      }
      
      // saves a log event with:
      // a message of --> 'my log message'
      // a level of --> 'debug'
      // an attribute of --> 'myFavoriteApp: true'
      const response = await fetch('https://jsonplaceholder.typicode.com/posts/1'); // Sample API
      const data = await response.json();
      setApiData([data]); // Convert to array to display as table rows
    } catch (error) {
      console.error('Error fetching API data:', error);
    }
  };

  // Function to fetch another open-source API (e.g., Random Dog API)
  const fetchAnotherApiData = async () => {
    setNumbers(''); // Clear the numbers when fetching API data
    try {

      for (let i = 1; i <= 1000; i++) {
        console.log('I am executing');
        agent.log('I am calling my Second API - Log loop' +i , {level: 'debug'});
      }
      

      const response = await fetch('https://dog.ceo/api/breeds/image/random'); // Sample API
      const data = await response.json();
      setApiData([data]); // Convert to array to display as table rows
    } catch (error) {
      console.error('Error fetching API data:', error);
    }
  };

  // Function to print numbers from 1 to 100,000
  const printNumbers = () => {

    for (let i = 1; i <= 1000; i++) {
      console.log('I am executing');
      agent.log('I am just Printing Numbers- Log loop' +i , {level: 'debug'});
    }
    


    setApiData([]); // Clear the API data when printing numbers
    let numberList = '';
    for (let i = 1; i <= 100000; i++) {
      numberList += i + ' ';
    }
    setNumbers(numberList);
  };

  return (
    <div className="App">
      <header className="App-header">
        <h1>API Data Fetcher</h1>
        <div className="button-container">
          {/* Button to fetch data from the first API */}
          <button className="fetch-button" onClick={fetchApiData}>Fetch Data from API 1</button>

          {/* Button to fetch data from the second API */}
          <button className="fetch-button" onClick={fetchAnotherApiData}>Fetch Data from API 2</button>

          {/* Button to print numbers from 1 to 100,000 */}
          <button className="fetch-button" onClick={printNumbers}>Print Numbers from 1 to 100,000</button>
        </div>

        {/* Display fetched API data in table format */}
        {apiData.length > 0 && (
          <table className="data-table">
            <thead>
              <tr>
                {Object.keys(apiData[0]).map((key) => (
                  <th key={key}>{key}</th>
                ))}
              </tr>
            </thead>
            <tbody>
              {apiData.map((data, index) => (
                <tr key={index}>
                  {Object.values(data).map((value, i) => (
                    <td key={i}>{JSON.stringify(value)}</td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        )}

        {/* Display numbers from 1 to 100,000 */}
        {numbers && (
          <p className="number-list">{numbers}</p>
        )}
      </header>
    </div>
  );
}

export default App;
