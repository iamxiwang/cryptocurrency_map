# Life Expenctancy Data Visualization
by [Xi Wang](https://www.linkedin.com/in/xi-wang-7b00bb25a/)

A project build to visualize the OECD(Organization for Economic
Co-operation and Development) countries's life expectancy at birth

Table of Contents
---
---

1) Data Source

2) Technologies, Libraries, and API's

3)  Functionality 

4) Other resources


## Data Sources
---

    Life expectancy at birth is one of the most frequently used health status indicators. 
    I use vanila javascript and google chart library to transform the data to be visualized in a world map.
    The data of this project is from OEDC.
    The OECD Data is a database containing hundreds of statistical time series for the Organization for Economic Cooperation and Development (OECD) and selected non-member counties. It covers broad topics including agriculture, development, education, employment, energy, environment, finance, health, and government. It also allows us to explore the data by country. Available data file formats CSV
   
    What is OEDC countries?
    On 14 December 1960, 20 countries originally signed the Convention on the Organisation for Economic Co-operation and Development. Since then, 18 countries have become members of the Organisation.

## Technologies, Libraries, and API's
---

    Google chart tools are powerful, simple to use, and free.

    1) Put in html <head> section, loading the charts library (This line of code Load the AJAX API.)
    <script type="text/javascript" src="https://www.gstatic.com/charts/loader.js"></script>
    <script type="text/javascript">

    2)  Load the Visualization API and the corechart package.Set a callback to run when the Google Visualization API is loaded.
        google.charts.load('current', {'packages':['type_of_chart']});
        google.charts.setOnLoadCallback(drawChart);

    3) Create the data table. You can create a simple table by the following example:
        var data = new google.visualization.DataTable();
        data.addColumn('string', 'Topping');
        data.addColumn('number', 'Slices');
        data.addRows([
            ['Mushrooms', 3],
            ['Onions', 1],
            ['Olives', 1], 
            ['Zucchini', 1],
            ['Pepperoni', 2]
        ]);
        or by a google spreed sheets.
    4) Customized Chart
        var options = {'title':'Your Chart Title',
                     'width':400,
                     'height':300};
    5) Instantiate and draw our chart, passing in some options.
      var chart = new google.visualization.PieChart(document.getElementById('chart_div'));
      chart.draw(data, options);




## Functionality

## Other Resources
* [OEDC Data](https://www.oecd.org/)
* [Google Visualization API](https://developers.google.com/chart/interactive/docs/reference)
* [emoji tools](https://fontawesome.com/)



 


