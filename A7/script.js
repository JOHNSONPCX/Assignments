const inp = document.querySelector("input");
const btn = document.querySelector("#add");
const todoBox = document.querySelector(".todo-list");
const clearAllBtn = document.querySelector("#clearAll");

btn.addEventListener("click", () => {
  const value = inp.value.trim();
  if (value === "") return;

  todoBox.innerHTML += `
    <div class="li">
      <h3 class="todo-text">${value}</h3>
      <div>
        <button class="btn edit-btn">Edit</button>
        <button class="btn del-btn">Delete</button>
      </div>
    </div>
  `;

  inp.value = "";
});

clearAllBtn.addEventListener("click", () => {
  if (todoBox.children.length === 0) {
    return;
  }

  todoBox.innerHTML = "";
});


todoBox.addEventListener("click", (e) => {
  const todoItem = e.target.closest(".li");
  if (!todoItem) return;

  if (e.target.classList.contains("del-btn")) {
    todoItem.remove();
    return;
  }

  if (e.target.classList.contains("edit-btn")) {
    const textElement = todoItem.querySelector(".todo-text");
    const currentText = textElement.textContent;
    
    const input = document.createElement("input");
    input.type = "text";
    input.value = currentText;
    input.className = "edit-input";
    
    textElement.replaceWith(input);
    input.focus();
    
    const editBtn = e.target;
    editBtn.textContent = "Save";
    editBtn.className = "btn save-btn";
    
    function saveEdit() {
      if (!document.contains(input)) return;
      
      const newText = input.value.trim();
      const h3 = document.createElement("h3");
      h3.className = "todo-text";
      h3.textContent = newText || currentText;
      
      try {
        input.replaceWith(h3);
      } catch {
        if (input.parentNode) {
          input.parentNode.replaceChild(h3, input);
        }
      }
      
      const saveBtn = todoItem.querySelector(".save-btn");
      if (saveBtn) {
        saveBtn.textContent = "Edit";
        saveBtn.className = "btn edit-btn";
        saveBtn.replaceWith(saveBtn.cloneNode(true));
      }
    }
    
    const saveBtn = todoItem.querySelector(".save-btn");
    if (saveBtn) {
      saveBtn.addEventListener("mousedown", (e) => {
        saveEdit();
      });
    }
  }
});