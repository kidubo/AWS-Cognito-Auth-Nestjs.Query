import { SortDirection } from '@nestjs-query/core';
import { NestjsQueryGraphQLModule } from '@nestjs-query/query-graphql';
import { NestjsQueryTypeOrmModule } from '@nestjs-query/query-typeorm';
import { Module } from '@nestjs/common';
import { CreateProjectInput } from './dto/create-project.input.ts';
import { UpdateProjectInput } from './dto/update-project.input';
import { Project } from './entities/project.entity';

@Module({
  imports: [
    NestjsQueryGraphQLModule.forFeature({
      imports: [NestjsQueryTypeOrmModule.forFeature([Project])],
      resolvers: [
        {
          DTOClass: Project,
          EntityClass: Project,
          CreateDTOClass: CreateProjectInput,
          UpdateDTOClass: UpdateProjectInput,
          read: {
            defaultSort: [
              {
                field: 'id',
                direction: SortDirection.DESC,
              },
            ],
          },
          create: {
            // guards: [GqlAuthGuard],
          },
          update: {
            // guards: [GqlAuthGuard],
          },
          delete: {
            // guards: [GqlAuthGuard],
          },
        },
      ],
    }),
  ],
  providers: [],
})
export class ProjectModule {}
