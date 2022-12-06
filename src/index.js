const { async } = require("regenerator-runtime");

import fetchCountry from "./scripts/country_api";
import popChart from "./scripts/newEmbed.js";
import drawChart from "./scripts/cancerDeath_chart.js";
import banana from './scripts/sucide_chart.js';

window.fetchCountry = fetchCountry;
window.popChart = popChart;

        google.charts.load('current', {
        'packages':['geochart'],
        'mapsApiKey': 'AIzaSyCdzK1NYD375q2eB-NknjM36fNhR0ml4_M'
        
        });
        google.charts.setOnLoadCallback(drawRegionsMap);
    
        function drawRegionsMap() {
            var data = google.visualization.arrayToDataTable(
                [
                ['Country','Life Expectancy(yrs)','Women(yrs)'],
                ['South Africa', 64.4, 67.9],
                ['Blugaria ', 71.4, 78.2],
                ['Russia', 73.2, 78.2],
                ['Lativia',73.4, 78.2],
                ['India', 69.6, 71.2],
                ['Romania',72.9, 76.7],
                ['Indonesia', 71.9, 74.2],
                ['Lithuania', 74.5, 79],
                ['Hungry',74.5, 78],
                ['Slovak Replic', 74.8, 78.3],
                ['Poland',75.6, 79.7],
                ['Estonia',76.9, 81.3],
                ['Mexico', 75.2, 78.1],
                ['Brazil', 76.1, 79.7],
                ['Argentina',76.8, 80.1],
                ['Columbia', 76.8, 80.0],
                ['Croatia',76.8, 79.9],
                ['United States', 77., 79.9],
                ['Czech Republic',77.4, 80.6],
                ['Peru',77, 79.7],
                ['China', 77.1, 79.4],
                ['Turkey', 78.6, 81.3],
                ['Greece', 80.3, 83.0],
                ['Slovenia',80.9,84.0],
                ['Portugal',81.2, 84.3],
                ['Costa Rica',80.8,83.3],
                ['Chile', 81.0, 83.8],
                ['United Kindom', 80.4, 82.4],
                ['Germany',80.9,83.5],
                ['Austria',81.3,83.8],
                ['Finland', 82.0, 84.7],
                ['France',82.5, 85.5],
                ['Belgium',81.9, 84.4],
                ['Canada', 81.7, 84.0],
                ['Denmark',81.4, 83.3],
                ['Netherlands', 81.5, 83.1],
                ['Spain',83.3,86.2],
                ['Israel', 82.6, 84.6],
                ['South Korea',83.5,86.5],
                ['New Zealand',82.3,84.1],
                ['Italy',82.9,85.1],
                ['Luxembourg',52.8, 84.9],
                ['Ireland',82.6,84.4],
                ['Australia', 83.2, 85.3],
                ['Sweden', 83.2, 85.0],
                ['Japan', 84.7, 87.7],
                ['Norway',83.2, 84.7],
                ['Iceland',83.2, 84.5],
                ['Switzerlan', 84.0, 85.9]
            ]
            );

            var options = {
                title: 'Toppings I Like On My Pizza',
                colors: ['#f7e3dc','#f5d4c9','#f6c7b6','#ec8f6e','#db3800' ],
                backgroundColor: {fill: '#CACFD2'}}

            var chart = new google.visualization.GeoChart(document.getElementById('regions_div'));
            
            
            // let countryDisplay = document.querySelector('.detail')
            
            async function myClickHandler(){
                var selection = chart.getSelection();
                // console.log(data.getValue(selection[0].row, 0))
                let country = data.getValue(selection[0].row, 0);
                let url= 'https://api.api-ninjas.com/v1/country?name='+ country
                const options = {
                    method: 'GET',
                    headers: {
                        'X-Api-Key': '3MVGSA9TAfSZQhKQlKPpNw==GRZgynITfrn1zeHX'
                    }
                };

                let countryData = await fetchCountry(url, options);
                console.log(countryData)
                let name = countryData[0].name
                let fertility = countryData[0].fertility
                let life_expectancy = countryData[0].life_expectancy_male;
                let homicide_rate =  countryData[0].homicide_rate ;
                let infant_mortality =  countryData[0].infant_mortality;

                document.querySelector("#countryname").innerHTML = name + ":)";
                document.querySelector("#fertility").innerHTML = "Fertility:   " + fertility +'(birth/woman)';
                document.querySelector("#life").innerHTML = "Life Expectancy Male: " + life_expectancy +'years';

                document.querySelector("#homecide_rate").innerHTML ="Homecide Rate:" + homicide_rate + "%";


                document.querySelector("#infant_mortality").innerHTML = "Infant Mortality:" + infant_mortality;

            }
            
            google.visualization.events.addListener(chart, 'select', myClickHandler);
            
            chart.draw(data, options);

        }

        // const map = document.querySelector("#regions_div")
        // map.addEventListener("click",  (e) => {
        //     // console.log(e.target.region)
        // })








