import { FilterableField, OffsetConnection } from '@nestjs-query/query-graphql';
import { ObjectType, Field, Int } from '@nestjs/graphql';
import { Employee } from 'src/employee/entities/employee.entity';
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';

@ObjectType()
@OffsetConnection('employee', () => Employee)
@Entity()
export class Project {
  @FilterableField()
  @PrimaryGeneratedColumn()
  id: string;
  @FilterableField()
  @Column()
  name: string;
  @FilterableField(() => Int)
  @Column()
  code: number;

  @OneToMany(() => Employee, (employee) => employee.project)
  @Field(() => [Employee], { nullable: true })
  employees: Employee[];
}
