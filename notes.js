const fs = require('fs');

const storeNotes = notes => {
    const notesJson = JSON.stringify(notes);
    fs.writeFileSync('Notes.json',notesJson);
}

const addNote = (title,body) => {
    const notes = loadNotes()

    notes.push({title,body})

    //write a json file and store the value
    storeNotes(notes)
}

const loadNotes = () => { //Loading from json file
    try{
        const notesJson = fs.readFileSync('./Notes.json').toString();
        return JSON.parse(notesJson);
    }
    catch(err){
        return []
    }
}


module.exports = {
    addNote: addNote
}