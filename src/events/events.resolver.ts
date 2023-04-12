import { Resolver, Query, Args, Mutation } from '@nestjs/graphql';
import { Event } from './model/event.model';
import { EventsService } from './events.service';
import { NewEventInput } from './dto/new-event.input';
import { NotFoundException } from '@nestjs/common';

@Resolver(of => Event)
export class EventsResolver {
  constructor(private readonly eventsService: EventsService) {}

  @Query(returns => Event)
  async eventCalendar(@Args('id') id: string): Promise<Event> {
    const event = await this.eventsService.findOneById(id);
    if (!event) {
      throw new NotFoundException(id);
    }
    return event;
  }

  @Query((returns) => [Event])
  events(): Event[] {
    return this.eventsService.findAll();
  }

  @Mutation(returns => Event)
  createEvent(@Args('newEventData') newEventData: NewEventInput): Event {
    return this.eventsService.create(newEventData);
  }

  @Mutation(returns => Boolean)
  async removeEvent(@Args('id') id: string): Promise<boolean> {
    return this.eventsService.remove(id);
  }
}
