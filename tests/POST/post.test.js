const { spec } = require('pactum');
const { StatusCodes } = require('http-status-codes');
const { baseUrl } = require('../../config/urls');

describe('POST', () => {

    test('POST-T001 - Crear recurso correctamente', async () => {

        await spec()
            .post(baseUrl + '/anything')
            .withBody({
                name: 'Test User',
                email: 'test@example.com'
            })
            .expectStatus(StatusCodes.OK)
            .expectJsonLike({
                method: 'POST',
                json: {
                    name: 'Test User',
                    email: 'test@example.com'
                }
            });

    });

    test('POST-T002 - Realizar una solicitud sin autorización', async () => {

        await spec()
            .post(baseUrl + '/status/401')
            .withBody({
                name: 'Test User'
            })
            .expectStatus(StatusCodes.UNAUTHORIZED);

    });

    test('POST-T003 - Enviar solicitud a un endpoint inexistente', async () => {

        await spec()
            .post(baseUrl + '/status/404')
            .withBody({
                name: 'Test User'
            })
            .expectStatus(StatusCodes.NOT_FOUND);

    });

    test('POST-T004 - Realizar una solicitud con respuesta Bad Request', async () => {

        await spec()
            .post(baseUrl + '/status/400')
            .withBody({
                name: 'Test User'
            })
            .expectStatus(StatusCodes.BAD_REQUEST);

    });

});