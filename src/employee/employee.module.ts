import { SortDirection } from '@nestjs-query/core';
import { NestjsQueryGraphQLModule } from '@nestjs-query/query-graphql';
import { NestjsQueryTypeOrmModule } from '@nestjs-query/query-typeorm';
import { Module } from '@nestjs/common';
import { CognitoAuthGuard } from 'src/auth/cognito.guard';
import { EmployeeCreateDTO } from './dto/create-employee.input';
import { UpdateEmployeeInput } from './dto/update-employee';
import { Employee } from './entities/employee.entity';

const guards = [CognitoAuthGuard];

@Module({
  imports: [
    NestjsQueryGraphQLModule.forFeature({
      imports: [NestjsQueryTypeOrmModule.forFeature([Employee])],
      resolvers: [
        {
          DTOClass: Employee,
          EntityClass: Employee,
          CreateDTOClass: EmployeeCreateDTO,
          UpdateDTOClass: UpdateEmployeeInput,
          read: {
            defaultSort: [
              {
                field: 'id',
                direction: SortDirection.DESC,
              },
            ],
            // many: { guards },
          },
          create: {
            // guards
          },
          update: {
            // guards,
          },
          delete: {
            // guards,
          },
        },
      ],
    }),
  ],
  providers: [],
})
export class EmployeeModule {}
