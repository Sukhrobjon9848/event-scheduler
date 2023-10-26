import { Location } from 'src/location/model/location.entity';
import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  ManyToOne,
  JoinColumn,
} from 'typeorm';

@Entity()
export class Event {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  title: string;

  @Column()
  description: string;

  @Column()
  startDate: Date;

  @Column()
  endDate: Date;

  @Column({})
  locationId: number;
  @ManyToOne(() => Location, (location) => location)
  @JoinColumn({ name: 'locationId' })
  location: Location;
}
