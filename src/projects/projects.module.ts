import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ProjectsEntity } from './entities/projects.entity';
import { UsersProjectsEntity } from 'src/users/entities/usersProjects.entity';
import { ProjectsService } from './services/projects.service';
import { ProjectsController } from './controllers/projects.controller';

@Module({
    imports: [
        TypeOrmModule.forFeature([ProjectsEntity, UsersProjectsEntity]),
      ],
    providers: [ProjectsService],
    controllers: [ProjectsController],
     
})
export class ProjectsModule {


}
