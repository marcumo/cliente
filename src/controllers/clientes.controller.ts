import { Controller, Post, Body, Get, Put, Delete, Param, ParseIntPipe } from '@nestjs/common';
import { ClientesService } from 'src/services/clientes.service';
import { createClienteDto, updateClienteDto } from 'src/dto/clientes.dto';


@Controller('clientes')
export class ClientesController {
    constructor(private clienteService: ClientesService) {}
    @Post()
    create(@Body() payload: createClienteDto) {
        return this.clienteService.create(payload);
    }

    @Get()
    list(){
        return this.clienteService.findAll();
    }

    @Put(':id')
    update(@Param('id', ParseIntPipe) id:number, @Body() payload: updateClienteDto){
        return this.clienteService.update(id, payload);
    }

    @Delete(':id')
    delete(@Param('id', ParseIntPipe) id: number){
        return this.clienteService.remove(id);
    }
}
