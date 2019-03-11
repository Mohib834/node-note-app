const fs = require('fs');
const chalk = require('chalk');

const addNote = (title,body) => {
    const notes = loadNote();
    
    const duplicateNote = notes.find(note => note.title === title);

    if(!duplicateNote){
        notes.push({
            title:title,
            body:body
        });
        storeNote(notes);
        console.log('New Note Added');
    } else{
        console.log('Title taken')
    }


}

const loadNote = () => {
    try{
        const dataJson = fs.readFileSync('./notes.json').toString();
        return JSON.parse(dataJson);    
    }
    catch(err){
        return [];
    }
}

const storeNote = notes => {
    const dataJson = JSON.stringify(notes);
    fs.writeFileSync('notes.json',dataJson);
}

const removeNote = title => {
    const notes = loadNote();
    const notesToKeep = notes.filter(note => note.title !== title);
    if(notesToKeep.length === notes.length){
        console.log(chalk.bgRed('No Note Found'));
    }else if(notesToKeep.length < notes.length){
        console.log(chalk.bgGreen('Note removed'));
    }

    storeNote(notesToKeep);
}   

const listNote = () => {
    const notes = loadNote();
    console.log(chalk.green('==========================='));
    notes.forEach(el => console.log(`${el.title.toUpperCase()} - ${el.body}`));
    console.log(chalk.green('==========================='));
}

const readNote = (title) => {
    const notes = loadNote();
    const note = notes.find(note => note.title === title);

    if(note){
        console.log(chalk.bgGreen(note.title.toUpperCase()),note.body);
    }else {
        console.log(chalk.bgRed('No note Found'))
    }
}

module.exports = {
    addNote: addNote,
    removeNote: removeNote,
    listNote:listNote,
    readNote:readNote
}