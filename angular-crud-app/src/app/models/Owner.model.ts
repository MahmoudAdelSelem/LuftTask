import { Account } from "./Account.model";

export interface Owner {
    id: string;
    name: string;
    dateOfBirth: Date;
    address: string;
    accounts: Account[]; // Array of AccountDto
  }