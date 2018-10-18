// Arbeta med JavaScripts globala objekt

function demo(){
    console.log(this.innerHeight);
    // this pekar på object som heter window i webbläsaren.
}
demo();

// Två bra metoder i object window