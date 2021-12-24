import { User } from '../../model/User';
import { IUsersRepository } from '../../repositories/IUsersRepository';

interface IRequest {
  user_id: string;
}

class ListAllUsersUseCase {
  constructor(private usersRepository: IUsersRepository) {}

  execute({ user_id }: IRequest): User[] {
    const userAdmin = this.usersRepository.findById(user_id);
    let all: User[] = [];
    if (userAdmin) {
      if (userAdmin.admin === true) {
        all = this.usersRepository.list();
        return all;
      }
      throw new Error('User is not admin');
    }
    throw new Error('User not exists');
  }
}

export { ListAllUsersUseCase };
