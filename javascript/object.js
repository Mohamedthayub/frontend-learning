const user = {
    name : "Thayub",
    age  : 21

}

user["name"] = "buyath"; // this is how we change the object value
console.log(user);



const  user2 = {
    name: "Thayub",
    getName:function(){
        console.log("Hey This is ",this.name);
    }
};

user2.getName();

const user3 = {
    name:"Buyath",
    getName: function(){
        console.log("My name is",this.name);
    }
}
user3.getName()
