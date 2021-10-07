class Person{
    constructor({firstName,lastName,job}){
        this.firstName = firstName;
        this.lastName = lastName;
        this.job = job;
        this.skils = []
        Person._amount = Person._amount || 0;
        Person._amount++;


    }

    amount(){
        return Person._amount;
    }
    fullname(){
        return `${this.firstName} ${this.lastName}`
    }
    fullname(fN){
        if(/[A-Za-z]\s[A-Za-z]/.test(fN)){
            [this.firstName,this.lastName] = fN.split(' ')
        }else{
            throw Error('Bad FullName')
        }
    }

    learn(skill){
        this.skils.push(skill)
    }
}



class Job{
    constructor (company,position,salary){
        this.company = company
        this.position = position
        this.salary = salary
    }
}

const roger = new Person({
    firstName:'Asep',
    lastName:'Komarudin',
    job:new Job('Tokopedia',"Full Stack Dev",500000)
})

const john = new Person({
    firstName:'Agus',
    lastName:'Nuerjaman',
    job:new Job('Google',"FrontEnd Dev",300000)
})


roger.learn('PHP')
roger.learn('MySql')
roger.learn('React')
roger.amount(100)
console.log(roger);






