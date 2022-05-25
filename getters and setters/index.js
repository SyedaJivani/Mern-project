// admin create user and restrict user to type not more than 6 characters in pass word by using getters and setters
class User {
    constructor(name,age,address,email,password,designation){
        this.name = name;
        this.age = age;
        this.address = address;
        this.email = email;
        this.password = password;

    }
}
    class Admin extends User{
    getPass(){
        return this.password;
        
    }
    setPass(arg){
        if (arg.length > 6){
            console.log ('password should not be more than 6 characters')
        }
        this.password= arg;
    }
 }
 
let user1 = new Admin("john",23,"USA","john@gmail.com","codegirls")
 console.log(user1.getPass());

  user1.setPass ("sorrygirls");
 console.log(user1.getPass());
