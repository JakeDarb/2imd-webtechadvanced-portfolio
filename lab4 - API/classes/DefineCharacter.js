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
        let url = "https://rickandmortyapi.com/api/character/";
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
        url = `https://rickandmortyapi.com/api/character/${characterId}`;
        fetch(url)
        .then((response) => {
            return response.json();
        })
        .then((json)=>{
            console.log(json.name);
            console.log(json.image);
        })
    }

}

let character = new DefineCharacter("liam");