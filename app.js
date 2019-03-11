// argv === argument value  

const yargs = require('yargs')
const noteArr = [];
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
        noteArr.push(argv.title);
    }
});

//Create a remove command
yargs.command({
    command:'remove',
    describe:'Remove a note',
    handle(){
        console.log('Removing a note');
    }
})

//Create a list command
yargs.command({
    command:'list',
    describe:'List the notes',
    handler(){
        console.log('listing the notes');
    }
})

//Create a read command
yargs.command({
    command:'read',
    describe:'Read the notes',
    handler(){
        console.log('reading the notes');
    }
})

yargs.parse() //yargs now do its things 