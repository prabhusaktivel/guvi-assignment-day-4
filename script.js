async function  getalldata(){
    try{
        var restcountries = await fetch("https://restcountries.com/v2/all")
        var rest = await restcountries.json();
        console.log(rest)
        
        rest.forEach(element => {
            var card = document.createElement("div")
            
            card.style.backgroundColor ="Aquamarine"
            card.style.marginBottom = "5px"
            card.style.marginRight = "5px"
            card.style.width = "32%";
            card.style.display ="flex";
            
    
        
       
            card.innerText = element.name


            
            var region = document.createElement("div")
            region.innerText =element.region;
            card.appendChild(region)
            var subregion = document.createElement("div")
            subregion.innerText=element.subregion;
            region.appendChild(subregion)
            var population = document.createElement("div")
            population.innerText=element.population
            subregion.appendChild(population)
        
            
            var box = document.createElement("img")
            box.setAttribute("src",  element.flags.png)
            population.appendChild(box)
            

            
            
            document.getElementById("time").appendChild(card)
            document.body.appendChild(card)
            
        });
    } catch (error) {
        console.log(error)
    }
}
    
getalldata()