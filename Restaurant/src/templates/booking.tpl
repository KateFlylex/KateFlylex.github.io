<h2>Table &nbsp;<%= id + 1 %></h2>
 Time:
<div class='time'>
  <input id="date-input" type="date" value=<%= currentDay %>>
</div>

<div>Selected date: <%= currentDay %></div>
<% for (var y=0; y < date[currentDay].length - 1; y++){ %>
  <div class=<%= date[currentDay][y].state%>> <%= date[currentDay][y].name %>  - <%= date[currentDay][y + 1].name%></div>
<% } %>     
