//created a class with constructor values 
class Employee {
    constructor(name, id, email) {
      //calling using the keys above 
      this.name = name;
      this.id = id;
      this.email = email;
    }
  

  //get functions to retrieve info 
    getName() {
      return this.name
      
      }
    
  
    getId() {
      return this.id
        
      }
  
    getEmail() {
      return this.email
        
      }
    getRole() {
      return 'Employee';
    }
  }
  

  //export function 
  module.exports = Employee;