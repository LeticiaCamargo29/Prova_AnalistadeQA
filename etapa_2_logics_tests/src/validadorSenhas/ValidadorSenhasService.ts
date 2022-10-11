import { EValidacoesSenhas } from "./EValidacoesSenhas"

export class ValidadorSenhasService {
    public validar(senha: string) {
        const criteriosNaoAtendidos: Array<EValidacoesSenhas> = []

        if (!this.hasPeloMenosSeisCaracteres(senha))
            criteriosNaoAtendidos.push(EValidacoesSenhas.SENHA_DEVE_POSSUIR_PELO_MENOS_6_CARACTERES)

        if (!this.hasMenosDeDozeCaracteres(senha))
            criteriosNaoAtendidos.push(EValidacoesSenhas.SENHA_DEVE_POSSUIR_PELO_MENOS_DE_12_CARACTERES)

        if (!this.hasExclamacao(senha))
            criteriosNaoAtendidos.push(EValidacoesSenhas.SENHA_DEVE_POSSUIR_PELO_MENOS_UM_PONTO_EXCLAMACAO)

        if (!this.hasArroba(senha))
            criteriosNaoAtendidos.push(EValidacoesSenhas.SENHA_DEVE_POSSUIR_PELO_MENOS_UM_ARROBA)

        if (!this.hasPeloMenosUmaLetraMaiuscula(senha))
            criteriosNaoAtendidos.push(EValidacoesSenhas.SENHA_DEVE_POSSUIR_PELO_MENOS_UMA_LETRA_MAIUSCULA)

        if (!this.hasPeloMenosUmaLetraMinuscula(senha))
            criteriosNaoAtendidos.push(EValidacoesSenhas.SENHA_DEVE_POSSUIR_PELO_MENOS_UMA_LETRA_MINUSCULA)

        if (!this.hasNumero(senha))
            criteriosNaoAtendidos.push(EValidacoesSenhas.SENHA_DEVE_POSSUIR_PELO_MENOS_UM_NUMERO)

        if (!this.isPrimeiroCaractereNumero(senha))
            criteriosNaoAtendidos.push(EValidacoesSenhas.PRIMEIRO_CARACTERE_DA_SENHA_DEVE_SER_NUMERO)

        if (!this.isUltimoCaractereLetra(senha))
            criteriosNaoAtendidos.push(EValidacoesSenhas.ULTIMO_CARACTERE_DA_SENHA_DEVE_SER_LETRA)

        return criteriosNaoAtendidos
    }

    public hasPeloMenosSeisCaracteres(senha: string): boolean {
        /* 
            Objetivo: deve validar se a senha possui pelo menos seis caracteres. 
            Retorno:
                1. Se a senha tiver pelo menos seis caracteres, deve retornar true;
                2. Se a senha tiver menos de seis caracteres, retornar false
        */
        return senha.length >= 6;
    }

    public hasMenosDeDozeCaracteres(senha: string): boolean {
        /* 
            Objetivo: deve validar se a senha possui menos de doze caracteres. 
            Retorno:
                1. Se a senha tiver menos de doze caracteres, deve retornar true;
                2. Se a senha tiver mais de doze caracteres, deve retornar false;
        */
        return (senha.length < 12);

    }

    public hasExclamacao(senha: string): boolean {
        /* 
            Objetivo: deve validar se a senha possui o caractere ! (ponto de exclamação). 
            Retorno:
                1. Se a senha possuir ponto de exclamação, deve retornar true;
                2. Se a senha não possuir ponto de exclamação, deve retornar false;
        */
        return senha.includes('!');
    }

    public hasArroba(senha: string): boolean {
        /* 
            Objetivo: deve validar se a senha possui o caractere @ (arroba). 
            Retorno:
                1. Se a senha possuir ponto de exclamação, deve retornar true;
                2. Se a senha não possuir ponto de exclamação, deve retornar false;
        */
        return senha.includes('@');
    }

    public hasPeloMenosUmaLetraMaiuscula(senha: string): boolean {
        /* 
            Objetivo: deve validar se existe pelo menos uma letra maiúscula na senha. 
            Retorno:
                1. Se a senha possuir pelo menos uma letra maiúscula, deve retornar true;
                2. Se a senha não possuir pelo menos uma letra maiúscula, deve retornar false;
        */
                var letrasMaiusculas = /[A-Z]/;
                return letrasMaiusculas.test(senha)     
      }

    public hasPeloMenosUmaLetraMinuscula(senha: string): boolean {
        /* 
            Objetivo: deve validar se existe pelo menos uma letra minúscula na senha. 
            Retorno:
                1. Se a senha possuir pelo menos uma letra minúscula, deve retornar true;
                2. Se a senha não possuir pelo menos uma letra minúscula, deve retornar false;
        */
        var letrasMinusculas = /[a-z]/;
        return letrasMinusculas.test(senha)
    }

    public hasNumero(senha: string): boolean {
        /* 
            Objetivo: deve validar se existe pelo menos um número na senha. 
            Retorno:
                1. Se a senha possuir pelo menos um número, deve retornar true;
                2. Se a senha não possuir pelo menos um número, deve retornar false;
        */
        
        return /\d/.test(senha);
    }

    public isPrimeiroCaractereNumero(senha: string): boolean {
        /* 
            Objetivo: deve validar se o primeiro caractere da senha é um número. 
            Retorno:
                1. Se o primeiro caractere da senha for um número, deve retornar true;
                2. Se a primeiro caractere da senha não for um número, deve retornar false;
        */
        return !(Number.isNaN(senha[0]));
    }

    public isUltimoCaractereLetra(senha: string): boolean {
        /* 
            Objetivo: deve validar se o último caractere da senha é uma letra. 
            Retorno:
                1. Se o último caractere da senha for uma letra, deve retornar true;
                2. Se a último caractere da senha não for uma letra, deve retornar false;
        */
            return (Number.isNaN(senha[senha.length-1]));
    }
}