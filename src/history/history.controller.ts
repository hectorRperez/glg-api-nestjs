import { Controller, Post, Body, Get } from '@nestjs/common';
import { CreateHistoryDto } from './dto/create-history.dto';
import { HistoryService } from './history.service';

//Dejarlo así, se entiende que => POST /history

@Controller('history')
export class HistoryController {

  constructor(private historyService: HistoryService) { }

  @Post()
  createHistory(@Body() newHistory: CreateHistoryDto) {
    console.log("Se recibio el post");
    return this.historyService.createHistory(newHistory);
  }

  @Get()
  ShowHistory(@Body() newHistory: CreateHistoryDto) {
    console.log("hola");
  }
}
