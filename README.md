Weather Forecast App
This application provides a 5-day weather forecast for a selected city. The app displays key weather information, including temperature, humidity, wind speed, and weather conditions, using a clean and minimalistic design.

Output Description

1. Application Header
A green glowing header with the text "Weather Forecast."
A search bar allows users to input the name of any city to retrieve its weather data.
A "Search" button triggers the weather search functionality.

2. City Information
The city name (e.g., "East York") is displayed below the search bar to indicate the selected city.

3. Weather Forecast Cards
The app displays weather information for each day in individual cards.
Each card includes:
Date: The day and date of the forecast (e.g., "Thu Nov 28 2024").
Weather Icon: An icon representing the weather condition (e.g., cloud for "overcast clouds").
Weather Description: A short description of the condition (e.g., "scattered clouds").
Current Temperature: Displayed prominently (e.g., "Temp: 5.2°C").
Maximum and Minimum Temperatures: Highlighted with red and blue colors for better clarity.
Humidity: Displayed as a percentage.
Wind Speed: Measured in meters per second (m/s).
Example Output
City: East York
Date	Weather	Temp	Max Temp	Min Temp	Humidity	Wind Speed
Thu Nov 28 2024	Overcast Clouds	5.2°C	5.2°C	-1.2°C	77%	7.3 m/s
Fri Nov 29 2024	Scattered Clouds	-0.6°C	1.5°C	-4.8°C	60%	6.23 m/s
Visual Example
Header and Forecast Cards

Explanation
The app layout is divided into three sections:

Header Section:
The app title and search bar for user input.
City Name Section:
Displays the selected city name dynamically.
Forecast Cards Section:
Dynamically generated cards containing daily weather information.
The forecast information is fetched from the OpenWeatherMap API, parsed, and displayed in an intuitive format.

How to Use the App
Enter the city name in the search bar.
Click on the "Search" button.
The app fetches and displays the 5-day weather forecast for the selected city in the form of individual cards.