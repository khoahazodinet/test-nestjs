import { AppBaseEntity } from 'src/common/entities/entity';
import { Column, Entity, JoinColumn, ManyToOne } from 'typeorm';
import { OrderEntity } from './order.entity';


@Entity('OrderDetail')
export class OrderDetailEntity extends AppBaseEntity {
  @Column({ type: 'varchar', length: 510, nullable: false })
  nftToken: string;

  @Column({type: 'uuid', name: 'orderId'})
  orderId: string;

  @ManyToOne(() => OrderEntity, (order: OrderEntity) => order.id)
  @JoinColumn({name: 'orderId'})
  order: OrderEntity;
}