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
            console.log(json.age);
        })
    }
    
}

let character = new DefineCharacter("stijn");