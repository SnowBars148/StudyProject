const me = {
    name: "Vladislava",
    age: 7,
    skill: 3,
    hobby: "writing",
    friends: 0,
    job: "teacher",
    diplom: 0,
    married: false,
 }
 
 const school = (obj) => {
    [...Array(11)].forEach((_, i) => {
        obj.age++;
        obj.skill ++;
    })
    return obj;
 }
 
 const collage = (obj) => {
    [...Array(4)].forEach((_, i) => {
        obj.age++;
        obj.skill++;
    })
    if(obj.skill > 12) {
        obj.hobby = "playGitar";
     }
    obj.diplom++;
    return obj;
 }
 
 const sport = (obj) => {
    [...Array(3)].forEach((_, i) => {
        obj.age++;
        obj.skill--;
        obj.friends++;
    })
    return obj;
 }

 const job = (obj) => {
    [...Array(3)].forEach((_, i) => {
        obj.age++;
        obj.skill++;
        obj.friends++;
    })
    if(obj.skill > 13) {
        obj.hobby = "drawing";
     } 
    return obj;
 }

 const ill = (obj) => {
    [...Array(Math.floor(Math.random()*10))].forEach((_, i) => {
        obj.age++;
        obj.skill--;
    })
    if(obj.skill > 13) {
        obj.job = "support";
     } 
    return obj;
 }

const marry = (obj) => {
    if (obj.age > 30) {
        obj.married = true;
    }
    return obj;
}

 console.log(marry(ill(job(sport(collage(school(me)))))));