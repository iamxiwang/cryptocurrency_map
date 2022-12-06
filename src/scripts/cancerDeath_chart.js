google.charts.load('current', {packages: ['corechart', 'bar']});




let cancerURL ="https://docs.google.com/spreadsheets/d/1YHhFEnAybO0rtk7HtAhZ1FBRO8tAsWxMdjOkEUllzbA/edit#gid=1686077019"
let suicideUrl ="https://docs.google.com/spreadsheets/d/1YHhFEnAybO0rtk7HtAhZ1FBRO8tAsWxMdjOkEUllzbA/edit#gid=217321116"

function drawColumnChart() {
    var query = new google.visualization.Query(cancerURL);
    query.send(handleQueryResponse);
}
function handleQueryResponse(response) {
    if (response.isError()) {
        alert('Error in query: ' + response.getMessage() + ' ' + response.getDetailedMessage());
        return;
    }       
    var options = {
        title: "Deaths from Cancer Total (Per 100 000 persons, 2020 or latest available)",
        colors: ["#16537e" ],
        backgroundColor: {fill: '#CACFD2'}}

    var data = response.getDataTable();
    var chart = new google.visualization.ColumnChart(document.getElementById('secondchart'));
    chart.draw(data, options);
}


let selectCancer = document.querySelector('#cancer');
let selectSuicide = document.querySelector('#suicide');
let selectLost = document.querySelector('#lost');

function cancerHandler(){
    google.charts.setOnLoadCallback(drawColumnChart);
}



selectCancer.addEventListener('click', cancerHandler);
