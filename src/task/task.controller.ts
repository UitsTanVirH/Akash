import { Body, Controller, Get, Post, Req } from "@nestjs/common";
import { request } from "http";
import { Task } from "./task.entity";
import { TaskService } from "./task.service";

@Controller('task')
export class TaskController{
    constructor(private readonly taskService: TaskService){}

    @Post()
    create(@Body() task: Task): Promise<any> {
        return this.taskService.create(task);
    }

    @Get()
    index(): Promise<Task[]> {
        return this.taskService.findAll();
    }

}