google.charts.load('current', {packages: ['corechart', 'bar']});


let suicideURL ="https://docs.google.com/spreadsheets/d/17ZA8go4dhMuuLRFS3DtG4JE_sZm8Io-27BPrg_jH7Iw/edit#gid=1388237281"

function drawColumnChart() {
    var query = new google.visualization.Query(suicideURL);
    query.send(handleQueryResponse);
}
function handleQueryResponse(response) {
    if (response.isError()) {
        alert('Error in query: ' + response.getMessage() + ' ' + response.getDetailedMessage());
        return;
    }       
    var options = {
        title: "Suicide Rates (Total, Per 100,000 persons, 2020 or latest available)",
        titleTextStyle: {
            fontSize: 25,
        },
        colors: ["#088da5"],
        backgroundColor: {fill: '#CACFD2'},

        animation: {"startup": true, duration: 2000,
        easing: 'out'
        }
    }

    var data = response.getDataTable();
    var chart = new google.visualization.ColumnChart(document.getElementById('firstchart'));
    chart.draw(data, options);
}



let selectSuicide = document.querySelector('#suicide');
let chartDisplay = document.querySelector(".parseData")

function suicideHandler(e){
    e.preventDefault();
    while( chartDisplay.firstChild){
        chartDisplay.removeChild(chartDisplay.lastChild);
        
    };
    let newChart = document.createElement("div");
    newChart.id = "firstchart";
    newChart.style = "width: 1400px; height: 800px;"
    
    chartDisplay.appendChild(newChart)

    
    google.charts.setOnLoadCallback(drawColumnChart);
    document.querySelector("#firstchart").scrollIntoView({behavior: "smooth", block: "end", inline: "nearest"});
}



selectSuicide.addEventListener('click', suicideHandler);
