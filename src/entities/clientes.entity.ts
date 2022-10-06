import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Cliente {
  @PrimaryGeneratedColumn()  
  id: number;
    
  @Column()
  name: string;
    
  @Column()
  lastName: string;
    
  @Column()
  email: string;
    
  @Column()
  phone: string;
  }