import { Entity, EntityRepository, Repository } from "typeorm";
import { User } from "../models/user";

@EntityRepository(User)
class UserRepository extends Repository<User> {}

export { UserRepository }
