import { ApiProperty } from "@nestjs/swagger";
import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";


@Entity()
export class Task{
    @PrimaryGeneratedColumn()
    id: number;

    @ApiProperty()
    @Column('varchar', { length: 255 })
    firstName: string;

    @ApiProperty()
    @Column('varchar', { length: 255 })
    lastName: string;

    @ApiProperty()
    @Column('int')
    regRmn: number;

    @ApiProperty()
    @Column('int')
    altRmn: number;

    @ApiProperty()
    @Column('varchar', {length: 255})
    detailAddress: string;

    @ApiProperty()
    @Column('varchar', { length: 255 })
    addressWard: string;

    @ApiProperty()
    @Column('varchar', { length: 255 })
    addressThana: string;

    @ApiProperty()
    @Column('varchar', { length: 255 })
    addressDistrict: string;

    @ApiProperty()
    @Column('varchar', { length: 255 })
    packageName: string;

    @ApiProperty()
    @Column('int')
    stbNo: number;

    @ApiProperty()
    @Column('varchar', { length: 255 })
    stbType: string;

    @ApiProperty()
    @Column('varchar', { length: 255 })
    customerType: string;
}

