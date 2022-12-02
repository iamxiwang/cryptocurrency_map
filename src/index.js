const { async } = require("regenerator-runtime");

        google.charts.load('current', {
        'packages':['geochart'],
        });
        google.charts.setOnLoadCallback(drawRegionsMap);

        function drawRegionsMap() {
            var data = google.visualization.arrayToDataTable([
                ['Country', 'Popularity'],
                ['Germany', 600],
                ['United States', 700],
                ['Brazil', 400],
                ['Canada', 500],
                ['France', 200],
                ['RU', 200],
                ['China', 700]
            ]);

            var options = {}

            var chart = new google.visualization.GeoChart(document.getElementById('regions_div'));

            chart.draw(data, options);
        }

        const map = document.querySelector("#regions_div")
        map.addEventListener("click",  (e) => {
             
            e.geolocation.getCurrentLocation()
        })
