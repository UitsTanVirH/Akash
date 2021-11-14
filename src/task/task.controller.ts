import { Body, Controller, Get, Post } from "@nestjs/common";
import { TaskService } from "./task.service";

@Controller('task')
export class TaskController{
    constructor(private readonly taskService: TaskService){}

    @Post()
    addTask(
        @Body('firstName') firstName: string, 
        @Body('lastName') lastName: string,
        @Body('regRmn') regRmn: number,
        @Body('altRmn') altRmn: number,
        @Body('detailAddress') detailAddress: string,
        @Body('addressWard') addressWard: string,
        @Body('addressThana') addressThana: string,
        @Body('addressDistrict') addressDistrict: string,
        @Body('packageName') packageName: string,
        @Body('stbNo') stbNo: number,
        @Body('stbType') stbType: string,
        @Body('customerType') customerType: string,
        ): any{
            const s = this.taskService.insertTask(firstName, lastName, regRmn, altRmn, detailAddress, addressWard, addressThana, addressDistrict, packageName, stbNo, stbType, customerType);
            return {s};
    }

    @Get()
    getAllTasks(){
        return this.taskService.getTasks();
    }

    @Post('customer')
    addCustomerType(){

    }


}