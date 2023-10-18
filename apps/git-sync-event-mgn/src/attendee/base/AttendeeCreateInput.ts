/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { InputType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import { IsString, ValidateNested, IsOptional } from "class-validator";
import { EventWhereUniqueInput } from "../../event/base/EventWhereUniqueInput";
import { Type } from "class-transformer";
import { TicketCreateNestedManyWithoutAttendeesInput } from "./TicketCreateNestedManyWithoutAttendeesInput";

@InputType()
class AttendeeCreateInput {
  @ApiProperty({
    required: true,
    type: String,
  })
  @IsString()
  @Field(() => String)
  name!: string;

  @ApiProperty({
    required: true,
    type: String,
  })
  @IsString()
  @Field(() => String)
  email!: string;

  @ApiProperty({
    required: true,
    type: () => EventWhereUniqueInput,
  })
  @ValidateNested()
  @Type(() => EventWhereUniqueInput)
  @Field(() => EventWhereUniqueInput)
  event!: EventWhereUniqueInput;

  @ApiProperty({
    required: false,
    type: () => TicketCreateNestedManyWithoutAttendeesInput,
  })
  @ValidateNested()
  @Type(() => TicketCreateNestedManyWithoutAttendeesInput)
  @IsOptional()
  @Field(() => TicketCreateNestedManyWithoutAttendeesInput, {
    nullable: true,
  })
  tikets?: TicketCreateNestedManyWithoutAttendeesInput;

  @ApiProperty({
    required: false,
    type: String,
  })
  @IsString()
  @IsOptional()
  @Field(() => String, {
    nullable: true,
  })
  lastName?: string | null;
}

export { AttendeeCreateInput as AttendeeCreateInput };
