getStagiaires.then(
    stagiaires =>{
        console.log(stagiaires);
        return getModules();
    }
).then(modules => {
    console.log(modules);
        return getNotes();
}).then(notes => {
    console.log(notes);
}).then(function(error) {
    console.log(error);
}).finally(function() {
    console.log("finally");   
}) 



