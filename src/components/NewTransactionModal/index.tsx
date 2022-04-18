import Modal from 'react-modal'

import { Container, RadioBox, TransactionTypeContainer } from './styles'
import closeImg from '../../assets/close.svg'
import incomeImg from '../../assets/income.svg'
import outcomeImg from '../../assets/outcome.svg'
import { FormEvent, useContext, useState } from 'react'
import { api } from '../../services/api'
import { TransactionsContext } from '../../hooks/useTransactions'
import { NewTransaction } from '../../interfaces'

interface NewTransactionModalProps {
    isOpen: boolean;
    onRequestClose: () => void;
}

export function NewTransactionModal({ isOpen, onRequestClose }: NewTransactionModalProps) {
    const { createTransaction } = useContext(TransactionsContext);
    
    const [newTransaction, setNewTransaction] = useState<NewTransaction>({
        category: '',
        title: '',
        type: 'deposity',
        amount: 0,
    });

    async function handleCreateNewTransaction(event: FormEvent) {
        event.preventDefault();
        await createTransaction(newTransaction);
        setNewTransaction({
            category: '',
            title: '',
            type: 'deposity',
            amount: 0,
        });
        onRequestClose();
    };

    function handleSetCategoryTransaction(category: string) {
        setNewTransaction({
            category: category,
            title: newTransaction.title,
            type: newTransaction.type,
            amount: newTransaction.amount, 
        })
    }

    function handleSetTitleTransaction(title: string) {
        setNewTransaction({
            category: newTransaction.category,
            title: title,
            type: newTransaction.type,
            amount: newTransaction.amount, 
        })
    }

    function handleSetTypeTransaction(type: string) {
        setNewTransaction({
            category: newTransaction.category,
            title: newTransaction.title,
            type: type,
            amount: newTransaction.amount, 
        })
    }

    function handleSetValueTransaction(amount: number) {
        setNewTransaction({
            category: newTransaction.category,
            title: newTransaction.title,
            type: newTransaction.type,
            amount: amount, 
        })
    }
    


    return (
        <Modal
            isOpen={isOpen}
            onRequestClose={onRequestClose}
            overlayClassName="react-modal-overlay"
            className="react-modal-content"
        >
            <button
                type='button'
                onClick={onRequestClose}
                className="react-modal-close"
            >
                <img src={closeImg} alt="Close modal" />
            </button>
            <Container onSubmit={handleCreateNewTransaction}>
                <h2>Cadastrar transação</h2>

                <input
                    placeholder='Título'
                    value={newTransaction.title}
                    onChange={event => handleSetTitleTransaction(event.target.value)}
                />

                <input
                    type="number"
                    placeholder='Valor'
                    value={newTransaction.amount}
                    onChange={event => handleSetValueTransaction(Number(event.target.value))}
                />

                <input
                    placeholder='Categoria'
                    value={newTransaction.category}
                    onChange={event => handleSetCategoryTransaction(event.target.value)}
                />

                <TransactionTypeContainer>
                    <RadioBox
                        type='button'
                        onClick={() => handleSetTypeTransaction('deposity')}
                        isActive={newTransaction.type === 'deposity' && true}
                        typeTransaction={newTransaction.type}
                    >
                        <img src={incomeImg} alt="Entrada" />
                        <span>Entrada</span>
                    </RadioBox>

                    <RadioBox
                        type='button'
                        onClick={() => handleSetTypeTransaction('withdraw')}
                        isActive={newTransaction.type === 'withdraw' && true}
                        typeTransaction={newTransaction.type}
                    >
                        <img src={outcomeImg} alt="Saída" />
                        <span>Saída</span>
                    </RadioBox>
                </TransactionTypeContainer>

                <button type="submit">
                    Cadastrar
                </button>
            </Container>
        </Modal>
    );
}