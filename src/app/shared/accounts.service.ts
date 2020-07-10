import {Injectable} from '@angular/core'
import {Account} from './account-model';

@Injectable({
  providedIn: 'root'
})
export class AccountsService {

  private accounts: Account[] = [
    new Account(
      'AAA-0029',
      39160334.42,
      '-0.07',
      31435.67
    ),
    new Account('IRA-0146',
      15884302.39,
      '0.03',
      7430.83
    ),
    new Account('AAA-1812',
      2010926.10,
      '0.21',
      36881.83
    ),
    new Account('REG-2019',
      13465679.34,
      '0.00',
      0.00
    ),
    new Account('AAA-3810',
      10050054.07,
      '0.07',
      8916.69
    ),
    new Account('IRA-5200',
      5763.36,
      '-0.08',
      8916.69
    ),
    new Account('IRA-5200',
      5763.36,
      '-0.08',
      8916.69
    ),
    new Account('AAA-3810',
      10050054.07,
      '0.07',
      8916.69
    ),
    new Account('REG--2019',
      13465679.34,
      '0.00',
      0.00
    ),
    new Account('AAA-1812',
      2010926.10,
      '0.21',
      38881.63
    ),
    new Account('IRA-0146',
      15884302.39,
      '0.03',
      7430.83
    ),
    new Account('AAA--0029',
      39160334.42,
      '-0.07',
      31435.87
    )
  ];

  constructor() {
  }
  getAccounts() {
      return this.accounts.slice();
    }

    geAccount(index: number) {
      return this.accounts[index];
    }
}
