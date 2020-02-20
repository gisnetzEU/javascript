var data = {
    name: "Giselle",
    job: "Developer",
    age: "30",
    showData: function(){
        return `
        \nName:${this.name}\nJob:${this.job} \nAge:${this.age}
        `
    }
}


console.log(data.showData());