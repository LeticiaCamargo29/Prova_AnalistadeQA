import supertest from "supertest"
import { app } from "../../src/app"

describe('Validador Senhas API Testing', () => {
    it('[POST] Deve retornar que a senha deve possuir pelo menos um caractere maiúsculo', async () => {
        const result = await supertest(app)
            .post('/validarSenha')
            .send()

        expect(result.statusCode).toBe(400)
        expect(result.body).toStrictEqual({ message: 'O parâmetro \'senha\' não foi informado na requisição!' })
    })

    it('[POST] Ao informar senha \'b\', sistema deve retornar que os critérios CR1, CR3, CR4, CR5, CR7 E CR8 não foram atendidos', async () => {
        const result = await supertest(app)
            .post('/validarSenha')
            .send({
                senha: 'b'
            })

        expect(result.statusCode).toBe(400)
        expect(result.body)
            .toStrictEqual({
                "message": "Sua senha não atende todos os critérios. Verifique!",
                "criteriosNaoAtendidos": [
                    "CR1: A senha deve possuir pelo menos 6 caracteres.",
                    "CR3: A senha deve possuir pelo menos um ponto de exclamação.",
                    "CR4: A senha deve possuir pelo menos um arroba.",
                    "CR5: A senha deve possuir pelo menos uma letra maiúscula.",
                    "CR7: A senha deve possuir pelo menos um número.",
                    "CR8: O primeiro caractere da senha deve ser um número."
                ]
            })
    })

    it('[POST] Ao informar senha \'1b\', sistema deve retornar que os critérios CR1, CR3, CR4, CR5 não foram atendidos', async () => {
        const result = await supertest(app)
            .post('/validarSenha')
            .send({
                senha: '1b'
            })

        expect(result.statusCode).toBe(400)
        expect(result.body)
            .toStrictEqual({
                "message": "Sua senha não atende todos os critérios. Verifique!",
                "criteriosNaoAtendidos": [
                    "CR1: A senha deve possuir pelo menos 6 caracteres.",
                    "CR3: A senha deve possuir pelo menos um ponto de exclamação.",
                    "CR4: A senha deve possuir pelo menos um arroba.",
                    "CR5: A senha deve possuir pelo menos uma letra maiúscula.",
                ]
            })
    })

    it('[POST] Ao informar senha \'b1\', sistema deve retornar que os critérios CR1, CR3, CR4, CR5, CR8 e CR9 não foram atendidos', async () => {
        const result = await supertest(app)
            .post('/validarSenha')
            .send({
                senha: 'b1'
            })

        expect(result.statusCode).toBe(400)
        expect(result.body)
            .toStrictEqual({
                "message": "Sua senha não atende todos os critérios. Verifique!",
                "criteriosNaoAtendidos": [
                    "CR1: A senha deve possuir pelo menos 6 caracteres.",
                    "CR3: A senha deve possuir pelo menos um ponto de exclamação.",
                    "CR4: A senha deve possuir pelo menos um arroba.",
                    "CR5: A senha deve possuir pelo menos uma letra maiúscula.",
                    "CR8: O primeiro caractere da senha deve ser um número.",
                    "CR9: O último caractere da senha deve ser uma letra."
                ]
            })
    })

    it('[POST] Ao informar senha \'b1!\', sistema deve retornar que os critérios CR1, CR4, CR5, CR8 não foram atendidos', async () => {
        const result = await supertest(app)
            .post('/validarSenha')
            .send({
                senha: 'b1!'
            })

        expect(result.statusCode).toBe(400)
        expect(result.body)
            .toStrictEqual({
                "message": "Sua senha não atende todos os critérios. Verifique!",
                "criteriosNaoAtendidos": [
                    "CR1: A senha deve possuir pelo menos 6 caracteres.",
                    "CR4: A senha deve possuir pelo menos um arroba.",
                    "CR5: A senha deve possuir pelo menos uma letra maiúscula.",
                    "CR8: O primeiro caractere da senha deve ser um número.",
                    "CR9: O último caractere da senha deve ser uma letra."
                ]
            })
    })

    it('[POST] Ao informar senha \'B1!\', sistema deve retornar que os critérios CR1, CR4, CR6, CR8 não foram atendidos', async () => {
        const result = await supertest(app)
            .post('/validarSenha')
            .send({
                senha: 'B1!'
            })

        expect(result.statusCode).toBe(400)
        expect(result.body)
            .toStrictEqual({
                "message": "Sua senha não atende todos os critérios. Verifique!",
                "criteriosNaoAtendidos": [
                    "CR1: A senha deve possuir pelo menos 6 caracteres.",
                    "CR4: A senha deve possuir pelo menos um arroba.",
                    "CR6: A senha deve possuir pelo menos uma letra minúscula.",
                    "CR8: O primeiro caractere da senha deve ser um número.",
                    "CR9: O último caractere da senha deve ser uma letra."
                ]
            })
    })

    it('[POST] Ao informar senha \'B1!@b\', sistema deve retornar que os critérios CR1, CR4, CR6, CR8 não foram atendidos', async () => {
        const result = await supertest(app)
            .post('/validarSenha')
            .send({
                senha: 'B1!@b'
            })

        expect(result.statusCode).toBe(400)
        expect(result.body)
            .toStrictEqual({
                "message": "Sua senha não atende todos os critérios. Verifique!",
                "criteriosNaoAtendidos": [
                    "CR1: A senha deve possuir pelo menos 6 caracteres.",
                    "CR8: O primeiro caractere da senha deve ser um número."
                ]
            })
    })

    it('[POST] Ao informar senha \'12B1!@b\', sistema deve retornar que todos os critérios foram atendidos', async () => {
        const result = await supertest(app)
            .post('/validarSenha')
            .send({
                senha: '12B1!@b'
            })

        expect(result.statusCode).toBe(200)
        expect(result.body)
            .toStrictEqual({
                "message": "Sua senha atende todos os critérios! Parabéns =)"
            })
    })

    it('[POST] Ao informar senha \'12B1!@b12B1!@b\', sistema deve retornar que a senha deve possuir menos de 12 caracteres', async () => {
        const result = await supertest(app)
            .post('/validarSenha')
            .send({
                senha: '12B1!@b12B1!@b'
            })

        expect(result.statusCode).toBe(400)
        expect(result.body)
            .toStrictEqual({
                "message": "Sua senha não atende todos os critérios. Verifique!",
                "criteriosNaoAtendidos": [
                    "CR2: A senha deve possuir menos de 12 caracteres."
                ]
            })
    })
    
})