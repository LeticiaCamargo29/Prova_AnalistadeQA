import express from 'express'
import { EHTTPStatusCode } from './http/EHTTPStatusCode'
import { ValidadorSenhasService } from './validadorSenhas/ValidadorSenhasService'

const app = express()
app.use(express.json())

app.post('/validarSenha', (req, res) => {
    if (!req.body.senha) {
        res.status(EHTTPStatusCode.FALHA_NEGOCIO)
            .send({ message: 'O parâmetro \'senha\' não foi informado na requisição!' })
    }

    const criteriosNaoAtendidos = new ValidadorSenhasService().validar(req.body.senha)
    const hasCriteriosNaoAtendidos = criteriosNaoAtendidos.length > 0

    if (hasCriteriosNaoAtendidos) {
        res.status(EHTTPStatusCode.FALHA_NEGOCIO).send({
            message: 'Sua senha não atende todos os critérios. Verifique!',
            criteriosNaoAtendidos: criteriosNaoAtendidos
        })
    } else {
        res.status(EHTTPStatusCode.OK).send({
            message: 'Sua senha atende todos os critérios! Parabéns =)'
        })
    }
})

export { app }