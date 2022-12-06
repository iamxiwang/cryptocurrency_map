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
        title: "Suicide rates Total (Per 100 000 persons, 2020 or latest available)",
        colors: ["#16537e" ],
        backgroundColor: {fill: '#CACFD2'}}

    var data = response.getDataTable();
    var chart = new google.visualization.ColumnChart(document.getElementById('firstchart'));
    chart.draw(data, options);
}



let selectSuicide = document.querySelector('#suicide');

function suicideHandler(){
    google.charts.setOnLoadCallback(drawColumnChart);
}



selectSuicide.addEventListener('click', suicideHandler);
