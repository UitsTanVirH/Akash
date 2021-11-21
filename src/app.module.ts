import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { TaskModule } from './task/task.module';

@Module({
  imports: [TypeOrmModule.forRoot({
    type: 'mysql',
    host: 'localhost',
    port: 3306,
    username: 'tanvir',
    password: '08272829',
    database: 'wfms_task',
    entities: ['dist/**/*.entity{.ts,.js}'],
    synchronize: true,
  }), TaskModule],
})
export class AppModule {}
