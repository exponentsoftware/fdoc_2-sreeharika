const users = [
    {
        name:'Brook', 
        scores:75,
        skills:['HTM', 'CSS', 'JS'],
        age:16
    },
    {
        name:'Alex', 
        scores:80,
        skills:['HTM', 'CSS', 'JS'],
        age:18
    }, 
    {
        name:'David', 
        scores:75,
        skills:['HTM', 'CSS'],
        age:22
    }, 
    {
        name:'John', 
        scores:85,
        skills:['HTM'],
        age:25
    },
    {
        name:'Sara',
        scores:95,
        skills:['HTM', 'CSS', 'JS'],
        age: 26
    },
    {
        name:'Martha', 
        scores:80,
        skills:['HTM', 'CSS', 'JS'],
        age:18
    },
    {
        name:'Thomas',
        scores:90,
        skills:['HTM', 'CSS', 'JS'],
        age:20
    }
    ];


    console.log(users.filter(user => user.scores > 85));

    function addUser(name){
this.name = name;
for(let i=0; i<users.length; i++){
    if(users[i].name !== name){
        users.push({name: name, scores: 75, skills: ['HTM', 'CSS', 'JS'], age: 25});
        break;
    }
}        
return users;
    }
    console.log(addUser('nikhil'));

    function addUserSkill(user,skill){
for (let i=0; i<users.length; i++){
    if(users[i].name == user){
        users[i].skills.push(skill);
    }
}    
return users;    
    }
    console.log(addUserSkill('nikhil', 'react'));

    function editUser(user){
        for (let i=0; i<users.length; i++){
            if(users[i].name == user){
                users[i].scores = 65;
                users[i].skills = ['node'];
                users[i].age = 26;
            }
        }
        return users;
    }
    console.log(editUser('nikhil'));