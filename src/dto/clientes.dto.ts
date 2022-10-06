import { IsString, IsEmail, IsPhoneNumber, IsNotEmpty } from "class-validator";
import { PartialType } from '@nestjs/mapped-types';

export class createClienteDto {
    @IsString()
    @IsNotEmpty()
    readonly name: string;

    @IsString()
    @IsNotEmpty()
    readonly lastName: string;
    
    @IsEmail()
    @IsNotEmpty()
    readonly email: string;

    @IsPhoneNumber()
    readonly phone: string;
}

export class updateClienteDto extends PartialType(createClienteDto) {}