// argv === argument value  

const yargs = require('yargs');
const note = require('./notes');
//Customise the version
yargs.version('1.1.0');

//Create a add command
yargs.command({
    command:'add', //if command is add then run the handler
    describe:'Add a new note',
    builder:{ //Options for command --title,--body
        title:{
            describe:'Note title',
            demandOption:'true', //for required functionality
            type:'string'
        },
        body:{
            describe:'Body of the Note',
            demandOption:true,
            type:'string'
        }
    },
    handler(argv){ //This handler parameter is about the argv itself
        note.addNote(argv.title,argv.body);
    }
});

//Create a remove command
yargs.command({
    command:'remove',
    describe:'Remove a note',
    builder:{
        title:{
            describe:'Note title',
            demandOption:true,
            type:'string'
        }
    },
    handler(argv){
        note.removeNote(argv.title);
    }
})

//Create a list command
yargs.command({
    command:'list',
    describe:'List the notes',
    handler(argv){
        note.listNote();
    }
})

//Create a read command
yargs.command({
    command:'read',
    describe:'Read the notes',
    builder:{
        title:{
            describe:'Note Title',
            demandOption:true,
            type:'string'
        }
    },
    handler(argv){
        note.readNote(argv.title);
    }
})

yargs.parse() //yargs now do its things 