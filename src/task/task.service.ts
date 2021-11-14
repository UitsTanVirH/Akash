import { Injectable } from "@nestjs/common";
import { Task, CustomerType } from "./task.model"; 

@Injectable()
export class TaskService{
    tasks: Task[] = [];
    customerType: CustomerType[] = [];

    insertTask(
        firstName: string, 
        lastName: string,
        regRmn: number,
        altRmn: number,
        detailAddress: string,
        addressWard: string,
        addressThana: string,
        addressDistrict: string,
        packageName: string,
        stbNo: number,
        stbType: string,
        customerType: string,
    ){
        const newTask = new Task(firstName, lastName, regRmn, altRmn, detailAddress, addressWard, addressThana, addressDistrict, packageName, stbNo, stbType, customerType);
        this.tasks.push(newTask);
        return "Task Posted <3";
    }

    getTasks(){
        return [...this.tasks];
    }


    insertCustomerType(
        regIns: string,
        corpIns: string,
        vipIns: string,
        buildIns: string,
        bulkIns: string, 
        multiIns: string,
    ){
        const newCustomerType = new CustomerType(regIns, corpIns, vipIns, buildIns, bulkIns, multiIns);
        this.customerType.push(newCustomerType);
        return "Customer Posted <3"
    }


    
}