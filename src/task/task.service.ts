import { Injectable } from "@nestjs/common";
import { Task, CustomerType } from "./task.model"; 

@Injectable()
export class TaskService{
    tasks: Task[] = [];
    customerType: CustomerType[] = [];

    insertTask(
        firstName: string, 
        lastName: string,
    ){
        const newTask = new Task(firstName, lastName);
        this.tasks.push(newTask);
        return "Posted <3";
    }

    getTasks(){
        return [...this.tasks];
    }

    insertCustomerType(
        regularConnection: string,
        corporateConnection: string,
    ){
        const newCustomerType = new CustomerType(regularConnection, corporateConnection);
        this.customerType.push(newCustomerType);
    }

    
}