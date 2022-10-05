import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ClientesController } from './controllers/clientes.controller';
import { ClientesService } from './services/clientes.service';

@Module({
  imports: [],
  controllers: [AppController, ClientesController],
  providers: [AppService, ClientesService],
})
export class AppModule {}
