google.charts.load('current', {packages: ['corechart', 'bar']});




let cancerURL ="https://docs.google.com/spreadsheets/d/1YHhFEnAybO0rtk7HtAhZ1FBRO8tAsWxMdjOkEUllzbA/edit#gid=1686077019"


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
        title: "Deaths from Cancer (Total Per 100,000 persons)",
        tooltip: { isHtml: true },
        titleTextStyle: {
            fontSize: 20,
          },
        colors: ["yellow"],
        // colors: ["#16537e","#d4af37","#f1dede" ,"#cfe8ef","#f5dd90","#e5f9e0",
        //             "#995253","#002fa7","#c5987b","#f1c800" ,"#e2679f","#735e7d","#133337","#ff5733","#85bb65","#394c1e","#85bb65"],

        backgroundColor: {fill: '#000000'},
        // is3D: true,
        
        animation: {"startup": true, duration: 1000,
        easing: 'out'}
        }

    var data = response.getDataTable();
    var chart = new google.visualization.ColumnChart(document.getElementById('secondchart'));
    chart.draw(data, options);
}


let selectCancer = document.querySelector('#cancer');
let chartDisplay = document.querySelector(".parseData")
// function clearChildren(){
//     const chartContainer = document.querySelector(".parseData");
//     chartContainer.children
// }

function cancerHandler(e){
    e.preventDefault();
    chartDisplay.childNodes.forEach(node => node.remove())
    let newChart = document.createElement("div");
    newChart.id = "secondchart";
    // newChart.style = "width: 1000px; height: 310px;"
   
    chartDisplay.appendChild(newChart)
    google.charts.setOnLoadCallback(drawColumnChart);
    // document.querySelector("#secondchart").scrollIntoView({behavior: "smooth", block: "end", inline: "nearest"});
}



selectCancer.addEventListener('click', cancerHandler);
