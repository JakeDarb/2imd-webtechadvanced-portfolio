class DefineCharacter{
    constructor(name){
        this.name = name;
        this.calculateAge(this.name);
    }

    calculateAge(name){
        let url = "https://api.agify.io?name="+name;
        fetch(url)
        .then((response) => {
            return response.json();
        })
        .then((json)=>{
            this.chooseCharacter(json.age);
        })
    }

    chooseCharacter(age){
        let characterId;
        if(age<=5){
            characterId = 472;
        }else if(age<=16){
            characterId = 353;
        }else if(age<=25){
            characterId = 231;
        }else if(age<=40){
            characterId = 72;
        }else{
            characterId = 381;
        }
        let url = `https://rickandmortyapi.com/api/character/${characterId}`;
        fetch(url)
        .then((response) => {
            return response.json();
        })
        .then((json)=>{
            document.querySelector(".definedCharacter h1").innerHTML = json.name;
            document.getElementById("characterImg").src = json.image;
            this.chooseEpisode(json.episode);
        })
    }

    chooseEpisode(url){
        fetch(url)
        .then((response) => {
            return response.json();
        })
        .then((json)=>{
            document.getElementById("episodeName").innerHTML = json.name;
            document.getElementById("episodeNr").innerHTML = json.episode;
        })
    }

}

document.getElementById("form").addEventListener("keypress", (e) => {
    
    if(e.key === "Enter"){
        let character = new DefineCharacter(document.getElementById("name").value);
        document.querySelector(".definedCharacter").style.display = "grid";
        document.querySelector(".form").style.display = "none";
    }
})

document.getElementById("form").addEventListener("submit", (e) => {
    e.preventDefault();
})
