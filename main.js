let root = document.getElementById("root");

// Section
let section = document.createElement("section");
section.classList.add("todo-app__main");
root.appendChild(section);

// Input
let input = document.createElement("input");
input.classList.add("todo-app__input");
input.placeholder = "Please enter the Todos here"
section.appendChild(input);

// list
let list = document.createElement("ul");
list.classList.add("todo-app__list");
list.id = "todo-list";
section.appendChild(list);

// list item
class list_item{
    constructor(task_name){
        // main node
        this.node = document.createElement("li");
        this.node.classList.add("todo-app__item");
        
        // checkbox
        this.checkbox = document.createElement("div")
        this.checkbox.classList.add("todo-app__checkbox");
        this.node.appendChild(this.checkbox)

        // input of checkbox
        this.checkbox.input = document.createElement("input");
        this.checkbox.input.id = "2" //
        this.checkbox.input.type = "checkbox"
        this.checkbox.appendChild(this.checkbox.input)
        this.checkbox.addEventListener("click", () => {
            this.checkbox.input.checked = ! this.checkbox.input.checked
            if(this.checkbox.input.checked)
                this.detail.style = "text-decoration: line-through; opacity: 0.5;"
            else
                this.detail.style = ""            
            // console.log(this.checkbox.input.checked)
        })

        // label of checkbox
        this.checkbox.label = document.createElement("label")
        this.checkbox.label.for = "2" //
        this.checkbox.appendChild(this.checkbox.label)

        // detail
        this.detail = document.createElement("h1")
        this.detail.classList.add("todo-app__item-detail")
        this.detail.textContent = task_name
        this.node.appendChild(this.detail)

        // img x
        this.x = document.createElement("img")
        this.x.classList.add("todo-app__item-x")
        this.x.src = "img/x.png"
        this.node.appendChild(this.x)

        return this.node;
    }
}

// footer
let footer = document.createElement("footer")
footer.classList.add("todo-app__footer")
footer.id = "todo-footer"
footer.style.display = "none"
root.appendChild(footer)

footer.total = document.createElement("div")
footer.total.classList.add("todo-app__total")
footer.total.textContent = "nothing left"
footer.appendChild(footer.total)

footer.buttons = document.createElement("ul")
footer.buttons.classList.add("todo-app__view-buttons")
footer.appendChild(footer.buttons)
// footer.buttons.all-button = ["All", "Active", "Completed"] // WHY NOT ?
let button_list = ["All", "Active", "Completed"]
for( i of button_list){
    temp = document.createElement("input")
    temp.value = i
    temp.type = "button"
    footer.buttons.appendChild(temp)
}

footer.clean = document.createElement("div")
footer.clean.classList.add("todo-app__clean")
footer.appendChild(footer.clean)
footer.clean.button = document.createElement("input")
footer.clean.button.type = "button"
footer.clean.button.value = "Clean Completed"
footer.clean.appendChild(footer.clean.button)

// interaction
let todo_count = 0
input.addEventListener("change", (event) => {
    list.appendChild(new list_item(input.value))
    input.value = ""
    todo_count ++
    footer_reload()
    // console.log(todo_count)
})

function footer_reload(){
    if(todo_count > 0){
        footer.style.display = "flex"
    }
    else if (todo_count === 0){
        footer.style.display = "none"
    }
}

// testing
// list.appendChild(new list_item("test task"))
// list.appendChild(new list_item("milestone"))
