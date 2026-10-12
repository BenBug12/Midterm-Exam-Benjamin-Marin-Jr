
$(function() {
 
    //Write your code below
    async function planets(){
        planetData = await fetch('data/planets.json');
        planetData = await planetData.json();

        for (let i = 0; i < planetData.Length; i++) {
            console.log(planetData[i].name);
            
        }

        

        
    }

});
