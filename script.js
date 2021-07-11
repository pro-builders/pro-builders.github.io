if ( "serviceWorker" in navigator ) {
    navigator.serviceWorker.register("./sw.js")
    .then( nkanAbo => console.log( "Alhamdulillah!!! Adupe" ))
    .catch( asise => console.log( "Asise Waye" ))
}

window.addEventListener("appinstalled", e => {
    console.log("App installed");
})

window.addEventListener("beforeinstallprompt", e => {
    e.preventDefault();

    e.userChoice.then( choice => {
        var message = choice.outcome === "dismissed" ? "User cancelled" : "User installed";

            console.log(message);
    })

    promptEvt = e;

    if(promptEvt !== undefined){
        promptEvt.prompt();

        promptEvt.userChoice.then(choice => {
            console.log("User Choice: ", choice.outcome);
        })
    }

    return false;
    
})

