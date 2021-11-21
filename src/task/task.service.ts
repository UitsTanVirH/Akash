import { BadRequestException, Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";
import { Task } from "./task.entity"; 

@Injectable()
export class TaskService{
    constructor(@InjectRepository(Task) private taskRepository: Repository<Task>) { }
    
    async findAll(): Promise<Task[]> {
        return await this.taskRepository.find();
    }
    async create(task: Task): Promise<Task> {
        try {
            return await this.taskRepository.save(task);
        } catch (e) {
            throw new BadRequestException("Invalid request");
        }
    }

}