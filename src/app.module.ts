import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { HistoryModule } from './history/history.module';

import { History } from "./history/history.entity";

//TypeOrmModule for Database configured
import { TypeOrmModule } from "@nestjs/typeorm";

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: "mysql",
      host: "localhost",
      port: 3306,
      username: "root",
      password: "1234",
      database: "glg_logistic",
      entities: [History],
      synchronize: true
    })
    , HistoryModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule { }
