import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { History } from './history.entity';

import { CreateHistoryDto } from "./dto/create-history.dto"

@Injectable()
export class HistoryService {

  constructor(@InjectRepository(History) private historyRepositoriy: Repository<History>) { }

  createHistory(history: CreateHistoryDto) {
    const newHistory = this.historyRepositoriy.create(history);
    this.historyRepositoriy.save(newHistory)
  }
}
