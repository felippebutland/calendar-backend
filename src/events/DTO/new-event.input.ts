import { Field, InputType } from '@nestjs/graphql';

@InputType()
export class NewEventInput {
  @Field()
  title: string;

  @Field()
  date: string;

  @Field({ nullable: true })
  startTime?: string;

  @Field({ nullable: true })
  endTime?: string;
}
