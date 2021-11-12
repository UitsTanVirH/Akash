import { Body, Controller, Get, Post } from "@nestjs/common";
import { TaskService } from "./task.service";

@Controller('task')
export class TaskController{
    constructor(private readonly taskService: TaskService){}

    @Post()
    addTask(
        @Body('firstName') firstName: string, 
        @Body('lastName') lastName: string
        ): any{
            const s = this.taskService.insertTask(firstName, lastName);
            return {s};

    }

    @Get()
    getAllTasks(){
        return this.taskService.getTasks();
    }
}