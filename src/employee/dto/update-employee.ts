import { InputType, OmitType, PartialType } from '@nestjs/graphql';
import { EmployeeCreateDTO } from './create-employee.input';

@InputType()
export class UpdateEmployeeInput extends PartialType(
  OmitType(EmployeeCreateDTO, [] as const),
) {}
