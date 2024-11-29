// Importing React to define the functional component
import React from 'react';

// Functional component to display the weather forecast
const ForecastDisplay = ({ forecast, city }) => {
    // If no forecast data is available, return null to render nothing
    if (!forecast) return null;

    // Grouping the forecast data by date using reduce
    const groupedByDay = forecast.reduce((acc, item) => {
        const date = item.dt_txt.split(' ')[0]; // Extract the date part from `dt_txt`
        if (!acc[date]) acc[date] = []; // Initialize an array for the date if not already present
        acc[date].push(item); // Add the forecast entry to the corresponding date
        return acc;
    }, {});

    // Mapping each grouped date to a summary of its daily forecast
    const dailyForecasts = Object.entries(groupedByDay).map(([date, entries]) => {
        const tempMins = entries.map((entry) => entry.main.temp_min); // Array of minimum temperatures
        const tempMaxs = entries.map((entry) => entry.main.temp_max); // Array of maximum temperatures

        return {
            date, // The date for the forecast
            temp: entries[0].main.temp.toFixed(1), // Current temperature (from the first entry)
            temp_min: Math.min(...tempMins).toFixed(1), // Minimum temperature of the day
            temp_max: Math.max(...tempMaxs).toFixed(1), // Maximum temperature of the day
            humidity: entries[0].main.humidity, // Humidity level (from the first entry)
            wind: entries[0].wind.speed, // Wind speed (from the first entry)
            description: entries[0].weather[0].description, // Weather description
            icon: entries[0].weather[0].icon, // Weather icon code
        };
    });

    // Rendering the forecast data
    return (
        <div style={styles.container}> {/* Container for the forecast display */}
            <div style={styles.cityInfo}> {/* Header section displaying the city name */}
                <h2>{city}</h2>
            </div>
            <div style={styles.forecastContainer}> {/* Container for daily forecast cards */}
                {dailyForecasts.map((day) => (
                    <div key={day.date} style={styles.card}> {/* Individual forecast card */}
                        <h3>{new Date(day.date).toDateString()}</h3> {/* Display formatted date */}
                        {/* Weather icon */}
                        <img
                            src={`http://openweathermap.org/img/wn/${day.icon}@2x.png`} // Weather icon URL
                            alt={day.description} // Alt text for the icon
                            style={styles.icon} // Styling for the icon
                        />
                        {/* Display weather description */}
                        <p style={styles.description}><i>{day.description}</i></p>
                        {/* Display temperature and additional weather details */}
                        <h4 style={styles.temp}>Temp: {day.temp}°C</h4>
                        <p style={styles.maxTemp}>Max Temp: {day.temp_max}°C</p>
                        <p style={styles.minTemp}>Min Temp: {day.temp_min}°C</p>
                        <p>Humidity: {day.humidity}%</p> {/* Humidity percentage */}
                        <p>Wind: {day.wind} m/s</p> {/* Wind speed in meters per second */}
                    </div>
                ))}
            </div>
        </div>
    );
};

const styles = {
  container: {
      marginTop: '20px',
  },
  cityInfo: {
      marginBottom: '20px',
      color: '#fff',
      textAlign: 'center',
  },
  forecastContainer: {
      display: 'flex',
      justifyContent: 'space-around', 
      flexWrap: 'wrap', 
      gap: '20px', 
      marginTop: '20px',
  },
  card: {
      background: 'rgba(0, 0, 0, 0.8)', 
      borderRadius: '15px',
      padding: '20px',
      width: '200px', 
      textAlign: 'center',
      color: '#fff',
      boxShadow: '0 6px 12px rgba(0, 0, 0, 0.4)', 
      transition: 'transform 0.3s ease', 
  },
  cardHover: {
      transform: 'scale(1.05)', 
      boxShadow: '0 10px 20px rgba(0, 0, 0, 0.6)',
  },
  icon: {
      width: '70px', 
      margin: '15px 0',
  },
  description: {
      color: '#f39c12',
      fontStyle: 'italic',
      marginBottom: '10px',
  },
  temp: {
      fontSize: '1.3rem',
      margin: '10px 0',
  },
  maxTemp: {
      color: '#e74c3c',
      fontWeight: 'bold',
  },
  minTemp: {
      color: '#3498db',
      fontWeight: 'bold',
  },
};

export default ForecastDisplay;
