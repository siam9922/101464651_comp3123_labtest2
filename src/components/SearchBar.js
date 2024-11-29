// Importing React and the useState hook to manage the component's local state
import React, { useState } from 'react';

// Functional component SearchBar which takes an `onSearch` function as a prop
const SearchBar = ({ onSearch }) => {
    // State to hold the user input for the city name
    const [city, setCity] = useState('');

    // Function to handle the search operation
    const handleSearch = () => {
        // Check if the input is not empty or just whitespace
        if (city.trim()) {
            // Call the onSearch function passed as a prop with the entered city name
            onSearch(city);

            // Clear the input field after the search
            setCity('');
        }
    };

    return (
        <div style={styles.searchContainer}> {/* Styling container for search bar */}
            {/* Input field for the user to enter a city name */}
            <input
                type="text"
                placeholder="Enter city (e.g., Mumbai)" // Placeholder text for guidance
                value={city} // Bind the input value to the `city` state
                onChange={(e) => setCity(e.target.value)} // Update `city` state on input change
                style={styles.input} // Inline styles for input field
            />

            {/* Button to trigger the search action */}
            <button onClick={handleSearch} style={styles.button}> {/* Styling button */}
                Search {/* Text displayed on the button */}
            </button>
        </div>
    );
};

//CSS styles for the SearchBar component

const styles = {
    searchContainer: {
        marginBottom: '20px',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
    },
    input: {
        padding: '10px',
        borderRadius: '5px 0 0 5px',
        border: '1px solid #ccc',
        width: '300px',
        outline: 'none',
    },
    button: {
        padding: '10px 20px',
        backgroundColor: '#007bff',
        color: '#fff',
        border: 'none',
        borderRadius: '0 5px 5px 0',
        cursor: 'pointer',
        transition: 'background-color 0.3s ease',
    },
};

export default SearchBar;
