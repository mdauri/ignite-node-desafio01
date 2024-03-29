import { Request, Response } from 'express';

import { TurnUserAdminUseCase } from './TurnUserAdminUseCase';

class TurnUserAdminController {
  constructor(private turnUserAdminUseCase: TurnUserAdminUseCase) {}

  handle(request: Request, response: Response): Response {
    const { user_id } = request.params;
    try {
      const user = this.turnUserAdminUseCase.execute({ user_id });
      if (user) {
        return response.send(user);
      }
      return response.send();
    } catch (error) {
      return response.status(404).send({ error: 'User not exists' });
    }
  }
}

export { TurnUserAdminController };
