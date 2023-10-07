function f(){
}


google.charts.load('current', {packages: ['corechart', 'bar']});
google.charts.setOnLoadCallback(drawMultSeries);

/* bar graph
function drawMultSeries() {
        var data = google.visualization.arrayToDataTable([
         ['Element', 'Value', { role: 'style' }],
         ['Copper', 8.94, '#b87333'],           
      ]);

      var options = {
        title: 'Spending by Category',
        chartArea: {width: '50%'},
        backgroundColor: "transparent",
        legend: {position: 'none'}
       
      };

      var chart = new google.visualization.BarChart(document.getElementById('chart_div'));
      chart.draw(data, options);
    }
*/

// js for tracker textboxes
function getValue() {
var nameField = document.getElementById('nameField').value;
var result = document.getElementById('result');
}

var subButton = document.getElementById('subButton');
subButton.addEventListener('click', getUserName, false); 
  
  
// line graph