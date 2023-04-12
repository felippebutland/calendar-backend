import { Injectable, NotFoundException } from '@nestjs/common';
import { Event } from './model/event.model';
import { NewEventInput } from './dto/new-event.input';

@Injectable()
export class EventsService {
  private events: Event[] = [];

  create(newEventData: NewEventInput): Event {
    const event: Event = {
      id: Date.now().toString(),
      ...newEventData,
    };
    this.events.push(event);
    return event;
  }

  findAll(): Event[] {
    return this.events;
  }

  findOneById(id: string): Event | undefined {
    return this.events.find((event) => event.id === id);
  }

  remove(id: string): boolean {
    const eventIndex = this.events.findIndex((event) => event.id === id);
    if (eventIndex === -1) {
      throw new NotFoundException(id);
    }
    this.events.splice(eventIndex, 1);
    return true;
  }
}
