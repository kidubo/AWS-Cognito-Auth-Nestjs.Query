import { InputType, OmitType, PartialType } from '@nestjs/graphql';
import { CreateProjectInput } from './create-project.input.ts';

@InputType()
export class UpdateProjectInput extends PartialType(
  OmitType(CreateProjectInput, [] as const),
) {}
