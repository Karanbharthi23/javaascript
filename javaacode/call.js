function setUsername(username)
{
    this.username= username
    console.log("hello")
}
function User(username,password,email)
{
    setUsername.call(this,username)
    this.password = password
    this.email = email
}
const data = new User("Karan","121","karan@google.com")
console.log(data)