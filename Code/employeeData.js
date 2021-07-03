export default class Employee{
    #Name;
    #Address;
    #Email;
    #Age;
    #Username;
    #Password;
    #Flag;
    constructor(_name,_address,_email,_age,_username,_password,_flag){
        this.#Name = _name;
        this.#Address = _address;
        this.#Email = _email;
        this.#Age = _age;
        this.#Username = _username;
        this.#Password = _password;
        this.#Flag = _flag;
    }
    set Name(_name){
        this.#Name = _name;
    }
    get Name(){
        return this.#Name;
    }
    set Address(_address){
        this.#Address = _address;
    }
    get Address(){
        return this.#Address;
    }
    set Email(_email){
        this.#Email = _email;
    }
    get Email(){
        return this.#Email;
    }
    set Age(_age){
        this.#Age = _age;
    }
    get Age(){
        return this.#Age;
    }
    set Username(_username){
        this.#Username = _username;
    }
    get Username(){
        return this.#Username;
    }
    set Password(_password){
        this.#Password = _password;
    }
    get Password(){
        return this.#Username;
    }
    set Flag(_flag){
        this.#Flag = _flag;
    }
    get Flag(){
        return this.#Username;
    }
}