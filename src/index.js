const { async } = require("regenerator-runtime");

import fetchCountry from "./scripts/country_api";

window.fetchCountry = fetchCountry;

        google.charts.load('current', {
        'packages':['geochart'],
        'mapsApiKey': 'AIzaSyCdzK1NYD375q2eB-NknjM36fNhR0ml4_M'
        
        });
        google.charts.setOnLoadCallback(drawRegionsMap);
    
        function drawRegionsMap() {
            var data = google.visualization.arrayToDataTable([
                ['Country', 'Index Score'],['Germany', 387],
                ['United States', 653],['Brazil',562],['Canada', 368],['France', 200],['Russia', 541],['China', 535],
                ['India', 663],['Nigeria', 521],['Vietnam', 1000],['Philippines', 753],['Ukrian', 694],['Australia',270],
                ['Egypy', 361],['Argentina',510],['Bolivia', 266],['Mexico', 322],['Chile', 220],['Indonesia', 396],
                ['New Zealand', 129],['Moroco',507],
                ['Turkey', 519],['United Kindom', 473],
                ['Spain',297],['South Africa', 309],
                ['Kenya', 397],['Angola', 103],
                ['Japan', 339],['South Korea',361],['Saudi Arabia',199],['Italy',241],['Algeria',254],['Colombia',496],
                ['Ecuador',409],['Peru',287]

            ]);

            var options = {
                title: 'Toppings I Like On My Pizza',
                colors: ['#f6c7b6','#f3b49f','#ec8f6e','#e6693e','#e0440e' ],
                backgroundColor: {fill: '#CACFD2'}}

            var chart = new google.visualization.GeoChart(document.getElementById('regions_div'));
            
            
            //stackoverflow 
            
            function myClickHandler(){
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

                let info = fetchCountry(url, options);
                // console.log(Array.isArray(info))
                console.log(info.gdp)

                
                //data.getValue(selection[0].row, 0) give the value of thecountry name
                // var message = '';
                // for (var i = 0; i < selection.length; i++) {
                //     var item = selection[i];
                //     if (item.row != null && item.column != null) {
                //         message += '{row:' + item.row + ',column:' + item.column + '}';
                //     } else if (item.row != null) {
                //         message += '{row:' + item.row + '}';
                //     } else if (item.column != null) {
                //         message += '{column:' + item.column + '}';
                //     }
                // }
                // if (message == '') {
                //     message = 'nothing';
                // }
                // // alert('You selected ' + message);
                // alert(`${data.getValue(selection[0].row, 0)}`)
            }
            
            google.visualization.events.addListener(chart, 'select', myClickHandler);
            
            chart.draw(data, options);

        }

        // const map = document.querySelector("#regions_div")
        // map.addEventListener("click",  (e) => {
        //     // console.log(e.target.region)
        // })


        const stacked = require('./scripts/data.js')

    // console.log(fetchCountry())



