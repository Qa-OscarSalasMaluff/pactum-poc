const { spec } = require('pactum');
const { StatusCodes } = require('http-status-codes');
const { baseUrl } = require('../../config/urls');

describe('PUT', () => {

    test('PUT-T001 - Actualizar recurso correctamente', async () => {

        await spec()
            .put(baseUrl + '/anything/1')
            .withBody({
                id: 1,
                name: 'Updated User',
                email: 'updated@example.com'
            })
            .expectStatus(StatusCodes.OK)
            .expectJsonLike({
                method: 'PUT',
                json: {
                    id: 1,
                    name: 'Updated User',
                    email: 'updated@example.com'
                }
            });

    });

    test('PUT-T002 - Realizar una actualización sin autorización', async () => {

        await spec()
            .put(baseUrl + '/status/401')
            .withBody({
                name: 'Updated User'
            })
            .expectStatus(StatusCodes.UNAUTHORIZED);

    });

    test('PUT-T003 - Actualizar un recurso inexistente', async () => {

        await spec()
            .put(baseUrl + '/status/404')
            .withBody({
                name: 'Updated User'
            })
            .expectStatus(StatusCodes.NOT_FOUND);

    });

    test('PUT-T004 - Realizar una actualización con respuesta Bad Request', async () => {

        await spec()
            .put(baseUrl + '/status/400')
            .withBody({
                name: 'Updated User'
            })
            .expectStatus(StatusCodes.BAD_REQUEST);

    });

});