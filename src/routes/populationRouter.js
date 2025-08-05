import express from 'express';
import {
    getFloatingPopulation,
    getFloatingPopulation10000
}from '../controllers/populationController.js';

const router = express.Router();
/**
 * @swagger
 * paths:
 * /api/population:
 *      get:
 *          summary: "유동 인구 전체 조회"
 *          description: "데이터 베이스에서 json형태로 GET방식으로 데이터 요청"
 *          content:
 *              application/json:
 *                  schema:
 *                      type: object
 */
router.get('/',getFloatingPopulation);
router.get('/u',getFloatingPopulation10000);
export default router;