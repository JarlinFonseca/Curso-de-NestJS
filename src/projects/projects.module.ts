import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ProjectsEntity } from './entities/projects.entity';
import { UsersProjectsEntity } from 'src/users/entities/usersProjects.entity';

@Module({
    imports: [
        TypeOrmModule.forFeature([ProjectsEntity, UsersProjectsEntity]),
      ],
     
})
export class ProjectsModule {


}
