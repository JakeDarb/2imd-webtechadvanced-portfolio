class Note {
    constructor(title) {
        this.title = title;
        this.element = this.createElement(title);
    }

    createElement(title) {
        let newNote = document.createElement("li");
        newNote.innerHTML = document.getElementById("taskInput").value;
        newNote.addEventListener('click', this.remove.bind(newNote));
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
        // this.loadNotesFromStorage();
    }

    loadNotesFromStorage() {
        // HINT🤩
        // load all notes from storage here and add them to the screen
    }

    createNote(e) {
        // this function should create a new note by using the Note() class
        // HINT🤩
        let note = new Note();
        // note.add();
        // note.saveToStorage();
        // clear the text field with .reset in this class
        if (e.keyCode === 13) {
            note.add();
            document.getElementById("taskInput").value = "";
            e.preventDefault();
        }
    }

    reset() {
        // this function should reset the form / clear the text field
    }
}

let app = new App();