export interface bankAccountInterface {

    bank: string; // banco da conta
    creditLimit: string // limite do cartão de crédito
    closingDate: Date; // data de fechamento da fatura do cartão
    dueDate: Date; // data de vencimento da fatura do cartão
    currentBill: number; // valor atual da fatura
    openingBalance: number; // saldo inicial da conta

}