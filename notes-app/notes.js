const fs = require("fs");
const chalk = require("chalk");
const fileName = 'notes.json'

const getNotes = () => "Your notes..."

const addNote = (title, body) => {
    const notes = loadNotes();
    const duplicateNote = notes.find((notes) => notes.title === title)

    if (!duplicateNote) {
        const noteObject = {
            title: title,
            body: body
        }
        notes.push(noteObject);
        
        saveNotes(notes);
        console.log(chalk.green.inverse("New note added"));
    } else {
        console.log(chalk.red.inverse("Note duplicated"));
    }
}

const removeNote = (title) => {
    const notes = loadNotes();
    const notesToKeep = notes.filter( (note) => note.title !== title)

    if (notes.length > notesToKeep.length) {
        saveNotes(notesToKeep);
        console.log(chalk.green.inverse(" Note with title "+ title +" is deleted "))
    } else {
        console.log(chalk.red.inverse(" Cannot find note with title "+ title +". No note is deleted "))
    }
}

const listNotes = () => {
    const notes = loadNotes();

    console.log(chalk.green("Your notes:"))
    notes.forEach(note => {
        console.log(note.title)
    });
}

const readNote = (title) => {
    const notes = loadNotes();
    const readNote = notes.find((note) => note.title === title)
    if (readNote) {
        console.log(chalk.green.inverse(readNote.title));
        console.log(readNote.body);
    } else {
        console.log(chalk.red.inverse("Note not find"));
    }
}

const saveNotes = (notes) => {
    const dataJSON = JSON.stringify(notes);
    fs.writeFileSync(fileName, dataJSON);
}

const loadNotes = () => {
    try {
        const dataBuffer = fs.readFileSync(fileName);
        const dataJSON = dataBuffer.toString();
        return JSON.parse(dataJSON);
    } catch (e) {
        return [];
    }
}

module.exports = {
    getNotes: getNotes,
    addNote: addNote,
    removeNote: removeNote,
    listNotes: listNotes,
    readNote: readNote
};