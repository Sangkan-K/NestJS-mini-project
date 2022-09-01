import { Injectable } from '@nestjs/common';
import { Board, BoardStatus } from './board.model';
import { v1 as uuid } from 'uuid';

@Injectable()
export class BoardsService {
  private boards: Board[] = [];

  getAllBoards(): Board[] {
    return this.boards;
  }

  createBoard(title: string, description: string) {
    const board: Board = {
      id: uuid(),
      title,
      description,
      status: BoardStatus.PUBLIC,
    };

    this.boards.push(board);
    return board;
  }
}
// Board에 ID가 있었기 떄문에 오류가 발생한다. 로컬 메모리를 사용할 때는 임의의 유니크한 값을 부여해야한다.
// 여기서는 uuid 모듈을 활용해보자. (npm install uuid --save)
