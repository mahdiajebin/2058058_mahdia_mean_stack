export interface IAnswer{
    option: string
    correct: boolean
}


export interface Quiz {
    question: string
    answer: IAnswer[]
}
