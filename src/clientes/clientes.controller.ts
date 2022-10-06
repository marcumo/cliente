import { Controller, Post, Body, Get, Put, Delete, Param, ParseIntPipe } from '@nestjs/common';
import { ClientesService } from './clientes.service';
import { createClienteDto, updateClienteDto } from '../dto/clientes.dto';
import { ApiTags, ApiOperation } from '@nestjs/swagger';

@ApiTags('clientes')
@Controller('clientes')
export class ClientesController {
    constructor(private clienteService: ClientesService) {}
    @Post()
    @ApiOperation({summary: 'Crear clientes'})
    create(@Body() payload: createClienteDto) {
        return this.clienteService.create(payload);
    }

    @Get()
    @ApiOperation({summary: 'Listar clientes'})
    list(){
        return this.clienteService.findAll();
    }

    @Put(':id')
    @ApiOperation({summary: 'Actualizar clientes'})
    update(@Param('id', ParseIntPipe) id:number, @Body() payload: updateClienteDto){
        return this.clienteService.update(id, payload);
    }

    @Delete(':id')
    @ApiOperation({summary: 'Eliminar Clientes'})
    delete(@Param('id', ParseIntPipe) id: number){
        return this.clienteService.remove(id);
    }
}
