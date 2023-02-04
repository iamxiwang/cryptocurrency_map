
google.charts.load('current', {packages: ['corechart', 'bar']});


let lostURL = "https://docs.google.com/spreadsheets/d/1dSar4PNf5y55-0NEczSEdqRxk4wl5r6wXIM5DYny92U/edit#gid=1988260332"


function drawColumnChart() {
    var query = new google.visualization.Query(lostURL);
    query.send(handleQueryResponse);
}
function handleQueryResponse(response) {
    if (response.isError()) {
        alert('Error in query: ' + response.getMessage() + ' ' + response.getDetailedMessage());
        return;
    }       
    var options = {
        title: "Potential years of life lost (Total, Per 100,000 inhabitants aged 0-69, 2020 or latest available)",
        tooltip: { isHtml: true },
        titleTextStyle: {
            fontSize: 20,
        },
        colors: ["#088da5"],
        backgroundColor: {fill: '#000000'},

        animation: {"startup": true, duration: 2000,
        easing: 'out',
        }
    }

    var data = response.getDataTable();
    var chart = new google.visualization.ColumnChart(document.getElementById('thirdchart'));
    chart.draw(data, options);
}



let selectLost = document.querySelector('#lost');
let chartDisplay = document.querySelector(".parseData")

function lostHandler(e){
    e.preventDefault();
    while( chartDisplay.firstChild){
        chartDisplay.removeChild(chartDisplay.lastChild);
        
    };
    let newChart = document.createElement("div");
    newChart.id = "thirdchart";
    newChart.style = "width: 1000px; height: 310px;"
    
    chartDisplay.appendChild(newChart)

    
    google.charts.setOnLoadCallback(drawColumnChart);

    // document.querySelector("#thirdchart").scrollIntoView({behavior: "smooth", block: "end", inline: "nearest"});
}



selectLost.addEventListener('click', lostHandler);
