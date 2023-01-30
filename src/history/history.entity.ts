import { Column, Entity, PrimaryGeneratedColumn } from "typeorm"

@Entity()
export class History {

  @PrimaryGeneratedColumn()
  id: number;

  @Column({ nullable: true, default: null })
  name: string;

  @Column({ nullable: true, default: null })
  phone: string;

  @Column({ nullable: true, default: null })
  companyName: string

  @Column({ nullable: true, default: null })
  shippingFrom: string;

  @Column({ nullable: true, default: null })
  shippingTo: string;

  @Column({ nullable: true, default: null })
  service: string;

  @Column({ nullable: true, default: null })
  email: string;

  @Column({ type: "datetime", default: () => "CURRENT_TIMESTAMP" })
  createAt: Date;
}