export class Message {
  id?: string;
  body: string;
  username: string;
  userId?: string;

  constructor(id?: string, body: string, username: string, userId?: string){
    this.id = id;
    this.body = body;
    this.username = username;
    this.userId = userId;
  }
}
