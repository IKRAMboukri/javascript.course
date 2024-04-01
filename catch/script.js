async function executerCeCode(){
    let vNotes = 4;
    try{
        const stagiaires = await getStagiaires();
        const modules = await getModules();
        const notes = await getNotes();
        console.log(stagiaires);
        console.log(modules);
        console.log(notes);
        //erreur personalise
        if(vNotes < 5){
            throw("la note est inf à 5")
        }

    }catch(err){
        console.log(err);
    }finally{
        console.log("remove leading ...");
    }
}
getModules();
getStagiaires();