import { FilterableField } from '@nestjs-query/query-graphql';
import { ObjectType } from '@nestjs/graphql';
import { Project } from 'src/project/entities/project.entity';
import {
  Column,
  Entity,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';

@ObjectType('Employee')
// @OffsetConnection('project', () => Project, { disableRemove: true })
@Entity()
export class Employee {
  @FilterableField()
  @PrimaryGeneratedColumn()
  id: string;

  @FilterableField()
  @Column()
  firstName: string;

  @FilterableField()
  @Column()
  lastName: string;

  @FilterableField()
  @Column()
  designation: string;

  @FilterableField({ nullable: true })
  @Column({ nullable: true })
  city: string;

  @ManyToOne(() => Project, (project) => project.employees, {
    onDelete: 'CASCADE',
    nullable: false,
  })
  // @Field(() => Project)
  @JoinColumn()
  project: Project;

  @Column()
  @FilterableField()
  projectId: string;
}
