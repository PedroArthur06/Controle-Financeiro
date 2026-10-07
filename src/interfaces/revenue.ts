export interface revenueInterface {

    id: string; // id da receita
    description: string; // nome da receita
    value: number; // valor da receita
    date: Date; // data em que lançou a receita
    account: string; // conta de onde a receita está vindo
}