import { Module } from "@nestjs/common";
import { JwtModule } from "@nestjs/jwt";
import { TypeOrmModule } from "@nestjs/typeorm";
import { TaskController } from "./task.controller";
import { Task } from "./task.entity";
import { TaskService } from "./task.service";

@Module({
    imports: [TypeOrmModule.forFeature([Task]), JwtModule.register({
        secret: 'secret',
        signOptions: {
          expiresIn: '1d'
        }
      })],
    controllers: [TaskController],
    providers: [TaskService],
})
export class TaskModule{}