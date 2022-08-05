var app = new (function () {
  this.element = document.getElementById("tasks");
  this.tasks = [];

  this.FetchAll = function () {
    var data = "";
    if (this.tasks.length > 0) {
      for (i = 0; i < this.tasks.length; i++) {
        data += "<tr>";
        data += "<td>" + (i + 1) + ". " + this.tasks[i] + "</td>";
        data +=
          '<td><button onclick="app.Edit(' +
          i +
          ')" class="btn btn-warning">Edit</button></td>';
        data +=
          '<td><button onclick="app.Edit(' +
          i +
          ')" class="btn btn-danger">Delete</button></td>';
        data += "</tr>";
      }
    }
    this.Count(this.tasks.length);
    return (this.element.innerHTML = data);
  };

  this.Add = function () {
    element = document.getElementById("add-todo");
    var task = element.value;
    if (task) {
      this.tasks.push(task.trim());
      element.value = "";
      this.FetchAll();
    }
  };
  this.Edit = function (item) {};
  this.Delete = function (item) {};
  this.Count = function (data) {};
})();

app.FetchAll();

function CloseInput() {
  document.getElementById("edit-box").style.display = "none";
}
