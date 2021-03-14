class Note {
    constructor(title) {
        this.title = title;
        this.element = this.createElement(title);   
        //localStorage.clear();
    }

    createElement(title) {
        let newNote = document.createElement("li");
        newNote.innerHTML = title;
        newNote.addEventListener('click', this.remove.bind(title));
        return newNote;
    }

    add() {
        // HINT🤩
        // this function should append the note to the screen somehow
        document.getElementById("taskList").appendChild(this.element);
    }

    saveToStorage() {
        // HINT🤩
        // localStorage only supports strings, not arrays
        // if you want to store arrays, look at JSON.parse and JSON.stringify
    
        if(localStorage.getItem("list") === null){
            let list = [];
            list.push(this.title);
            localStorage.setItem("list", JSON.stringify(list));
        } else {
            let list = JSON.parse(localStorage.getItem("list"));
            list.push(this.title);
            localStorage.setItem("list", JSON.stringify(list));
        }

    }

    remove() {
        // HINT🤩 the meaning of 'this' was set by bind() in the createElement function
        // in this function, 'this' will refer to the current note element
        // .removeChild(this)
        // remove the item from screen and from localstorage
    }
}

class App {
    constructor() {
        console.log("👊🏼 The Constructor!");

        // HINT🤩
        // pressing the enter key in the text field triggers the createNote function
        this.txtTodo = document.getElementById("taskInput");
        this.txtTodo.addEventListener("keypress", this.createNote.bind(this));
        // read up on .bind() -> we need to pass the current meaning of this to the eventListener
        // when the app loads, we can show previously saved noted from localstorage
        this.loadNotesFromStorage();
    }

    loadNotesFromStorage() {
        // HINT🤩
        // load all notes from storage here and add them to the screen
        if (localStorage.getItem("list") != null){
            let savedList = JSON.parse(localStorage.getItem("list"));
            for (let i = 0; i < savedList.length; i++) {
                let savedNote = new Note(savedList[i]);
                savedNote.add();
              }
        }
    }

    createNote(e) {
        // this function should create a new note by using the Note() class
        // HINT🤩
        // note.add();
        // note.saveToStorage();
        // clear the text field with .reset in this class
        if (e.keyCode === 13) {
            let note = new Note(this.txtTodo.value);
            note.add();
            note.saveToStorage();
            this.txtTodo.value = "";
            e.preventDefault();
        }
    }

    reset() {
        // this function should reset the form / clear the text field
    }
}

let app = new App();