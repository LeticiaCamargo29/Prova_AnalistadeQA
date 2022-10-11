import { ValidadorSenhasService } from "../../src/validadorSenhas/ValidadorSenhasService"

describe('ValidadorSenhasService unit testing', () => {
    const validadorSenhas = new ValidadorSenhasService()
    describe('Validador de pelo menos 6 caracteres', () => {
        it('Deve validar que a senha (string vazio) tem menos de 6 caracteres', () => {
            expect(validadorSenhas.hasPeloMenosSeisCaracteres('')).toBe(false)
        })

        it('Deve validar que a senha \' \' (espaço vazio) tem menos de 6 caracteres', () => {
            expect(validadorSenhas.hasPeloMenosSeisCaracteres('a')).toBe(false)
        })

        it('Deve validar que a senha \'a\' tem menos de 6 caracteres', () => {
            expect(validadorSenhas.hasPeloMenosSeisCaracteres('a')).toBe(false)
        })

        it('Deve validar que a senha \'aa\' tem menos de 6 caracteres', () => {
            expect(validadorSenhas.hasPeloMenosSeisCaracteres('aa')).toBe(false)
        })

        it('Deve validar que a senha \'aAa\' tem menos de 6 caracteres', () => {
            expect(validadorSenhas.hasPeloMenosSeisCaracteres('aAa')).toBe(false)
        })

        it('Deve validar que a senha \'aAa!\' tem menos de 6 caracteres', () => {
            expect(validadorSenhas.hasPeloMenosSeisCaracteres('aAa!')).toBe(false)
        })

        it('Deve validar que a senha \'aAa!1\' tem menos de 6 caracteres', () => {
            expect(validadorSenhas.hasPeloMenosSeisCaracteres('aAa!1')).toBe(false)
        })

        it('Deve validar que a senha \'1aAa!1\' tem pelo menos 6 caracteres', () => {
            expect(validadorSenhas.hasPeloMenosSeisCaracteres('1aAa!1')).toBe(true)
        })

        it('Deve validar que a senha \'123456\' tem pelo menos 6 caracteres', () => {
            expect(validadorSenhas.hasPeloMenosSeisCaracteres('123456')).toBe(true)
        })

        it('Deve validar que a senha \'1aAa!11aAa!1\' tem pelo menos 6 caracteres', () => {
            expect(validadorSenhas.hasPeloMenosSeisCaracteres('1aAa!11aAa!1')).toBe(true)
        })
    })

    describe('Validador menos de 12 caracteres', () => {
        it('Deve validar que a senha (string vazio) tem menos de 12 caracteres', () => {
            expect(validadorSenhas.hasMenosDeDozeCaracteres('')).toBe(true)
        })

        it('Deve validar que a senha \' \' (espaço vazio) tem menos de 12 caracteres', () => {
            expect(validadorSenhas.hasMenosDeDozeCaracteres('a')).toBe(true)
        })

        it('Deve validar que a senha \'a\' tem menos de 12 caracteres', () => {
            expect(validadorSenhas.hasMenosDeDozeCaracteres('a')).toBe(true)
        })

        it('Deve validar que a senha \'1\' tem menos de 12 caracteres', () => {
            expect(validadorSenhas.hasMenosDeDozeCaracteres('1')).toBe(true)
        })

        it('Deve validar que a senha \'aA1@a12\' tem menos de 12 caracteres', () => {
            expect(validadorSenhas.hasMenosDeDozeCaracteres('aA1@a12')).toBe(true)
        })

        it('Deve validar que a senha \'aA1@a12aA1@a12\' (14 caracteres) não tem menos de 12 caracteres', () => {
            expect(validadorSenhas.hasMenosDeDozeCaracteres('aA1@a12aA1@a12')).toBe(false)
        })

        it('Deve validar que a senha \'aA1@a12aA1@2\' (12 caracteres) não tem menos de 12 caracteres', () => {
            expect(validadorSenhas.hasMenosDeDozeCaracteres('aA1@a12aA1@2')).toBe(false)
        })
    })

    describe('Validador contém exclamação (!)', () => {
        it('Deve validar que a senha (string vazio) não tem exclamação', () => {
            expect(validadorSenhas.hasExclamacao('')).toBe(false)
        })

        it('Deve validar que a senha \' \' (espaço vazio) não tem exclamação', () => {
            expect(validadorSenhas.hasExclamacao('a')).toBe(false)
        })

        it('Deve validar que a senha \'a\' não tem exclamação', () => {
            expect(validadorSenhas.hasExclamacao('a')).toBe(false)
        })

        it('Deve validar que a senha \'a1\' não tem exclamação', () => {
            expect(validadorSenhas.hasExclamacao('a1')).toBe(false)
        })

        it('Deve validar que a senha \'a1!\' tem exclamação', () => {
            expect(validadorSenhas.hasExclamacao('a1!')).toBe(true)
        })

        it('Deve validar que a senha \'!\' tem exclamação', () => {
            expect(validadorSenhas.hasExclamacao('!')).toBe(true)
        })

        it('Deve validar que a senha \'!!\' tem exclamação', () => {
            expect(validadorSenhas.hasExclamacao('!')).toBe(true)
        })

        it('Deve validar que a senha \'!!\' tem exclamação', () => {
            expect(validadorSenhas.hasExclamacao('!')).toBe(true)
        })

        it('Deve validar que a senha \'!@!\' tem exclamação', () => {
            expect(validadorSenhas.hasExclamacao('!')).toBe(true)
        })

    })

    describe('Validador contém arroba (@)', () => {
        it('Deve validar que a senha (string vazio) não tem arroba', () => {
            expect(validadorSenhas.hasArroba('')).toBe(false)
        })

        it('Deve validar que a senha \' \' (espaço vazio) não tem arroba', () => {
            expect(validadorSenhas.hasArroba(' ')).toBe(false)
        })

        it('Deve validar que a senha \'a\' não tem arroba', () => {
            expect(validadorSenhas.hasArroba('a')).toBe(false)
        })

        it('Deve validar que a senha \'a1\' não tem arroba', () => {
            expect(validadorSenhas.hasArroba('a1')).toBe(false)
        })

        it('Deve validar que a senha \'a1@\' tem arroba', () => {
            expect(validadorSenhas.hasArroba('a1@')).toBe(true)
        })

        it('Deve validar que a senha \'@\' tem arroba', () => {
            expect(validadorSenhas.hasArroba('@')).toBe(true)
        })

        it('Deve validar que a senha \'@@\' tem arroba', () => {
            expect(validadorSenhas.hasArroba('@@')).toBe(true)
        })

        it('Deve validar que a senha \'!@!\' tem arroba', () => {
            expect(validadorSenhas.hasArroba('!@!')).toBe(true)
        })

    })

    describe('Validador contém pelo menos uma letra maiúscula', () => {
        it('Deve validar que a senha (string vazio) não tem letra maiúscula', () => {
            expect(validadorSenhas.hasPeloMenosUmaLetraMaiuscula('')).toBe(false)
        })

        it('Deve validar que a senha \' \' (espaço vazio) não tem letra maiúscula', () => {
            expect(validadorSenhas.hasPeloMenosUmaLetraMaiuscula(' ')).toBe(false)
        })

        it('Deve validar que a senha \'a\' não tem letra maiúscula', () => {
            expect(validadorSenhas.hasPeloMenosUmaLetraMaiuscula('a')).toBe(false)
        })

        it('Deve validar que a senha \'a1\' não tem letra maiúscula', () => {
            expect(validadorSenhas.hasPeloMenosUmaLetraMaiuscula('a1')).toBe(false)
        })

        it('Deve validar que a senha \'a12c\' não tem letra maiúscula', () => {
            expect(validadorSenhas.hasPeloMenosUmaLetraMaiuscula('a12c')).toBe(false)
        })

        it('Deve validar que a senha \'A\' tem letra maiúscula', () => {
            expect(validadorSenhas.hasPeloMenosUmaLetraMaiuscula('A')).toBe(true)
        })

        it('Deve validar que a senha \'AB1\' tem letra maiúscula', () => {
            expect(validadorSenhas.hasPeloMenosUmaLetraMaiuscula('AB1')).toBe(true)
        })

        it('Deve validar que a senha \'Ab\' tem letra maiúscula', () => {
            expect(validadorSenhas.hasPeloMenosUmaLetraMaiuscula('Ab')).toBe(true)
        })

        it('Deve validar que a senha \'Ab1\' tem letra maiúscula', () => {
            expect(validadorSenhas.hasPeloMenosUmaLetraMaiuscula('Ab1')).toBe(true)
        })
    })

    describe('Validador contém pelo menos uma letra minúscula', () => {
        it('Deve validar que a senha (string vazio) não tem letra minúscula', () => {
            expect(validadorSenhas.hasPeloMenosUmaLetraMinuscula('')).toBe(false)
        })

        it('Deve validar que a senha \' \' (espaço vazio) não tem letra minúscula', () => {
            expect(validadorSenhas.hasPeloMenosUmaLetraMinuscula(' ')).toBe(false)
        })

        it('Deve validar que a senha \'B\' não tem letra minúscula', () => {
            expect(validadorSenhas.hasPeloMenosUmaLetraMinuscula('B')).toBe(false)
        })

        it('Deve validar que a senha \'B1\' não tem letra minúscula', () => {
            expect(validadorSenhas.hasPeloMenosUmaLetraMinuscula('B1')).toBe(false)
        })

        it('Deve validar que a senha \'B12C\' não tem letra minúscula', () => {
            expect(validadorSenhas.hasPeloMenosUmaLetraMinuscula('B12C')).toBe(false)
        })

        it('Deve validar que a senha \'a\' tem letra minúscula', () => {
            expect(validadorSenhas.hasPeloMenosUmaLetraMinuscula('a')).toBe(true)
        })

        it('Deve validar que a senha \'ab1\' tem letra minúscula', () => {
            expect(validadorSenhas.hasPeloMenosUmaLetraMinuscula('ab1')).toBe(true)
        })

        it('Deve validar que a senha \'aB\' tem letra minúscula', () => {
            expect(validadorSenhas.hasPeloMenosUmaLetraMinuscula('aB')).toBe(true)
        })

        it('Deve validar que a senha \'aB1\' tem letra minúscula', () => {
            expect(validadorSenhas.hasPeloMenosUmaLetraMinuscula('aB1')).toBe(true)
        })
    })

    describe('Validador contém pelo menos um número', () => {
        it('Deve validar que a senha (string vazio) não tem número', () => {
            expect(validadorSenhas.hasNumero('')).toBe(false)
        })

        it('Deve validar que a senha \' \' (espaço vazio) não tem número', () => {
            expect(validadorSenhas.hasNumero(' ')).toBe(false)
        })

        it('Deve validar que a senha \'B\' não tem número', () => {
            expect(validadorSenhas.hasNumero('B')).toBe(false)
        })

        it('Deve validar que a senha \'Bb\' não número', () => {
            expect(validadorSenhas.hasNumero('Bb')).toBe(false)
        })

        it('Deve validar que a senha \'1\' tem número', () => {
            expect(validadorSenhas.hasNumero('1')).toBe(true)
        })

        it('Deve validar que a senha \'B1\' número', () => {
            expect(validadorSenhas.hasNumero('B1')).toBe(true)
        })

        it('Deve validar que a senha \'1B\' tem número', () => {
            expect(validadorSenhas.hasNumero('1B')).toBe(true)
        })
    })

    describe('Validador primeiro caractere deve ser número', () => {
        it('Deve validar que a senha (string vazio) não começa com número', () => {
            expect(validadorSenhas.isPrimeiroCaractereNumero('')).toBe(false)
        })

        it('Deve validar que a senha \' \' (espaço vazio) não começa com número', () => {
            expect(validadorSenhas.isPrimeiroCaractereNumero(' ')).toBe(false)
        })

        it('Deve validar que a senha \'B\' não começa com número', () => {
            expect(validadorSenhas.isPrimeiroCaractereNumero('B')).toBe(false)
        })

        it('Deve validar que a senha \'b\' não começa com número', () => {
            expect(validadorSenhas.isPrimeiroCaractereNumero('b')).toBe(false)
        })

        it('Deve validar que a senha \'b1\' não começa com número', () => {
            expect(validadorSenhas.isPrimeiroCaractereNumero('b1')).toBe(false)
        })

        it('Deve validar que a senha \'b1112312\' não começa com número', () => {
            expect(validadorSenhas.isPrimeiroCaractereNumero('b1112312')).toBe(false)
        })

        it('Deve validar que a senha \'12312\' começa com número', () => {
            expect(validadorSenhas.isPrimeiroCaractereNumero('12312')).toBe(true)
        })

        it('Deve validar que a senha \'1\' começa com número', () => {
            expect(validadorSenhas.isPrimeiroCaractereNumero('1')).toBe(true)
        })

        it('Deve validar que a senha \'2\' começa com número', () => {
            expect(validadorSenhas.isPrimeiroCaractereNumero('2')).toBe(true)
        })

        it('Deve validar que a senha \'3\' começa com número', () => {
            expect(validadorSenhas.isPrimeiroCaractereNumero('3')).toBe(true)
        })

        it('Deve validar que a senha \'4\' começa com número', () => {
            expect(validadorSenhas.isPrimeiroCaractereNumero('4')).toBe(true)
        })

        it('Deve validar que a senha \'5\' começa com número', () => {
            expect(validadorSenhas.isPrimeiroCaractereNumero('5')).toBe(true)
        })

        it('Deve validar que a senha \'6\' começa com número', () => {
            expect(validadorSenhas.isPrimeiroCaractereNumero('6')).toBe(true)
        })

        it('Deve validar que a senha \'7\' começa com número', () => {
            expect(validadorSenhas.isPrimeiroCaractereNumero('7')).toBe(true)
        })

        it('Deve validar que a senha \'8\' começa com número', () => {
            expect(validadorSenhas.isPrimeiroCaractereNumero('8')).toBe(true)
        })

        it('Deve validar que a senha \'9\' começa com número', () => {
            expect(validadorSenhas.isPrimeiroCaractereNumero('9')).toBe(true)
        })

        it('Deve validar que a senha \'0\' começa com número', () => {
            expect(validadorSenhas.isPrimeiroCaractereNumero('0')).toBe(true)
        })
    })

    describe('Validador último caractere deve ser letra', () => {
        const caracteresAlfabeto = [
            'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i',
            'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r',
            's', 't', 'u', 'v', 'w', 'x', 'y', 'z'
        ]

        describe('Validando todas as letras do alfabeto em minúsculo', () => {
            caracteresAlfabeto.forEach(caractere => {
                const senha = '1' + caractere.toLowerCase()

                it(`Deve validar que a senha ${senha} termina com letra`, () => {
                    expect(validadorSenhas.isUltimoCaractereLetra(senha)).toBe(true)
                })
            })
        })

        describe('Validando todas as letras do alfabeto em maiúsculo', () => {
            caracteresAlfabeto.forEach(caractere => {
                const senha = '1' + caractere.toUpperCase()

                it(`Deve validar que a senha ${senha} termina com letra`, () => {
                    expect(validadorSenhas.isUltimoCaractereLetra(senha)).toBe(true)
                })
            })
        })

        it('Deve validar que a senha (string vazio) não termina com letra', () => {
            expect(validadorSenhas.isUltimoCaractereLetra('')).toBe(false)
        })

        it('Deve validar que a senha \' \' (espaço vazio) não termina com letra', () => {
            expect(validadorSenhas.isUltimoCaractereLetra(' ')).toBe(false)
        })

        it('Deve validar que a senha \'1\' não termina com letra', () => {
            expect(validadorSenhas.isUltimoCaractereLetra('1')).toBe(false)
        })

        it('Deve validar que a senha \'1b1\' não termina com letra', () => {
            expect(validadorSenhas.isUltimoCaractereLetra('1b1')).toBe(false)
        })

        it('Deve validar que a senha \'1b1@\' não termina com letra', () => {
            expect(validadorSenhas.isUltimoCaractereLetra('1b1@')).toBe(false)
        })

        it('Deve validar que a senha \'1b1@!\' não termina com letra', () => {
            expect(validadorSenhas.isUltimoCaractereLetra('1b1@!')).toBe(false)
        })

        it('Deve validar que a senha \'!\' não termina com letra', () => {
            expect(validadorSenhas.isUltimoCaractereLetra('12312')).toBe(false)
        })

        it('Deve validar que a senha \'(\' não termina com letra', () => {
            expect(validadorSenhas.isUltimoCaractereLetra(' ')).toBe(false)
        })

        it('Deve validar que a senha \'&\' não termina com letra', () => {
            expect(validadorSenhas.isUltimoCaractereLetra(' ')).toBe(false)
        })
    })
})