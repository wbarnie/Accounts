export class Account {
  public account: string;
  public amount: number;
  public percentageChange: string;
  public amountChange: number;

  constructor(account: string, amount: number, percentageChange: string, amountChange: number) {
    this.account = account;
    this.amount = amount;
    this.percentageChange = percentageChange;
    this.amountChange = amountChange;
  }
}
