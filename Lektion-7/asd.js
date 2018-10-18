HEAD
let Hiss = {
    plan : 0,
    goTo : function(level) {
        this.plan = level;
        console.log('Åker till plan: ' + level);
    },
    where : function(){
        console.log('Hissen är just nu på plan: ' + this.plan);
        return this.plan;
    }
}
Hiss.goTo(1);
Hiss.where();
Hiss.goTo(2);
Hiss.where();
Hiss.goTo(3);
Hiss.where();
Hiss.goTo(4);
Hiss.where();
Hiss.goTo(5);
Hiss.where();


let h = prompt('Ange höjd');
let b = prompt('Ange bredd');

