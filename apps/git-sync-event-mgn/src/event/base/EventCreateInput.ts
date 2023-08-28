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
import {
  IsString,
  IsDate,
  ValidateNested,
  IsOptional,
  IsEnum,
} from "class-validator";
import { Type } from "class-transformer";
import { AttendeeCreateNestedManyWithoutEventsInput } from "./AttendeeCreateNestedManyWithoutEventsInput";
import { SessionCreateNestedManyWithoutEventsInput } from "./SessionCreateNestedManyWithoutEventsInput";
import { EnumEventEventType } from "./EnumEventEventType";

@InputType()
class EventCreateInput {
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
  description!: string;

  @ApiProperty({
    required: true,
  })
  @IsDate()
  @Type(() => Date)
  @Field(() => Date)
  startDate!: Date;

  @ApiProperty({
    required: true,
  })
  @IsDate()
  @Type(() => Date)
  @Field(() => Date)
  endDate!: Date;

  @ApiProperty({
    required: true,
    type: String,
  })
  @IsString()
  @Field(() => String)
  location!: string;

  @ApiProperty({
    required: false,
    type: () => AttendeeCreateNestedManyWithoutEventsInput,
  })
  @ValidateNested()
  @Type(() => AttendeeCreateNestedManyWithoutEventsInput)
  @IsOptional()
  @Field(() => AttendeeCreateNestedManyWithoutEventsInput, {
    nullable: true,
  })
  attendees?: AttendeeCreateNestedManyWithoutEventsInput;

  @ApiProperty({
    required: false,
    type: () => SessionCreateNestedManyWithoutEventsInput,
  })
  @ValidateNested()
  @Type(() => SessionCreateNestedManyWithoutEventsInput)
  @IsOptional()
  @Field(() => SessionCreateNestedManyWithoutEventsInput, {
    nullable: true,
  })
  sessions?: SessionCreateNestedManyWithoutEventsInput;

  @ApiProperty({
    required: false,
    enum: EnumEventEventType,
  })
  @IsEnum(EnumEventEventType)
  @IsOptional()
  @Field(() => EnumEventEventType, {
    nullable: true,
  })
  eventType?: "Tech" | "Design" | null;
}

export { EventCreateInput as EventCreateInput };
