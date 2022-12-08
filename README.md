# Life Expenctancy Data Visualization
by [Xi Wang](https://www.linkedin.com/in/xi-wang-7b00bb25a/)

A project build to visualize the OECD(Organization for Economic
Co-operation and Development) countries's life expectancy at birth
Live Link:

Table of Contents
---
---
1) Background

2) Functionality and MVP's

3) Technologies, Libraries, and API's

4) Other Resources


## Backgroud
---

    Life expectancy at birth is one of the most frequently used health status indicators. 

    I build this project using vanila javascript, google chart to visualize the data from OEDC.org countries life related data
    The data of this project is from OEDC.org.The OECD Data is a database containing hundreds of statistical time series for the Organization for Economic Cooperation and Development (OECD) and selected non-member counties. It covers broad topics including agriculture, development, education, employment, energy, environment, finance, health, and government. It also allows us to explore the data by country. Available data file formats CSV
   
    What is OEDC countries?
    On 14 December 1960, 20 countries originally signed the Convention on the Organisation for Economic Co-operation and Development. Since then, 18 countries have become members of the Organisation.

## Functionality and MVP's
---

    In life_expectancy visulizer, users will be able to:

    1) Access the the OEDC.org 2020 or latest data of life expectancy of birth, suicide rates of countries, potential years of life lost of countries per 100,1000 people.
    2) Interact with graphs, charts other data visuals with a variety of :hover and :click events.
    3) See a variety of stylized representations of data.  Move the mouse on the world map, and a box will appear in the country where the mouse is located. Click the button on the right side of the map, users will be able to see a barchart which is represented the suicide rates, death from the cancer, potential years of life lost. 

    

## Technologies, Libraries, and API's
---
    Google Chart Tools Are Powerful, Simple to Use, and Free.

    1) Put in html <head> section, loading the charts library (This line of code Load the AJAX API.)
```html
    <head>
        <script src="https://www.gstatic.com/charts/loader.js"></script>
        <script type="text/javascript" src="https://www.gstatic.com/charts/loader.js"></script>
    </head>
```

    2)  Load the Visualization API and the chart package. Set a callback to run when the Google Visualization API is loaded.
```javascript
        google.charts.load('current', {'packages':['type_of_chart']});
        google.charts.setOnLoadCallback(drawChart);
```

    3) Create the data table in javascript file. You can create a simple table by the following example:
```javascript

    function drawRegionsMap() {
        var data = google.visualization.arrayToDataTable(
            [ YOUR DATA]
        );

        var options = {
            title: 'Toppings I Like On My Pizza',
            colors: ['#f7e3dc','#f5d4c9','#f6c7b6','#ec8f6e','#db3800' ],
            backgroundColor: {fill: '#CACFD2'}}

        var chart = new google.visualization.GeoChart(document.getElementById('regions_div'));
        chart.draw(data, options);
    }
```

        Or You can build it from google spreed sheets:
```javascript
        
    let URL ="Your_URL"


    function drawColumnChart() {
        var query = new google.visualization.Query(URL);
        query.send(handleQueryResponse);
    }
    function handleQueryResponse(response) {
        if (response.isError()) {
            alert('Error in query: ' + response.getMessage() + ' ' + response.getDetailedMessage());
            return;
        }       
        var options = {
            title: "Deaths from Cancer (Total Per 100,000 persons)",
            titleTextStyle: {
                fontSize: 20,
            },
            colors: ["#088da5"],
            backgroundColor: {fill: '#CACFD2'},
            is3D: true,
            
            animation: {"startup": true, duration: 1000,
            easing: 'out'}
            }

        var data = response.getDataTable();
        var chart = new google.visualization.PieChart(document.getElementById('secondchart'));
        chart.draw(data, options);
    }


```

    



## Other Resources
---
* [OEDC Data](https://www.oecd.org/)
* [Google Visualization API](https://developers.google.com/chart/interactive/docs/reference)
* [Emoji Tools](https://fontawesome.com/)



 



