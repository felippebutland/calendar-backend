import { GraphQLModule } from '@nestjs/graphql';
import { join } from 'path';
import { EventsModule } from './events/events.module';
import { Module } from "@nestjs/common";

@Module({
  imports: [
    GraphQLModule.forRoot({
      autoSchemaFile: join(process.cwd(), 'src/schema.gql'),
      sortSchema: true,
    }),
    EventsModule,
  ],
})
export class AppModule {}
