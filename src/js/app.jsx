import React from 'react';
import SearchBar from '../components/SearchBar';
import WeatherDisplay from '../components/WeatherDisplay';
import SearchHistory from '../components/SearchHistory';

export default class App extends React.Component {
  render() {
    return (
      <div className='container'>
        <div className='jumbotron'>
          <h1>Origin Weather Application</h1>
          <p>Always know if you'll need an umbrella</p>
        </div>
        <SearchBar />
        <div className='row'>
          <div className='col-12 col-md-6 mb-4'>
            <WeatherDisplay />
          </div>
          <div className='col-12 col-md-6 mb-4'>
            <SearchHistory />
          </div>
        </div>
      </div>
    );
  }
}
