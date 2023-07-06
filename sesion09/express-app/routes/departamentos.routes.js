const express = require('express');
const router = express.Router();
const departamentosController = require('../controllers/departamentos.controller');
const departamentosMiddleware = require('../middlewares/departamentos.middleware');

/**
 * @swagger
 *  components:
 *      schemas:
 *          Departamento:
 *              type: object
 *              properties:
 *                  id:
 *                      type: number
 *                  ciudad:
 *                      type: string
 *                  fechaPrimerCenso:
 *                      type: number
 *                  poblacionPrimerCenso:
 *                      type: number
 *                  fechaUltimoCenso:
 *                      type: number
 *                  poblacionUltimoCenso:
 *                      type: number
 *                  srcImg:
 *                      type: string
 */

/**
 * @swagger
 * /departamentos:
 *  get:
 *      summary: Obtiene todos los departamentos
 *      tags: [Departamento]
 *      description: Obtiene el listado completo de los Departamentos y sus Censos
 *      produces:
 *          - application/json
 *      responses:
 *          '200':
 *              description: Listado de Departamentos
 *              content:
 *                  application/json:
 *                      schema:
 *                          type: object
 *                          properties:
 *                              status:
 *                                  type: integer
 *                              records:
 *                                  type: array
 *                                  items:
 *                                      $ref: '#/components/schemas/Departamento'
 *          
 */
router.get('/', departamentosController.getAllDepartamentos);

/**
 * @swagger
 * /departamentos/{deptoId}:
 *  get:
 *      summary: Obtiene un departamento en especifico
 *      tags: [Departamento]
 *      parameters:
 *          -   name: deptoId
 *              in: path
 *              schema:
 *                  type: integer
 *              required: true
 *      responses:
 *          '200':
 *              description: Detalle del Departamento con todo y su censo
 *              content:
 *                  application/json:
 *                      schema:
 *                          $ref: '#/components/schemas/Departamento'
 */
router.get(
    '/:deptoId',
    departamentosMiddleware.validateDeptoId,
    departamentosController.getDepartamentoById
);

/**
 * @swagger
 * /departamentos:
 *  post:
 *      summary: Crea un nuevo departamento
 *      tags: [Departamento]
 *      requestBody:
 *          content:
 *              application/json:
 *                  schema:
 *                      $ref: '#/components/schemas/Departamento'
 *      responses:
 *          '201':
 *              description: Departamento Creado
 *              content:
 *                  application/json:
 *                      schema:
 *                          $ref: '#/components/schemas/Departamento'
 */
router.post('/', departamentosController.addDepartamento);

module.exports = router;
