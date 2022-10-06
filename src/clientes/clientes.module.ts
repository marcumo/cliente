import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { Cliente } from '../entities/clientes.entity';
import { ClientesController} from './clientes.controller';
import { ClientesDao } from './clientes.dao';
import { ClientesService } from './clientes.service';

@Module({
    imports: [
        TypeOrmModule.forRoot({
            type: 'postgres',
            host: 'jelani.db.elephantsql.com',
            port: 5432,
            username: 'geirdsjr',
            password: 'Gd8M7fyKuHQdQopkCvY4qFprql1CoaGF',
            database: 'geirdsjr',
            synchronize: true,
            autoLoadEntities: true,
          }),
        TypeOrmModule.forFeature([Cliente]),
    ],
    controllers: [
        ClientesController,
    ],
    providers: [
        ClientesDao, ClientesService, 
    ],
    exports: [
        ClientesService, ClientesDao
    ]
})
export class ClientesModule {}
