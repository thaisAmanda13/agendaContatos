import { TemplateBindingParseResult } from "@angular/compiler"

export class Contato {

    private _nome: string
    private _telefone: number
    private _dataNascimento: string
    private _sexo: string
    private _id: number

    constructor(nome: string, telefone: number, dataNascimento: string, sexo: string) {
        this._nome = nome
        this._telefone = telefone
        this._sexo = sexo
        this._dataNascimento = dataNascimento
    }

    public getNome(): string {
        return this._nome
    }

    public setNome(nome: string): void {
        this._nome = nome
    }

    public setTelefone(telefone: number): void {
        this._telefone = telefone
    }

    public getTelefone() 
    {
        return this._telefone
    }

    public getSexo(): string 
    {
        return this._sexo
    }

    public setSexo(sexo: string):void 
    {
        this._sexo = sexo
    }

    public getDataNascimento(): string 
    {
        return this._dataNascimento
    }

    public setDataNascimento(dataNascimento: string): void 
    {
        this._dataNascimento = dataNascimento
    }
}
