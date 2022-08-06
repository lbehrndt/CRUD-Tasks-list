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
          '<td><button onclick="app.Delete(' +
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

  this.Edit = function (item) {
    element = document.getElementById("edit-todo");
    element.value = this.tasks[item];
    document.getElementById("edit-box").style.display = "block";
    self = this;

    document.getElementById("save-edit").onsubmit = function () {
      var task = element.value;
      if (task) {
        self.tasks.splice(item, 1, task.trim());
        self.FetchAll();
        CloseInput();
      }
    };
  };

  this.Delete = function (item) {
    this.tasks.splice(item, 1);
    this.FetchAll();
  };

  this.Count = function (data) {
    var element = document.getElementById("counter");
    var name = "Tasks";
    if (data) {
      if (data === 1) {
        name = "Task";
      }
      element.innerHTML = data += " " + name;
    } else {
      element.innerHTML = "No " + name;
    }
  };
})();

app.FetchAll();

function CloseInput() {
  document.getElementById("edit-box").style.display = "none";
}
