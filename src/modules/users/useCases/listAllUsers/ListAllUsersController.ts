import { Request, Response } from 'express';

import { ListAllUsersUseCase } from './ListAllUsersUseCase';

class ListAllUsersController {
  constructor(private listAllUsersUseCase: ListAllUsersUseCase) {}

  handle(request: Request, response: Response): Response {
    let { user_id } = request.body;
    try {
      if (!user_id) {
        user_id = request.header('user_id');
      }

      const all = this.listAllUsersUseCase.execute({ user_id });

      return response.json(all);
    } catch (error) {
      return response.status(400).send({ error: 'User is not admin' });
    }
  }
}

export { ListAllUsersController };
