export interface expense {
     
    id: string; // id da despesa
    description: string; // nome da despesa
    value: number; // valor da despesa
    date: Date; // data em que lançou a despesa
    account: string; // conta de onde a despesa está vindo
}