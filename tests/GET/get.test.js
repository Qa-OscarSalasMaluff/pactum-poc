const { spec } = require('pactum');
const { StatusCodes } = require('http-status-codes');
const { baseUrl } = require('../../config/urls');

describe('GET', () => {

    test('GET-T001 - Consultar recurso correctamente', async () => {

        await spec()
            .get(baseUrl + '/anything')
            .expectStatus(StatusCodes.OK)
            .expectJsonLike({
                method: 'GET'
            });

    });

    test('GET-T002 - Realizar una consulta sin autorización', async () => {

        await spec()
            .get(baseUrl + '/status/401')
            .expectStatus(StatusCodes.UNAUTHORIZED);

    });

    test('GET-T003 - Consultar un recurso inexistente', async () => {

        await spec()
            .get(baseUrl + '/status/404')
            .expectStatus(StatusCodes.NOT_FOUND);

    });

    test('GET-T004 - Realizar una consulta con respuesta Bad Request', async () => {

        await spec()
            .get(baseUrl + '/status/400')
            .expectStatus(StatusCodes.BAD_REQUEST);

    });

});