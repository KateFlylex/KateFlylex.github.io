(function (){
  var admin = localStorage.getItem('admin');
  var tableList = localStorage.getItem('tableList');
  var numberOfTables = 5;

  if (!tableList){
    tableList = [];
    for (var i = 0; i <= numberOfTables; i++){
      tableList.push({
        id: i,
        date: {}
      });
    }
    localStorage.setItem('tableList', JSON.stringify(tableList));
  }
  if (!admin) {
    var user = JSON.stringify({name: 'admin', password: 'password', isAdmin: true});
    localStorage.setItem('admin', user);
  }

})();