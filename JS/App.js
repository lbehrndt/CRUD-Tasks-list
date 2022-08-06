var app = new (function () {
  // Creating the array of tasks
  this.element = document.getElementById("tasks");
  this.tasks = [];

  /**
   * Displays the tasks that are being added in a table-row of the To-Do list.
   * The tasks will have a numeration as well as an edit and a delete button. 
   * 
   * Also adds task to the task counter.
   * @returns Input task in table-row on page.
   */
  this.FetchAll = function () {
    var data = "";
    // Check if tasks are available
    if (this.tasks.length > 0) {
      // For every task added iterate through the task to create the display of tasks
      for (i = 0; i < this.tasks.length; i++) {
        // Create table-row-tag
        data += "<tr>";
        // Add task with numeration to table-data inside the row
        data += "<td>" + (i + 1) + ". " + this.tasks[i] + "</td>";
        // Add edit button to table-data inside the row
        data +=
          '<td><button onclick="app.Edit(' +
          i +
          ')" class="btn btn-warning">Edit</button></td>';
        // Add delete button to table-data inside the row
        data +=
          '<td><button onclick="app.Delete(' +
          i +
          ')" class="btn btn-danger">Delete</button></td>';
        // End row
        data += "</tr>";
      }
    }
    // Add task to the task counter
    this.Count(this.tasks.length);
    // return the table-row.
    return (this.element.innerHTML = data);
  };

  /**
   * Adds the task to the tasks array and displays it.
   */
  this.Add = function () {
    element = document.getElementById("add-todo");
    var task = element.value;
    if (task) {
      this.tasks.push(task.trim());
      element.value = "";
      this.FetchAll();
    }
  };

  /**
   * Opens input form field to allow editing and saving of the new input.
   *  
   * @param {*} index The index of the given task in the tasks array.
   */
  this.Edit = function (index) {
    // Access the edit to-do input form element from index.html
    element = document.getElementById("edit-todo");
    // Set the input value to the task
    element.value = this.tasks[index];
    // displays it as a block element
    document.getElementById("edit-box").style.display = "block";
    self = this;

    // Save new task when 'Save' was clicked.
    document.getElementById("save-edit").onsubmit = function () {
      // Get task text
      var task = element.value;
      if (task) {
        // Override current displayed task data with new input.
        self.tasks.splice(index, 1, task.trim());
        // Display tasks
        self.FetchAll();
        // Close input form
        CloseInput();
      }
    };
  };

  // Deletes task
  this.Delete = function (index) {
    // Remove task from array
    this.tasks.splice(index, 1);
    // Display tasks
    this.FetchAll();
  };

  /**
   *  Counts how many tasks currently are available. 
   */
  this.Count = function (amount) {
    // Access counter element from index.html
    var element = document.getElementById("counter");
    // If there is an amount of tasks, display the amount.
    if (amount) {
      // If there is multiple tasks, change to plural.
      let name = amount === 1 ? "Task" : "Tasks";
      // Display task count
      element.innerHTML = amount += " " + name;
    } else {
      // Display task count
      element.innerHTML = "No Tasks";
    }
  };
})();

// Fetch all.
app.FetchAll();

/**
 * Close input form field.
 */
function CloseInput() {
  document.getElementById("edit-box").style.display = "none";
}
