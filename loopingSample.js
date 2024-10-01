function looping(){
let resume=[{
    name : "raja",
    age :28,
    gender:"male",
    qualification:"BSC",
    email:"xyx@gmail.com",
    phoneNo:1234567890,
    address:{
        city:"Vellore",
        state:"Tamilnadu",
        country:"india"
    }
}]
for(let i=0;i<resume.length;i++){
console.log(resume[i]); 
}
let resume1={
    name : "raja",
    age :28,
    gender:"male",
    qualification:"BSC",
    email:"xyx@gmail.com",
    phoneNo:1234567890,
    address:{
        city:"vellore",
        state:"Tamilnadu",
        country:"india"
    }
}
for (let key in resume1) {
    console.log(resume1[key]);
}

for(const [key,value] of Object.entries(resume1)){
     console.log(`${key}:${value}`);
}
Object.entries(resume1).forEach(([key, value]) => {
    if(key=="address"){
        for (key in value)
        console.log(`${key}: ${value[key]}`);
    }else{
        console.log(`${key}: ${value}`);
    }
})
}
looping()
