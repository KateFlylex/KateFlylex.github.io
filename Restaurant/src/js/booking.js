function booking(id) {
  var tableShadule = document.getElementById('table-schedule'),
    compiled = require('../templates/booking.tpl'),
    tableList = JSON.parse(localStorage.getItem('tableList')),
    currentDay = new Date().toJSON().slice(0,10);


  tableShadule.style.display = "block";

  for (var i = 0; i < tableList.length; i++){
    if (tableList[i].id == id){
      if (!tableList[i].currentDay){
        var timeShadule = [];
        for (var x = 9; x < 23; x++){
          timeShadule.push({state: 'vacant', name: x + ':' + (x + 1)});
        }
        tableList[i]['currentDay'] = currentDay;
        tableList[i].date[currentDay] = timeShadule;
        localStorage.setItem('tableList', JSON.stringify(tableList));
      }
    }
  }

  document.getElementById('table-schedule-container').innerHTML = compiled(tableList[id]);
}

export { booking };