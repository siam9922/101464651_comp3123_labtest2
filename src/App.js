// Importing React and useState for managing component state
import React, { useState } from 'react';

// Importing custom components for the app
import SearchBar from './components/SearchBar'; // Search bar component for user input
import ForecastDisplay from './components/ForecastDisplay'; // Component to display the weather forecast

// Importing the API service function to fetch forecast data
import { fetchForecast } from './services/apiService';

// Importing the application's CSS for styling
import './App.css';

// Main App component
const App = () => {
    // State for holding forecast data returned from the API
    const [forecastData, setForecastData] = useState(null);

    // State for holding any error messages, e.g., when the city is not found
    const [error, setError] = useState('');

    // Function to handle the search operation when a city is searched
    const handleSearch = async (city) => {
        try {
            // Fetch the forecast data for the given city
            const data = await fetchForecast(city);

            // Update the state with the fetched data
            setForecastData(data);

            // Clear any previous error messages
            setError('');
        } catch (err) {
            // If an error occurs, display an appropriate error message
            setError('City not found! Please try again.');
        }
    };

    // Rendering the app UI
    return (
        <div style={styles.container}> {/* Outer container for styling */}
            <div style={styles.mainCard}> {/* Main card styling */}
                <h1 style={styles.header}>Weather Forecast</h1> {/* App header */}
                
                {/* Search bar for entering the city name */}
                <SearchBar onSearch={handleSearch} />

                {/* Display an error message if there's an error */}
                {error && <p style={styles.error}>{error}</p>}

                {/* Display the forecast data if it's available */}
                {forecastData && (
                    <ForecastDisplay 
                        forecast={forecastData.list} // Pass the forecast list to the display component
                        city={forecastData.city.name} // Pass the city name to the display component
                    />
                )}
            </div>
        </div>
    );
};

const styles = {
  container: {
      fontFamily: '"Roboto", sans-serif',
      minHeight: '100vh',
      background: 'linear-gradient(to bottom, rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 0.9)), url(https://images.unsplash.com/photo-1561484930-5f7fd05026a0) no-repeat center center/cover', // Darkened image with gradient
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      padding: '20px',
  },
  mainCard: {
      background: 'rgba(255, 255, 255, 0.1)', 
      backdropFilter: 'blur(15px)', 
      WebkitBackdropFilter: 'blur(15px)', 
      border: '1px solid rgba(255, 255, 255, 0.2)', 
      padding: '40px',
      borderRadius: '25px', 
      textAlign: 'center',
      color: '#ffffff', 
      boxShadow: '0 10px 30px rgba(0, 0, 0, 0.5)', 
      width: '80%',
      maxWidth: '800px',
      transition: 'transform 0.3s ease, box-shadow 0.3s ease', 
  },
  header: {
      fontSize: '3rem',
      fontWeight: 'bold',
      color: '#50c878', 
      marginBottom: '20px',
      textShadow: '2px 2px 10px rgba(80, 200, 120, 0.7)', 
  },
  error: {
      color: '#ff4d4f', 
      fontWeight: '600',
      margin: '15px 0',
      fontSize: '1.2rem',
  },
  
  mainCardHover: {
      transform: 'translateY(-10px)', 
      boxShadow: '0 15px 40px rgba(0, 0, 0, 0.7)', 
  },
};


export default App;
