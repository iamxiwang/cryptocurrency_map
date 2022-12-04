const { async } = require("regenerator-runtime");

import fetchCountry from "./scripts/country_api";

window.fetchCountry = fetchCountry;

        google.charts.load('current', {
        'packages':['geochart'],
        'mapsApiKey': 'AIzaSyCdzK1NYD375q2eB-NknjM36fNhR0ml4_M'
        
        });
        google.charts.setOnLoadCallback(drawRegionsMap);
    
        function drawRegionsMap() {
            var data = google.visualization.arrayToDataTable(
                [
                ['Country', 'Index Score', 'Life Expectancy'],['Germany', 387, 65],
                ['United States', 653, 75],['Brazil',562, 70],['Canada', 368, 70],['France', 200, 70],['Russia', 541, 70],['China', 535,87],
                ['India', 663,60],['Nigeria', 521,40],['Vietnam', 1000,67],['Philippines', 753, 66],['Ukrian', 694,66],['Australia',270, 77],
                ['Egypy',361,65],['Argentina',510,76],['Bolivia', 266,77],['Mexico', 322,88],['Chile', 220,63],['Indonesia', 396,78],
                ['New Zealand', 129,80],['Moroco',507,78],
                ['Turkey', 519,66],['United Kindom', 473,66],
                ['Spain',297,79],['South Africa', 309,56],
                ['Kenya', 397,45],['Angola', 103,60],
                ['Japan', 339,90],['South Korea',361,90],['Saudi Arabia',199,89],['Italy',241,80],['Algeria',254,76],['Colombia',496,66],
                ['Ecuador',409,55],['Peru',287,62]

            ]
            );

            var options = {
                title: 'Toppings I Like On My Pizza',
                colors: ['#f6c7b6','#f3b49f','#ec8f6e','#e6693e','#e0440e' ],
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
                let life_expectancy = countryData[0].life_expectancy_female;
                let internet_user = countryData[0].internet_user;
                document.querySelector("#name").innerHTML = name;
                document.querySelector("#fertility").innerHTML = "fertility:  " + fertility;
                document.querySelector("#life").innerHTML = "life_expectancy_female:  " + life_expectancy;
                document.querySelector("#internet_user").innerHTML = "internet_user: " + internet_user;

            }
            
            google.visualization.events.addListener(chart, 'select', myClickHandler);
            
            chart.draw(data, options);

        }

        // const map = document.querySelector("#regions_div")
        // map.addEventListener("click",  (e) => {
        //     // console.log(e.target.region)
        // })


        // const stacked = require('./scripts/data.js')




