import {
  FilterableField,
  FilterableOffsetConnection,
  OffsetConnection,
} from '@nestjs-query/query-graphql';
import { Field, ObjectType } from '@nestjs/graphql';
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

  @Field()
  @Column()
  lastName: string;

  @Field()
  @Column()
  designation: string;

  @Field({ nullable: true })
  @Column({ nullable: true })
  city: string;

  @ManyToOne(() => Project, (project) => project.employees, {
    onDelete: 'CASCADE',
    nullable: false,
  })
  @Field(() => Project)
  @JoinColumn()
  project: Project;

  @Column()
  @FilterableField()
  projectId: string;
}
