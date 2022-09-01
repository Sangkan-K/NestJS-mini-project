// 모델을 정의할 떄는 class나 interface를 활용
// interface는 변수의 타입만을 체크하고 classes는 변수의 타입도 체크하고 인스턴스 또한 생성할 수 있다.
// board status는 공개 게시물인지 비밀 게시물인지 나눠주는 것 (public , private)
export interface Board {
  id: string;
  title: string;
  description: string;
  status: BoardStatus;
}

export enum BoardStatus {
  PUBLIC = 'PUBLIC',
  PRIVATE = 'PRIVATE',
}
