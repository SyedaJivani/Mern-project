//admin rights to delete and remove user from list of users

class User {
    constructor(name,age,address){
        this.name = name;
        this.age = age;
        this.address = address;
    }
    userDetail(){
        console.log(`this is new user having such details ${this.name} ${this.age} and ${this.address}`)
    }
}
class Admin extends User{
        constructor(name,age,address,rights){
            super(name,age,address)
            this.rights = rights;
        }
       
         userDetail(){
             console.log(`this is new user having such details ${this.name} ${this.age} and ${this.address} and ${this.rights}`)
        }
        userDelete() {
            let user1 = new User ("sana",44, "USA");
            let user2 = new User ("saba",34, "PAK");
            let user3 = new User ("sara",20, "IND");
            let user4 = new User ("ahmes",12 ,"IRAN");
            let allUser = [user1,user2,user3,user4]
        
            for( var i = 0; i < allUser.length; i++){ 
            
                if ( allUser[i] === user2) { 
            
                     allUser.splice(i, 1);
            
                     console.log(allUser);
                     
                }
            
            }
        }
    
    }
    let admin1 = new Admin ("john",23,"USA","delete");
    console.log(admin1.userDetail());
     console.log(admin1.userDelete());

   

    
   
   
    