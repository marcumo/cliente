import { IsString, IsEmail, IsPhoneNumber, IsNotEmpty } from "class-validator";
import { PartialType, ApiProperty } from '@nestjs/swagger';

export class createClienteDto {
    @ApiProperty()
    @IsString()
    @IsNotEmpty()
    readonly name: string;

    @ApiProperty()
    @IsString()
    @IsNotEmpty()
    readonly lastName: string;
    
    @ApiProperty()
    @IsEmail()
    @IsNotEmpty()
    readonly email: string;

    @ApiProperty()
    @IsPhoneNumber()
    readonly phone: string;
}

export class updateClienteDto extends PartialType(createClienteDto) {}