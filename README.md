# Life Expectancy Data Visualization
by [Xi Wang](https://www.linkedin.com/in/xi-wang-7b00bb25a/)

A project build to visualize the OECD(Organization for Economic
Co-operation and Development) countries's life expectancy at birth
[Live Link](https://iamxiwang.github.io/life_expectancy/)

Table of Contents
---
1) Background

2) Functionality and MVP's

3) Technologies, Libraries, and API's

4) Other Resources


## Backgroud


The Organization for Economic Co-operation and Development (OECD) was established in 1960 with 20 signatory countries. Today, 18 countries are members of the OECD.

One of the important metrics that the OECD tracks is life expectancy at birth. This is the average amount of time a newborn can expect to live. The OECD also tracks deaths caused by various types of cancer. Cancer is a complex disease with more than 100 different forms, and the risk of developing it increases with age. The Potential Years of Life Lost (PYLL) metric takes into account the age at which people die from cancer and the number of remaining years they would have lived, assuming a maximum limit of 75 years.

This project is built using vanilla JavaScript and Google Charts to visualize the life-related data from the OECD. The data is sourced from the OECD database, which contains hundreds of statistical time series for the organization and selected non-member countries. The database covers a wide range of topics such as agriculture, education, energy, health, and government, and allows for data exploration by country. The available data is in the form of CSV files.
   
    

## Functionality and MVP's

The Life Expectancy Visualizer allows users to access the latest data from the OECD on various life-related metrics. With this tool, users can:

+ View the life expectancy at birth, suicide rates, and Potential Years of Life Lost (PYLL) per 100,000 people of various countries.
+ Interact with the data using dynamic and interactive graphs, charts, and data visualizations. Users can explore the data by hovering over different regions and clicking on specific countries to view more detailed information.
+ See the data presented in a variety of stylized and visually appealing representations, including world maps and bar graphs. By moving the mouse over the world map, users can see a box highlighting the country under the cursor. Additionally, by clicking on the button to the right of the map, users can access three different types of charts showcasing the suicide rates, death from cancer, and PYLL of various countries.

## Technologies, Libraries, and API's

### Google Chart Tools Are Powerful, Simple to Use, and Free.

#### In html <head> section, add this two lines. loading the charts library (This line of code Load the AJAX API.)
    
```html
    <head>
        <script src="https://www.gstatic.com/charts/loader.js"></script>
        <script type="text/javascript" src="https://www.gstatic.com/charts/loader.js"></script>
    </head>
```

#### Load the Visualization API and the chart package. Set a callback to run when the Google Visualization API is loaded.

```javascript
        google.charts.load('current', {'packages':['type_of_chart']});
        google.charts.setOnLoadCallback(drawChart);
```

#### Draw chart:
       data form javacript file:
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

#### Or You can build it from google spreed sheets:

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
* [OEDC Data](https://www.oecd.org/)
* [Google Visualization API](https://developers.google.com/chart/interactive/docs/reference)
* [Emoji Tools](https://fontawesome.com/)



 



