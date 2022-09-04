import { Body, Controller, Get, Post } from '@nestjs/common';
import { title } from 'process';
import { Board } from './board.model';
import { BoardsService } from './boards.service';

@Controller('boards')
export class BoardsController {
  constructor(private boardsService: BoardsService) {}

  @Get('/') // Read 기능 구현
  getAllBoard(): Board[] {
    return this.boardsService.getAllBoards();
  }

  @Post()
  createBoard(
    @Body('title') title: string,
    @Body('description') description: string,
  ): Board {
    return this.boardsService.createBoard(title, description);
  }
}
// express에서는 클라이언트의 요청을 req.body로 받고
// nest JS에서는 @Body() body로 받아온다.
