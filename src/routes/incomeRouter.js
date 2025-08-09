import express from 'express';
import { getAllData, getKindIncome } from '../controllers/incomeController.js';

const router = express.Router();

/**
 * @swagger
 * /api/income/{area}:
 *   get:
 *     summary: 상권 내 소득소비 정보 모두 가져오기
 *     parameters:
 *       - in: path
 *         name: area
 *         required: true
 *         description: 행정동 코드 명
 *         schema:
 *           type: string
 *           example: 사직동
 *     responses:
 *       200:
 *         description: 성공
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 success:
 *                   type: boolean
 *                   example: true
 *                 data:
 *                   type: array
 *                   items:
 *                     type: object
 *                     properties:
 *                      idx:
 *                        type: integer
 *                        example: 1
 *                      기준_년분기_코드:
 *                        type: integer
 *                        example: 20241
 *                      행정동_코드_명:
 *                        type: string
 *                        example: 시흥3동
 *                      월_평균_소득_금액:
 *                       type: integer
 *                       example: 3000000
 *                      소득_구간_코드:
 *                        type: integer
 *                        example: 1
 *                      지출_총금액:
 *                       type: integer
 *                       example: 5000000
 *                      식료품_지출_총금액:
 *                       type: integer
 *                       example: 1000000
 *                      의류_지출_총금액:
 *                        type: integer
 *                        example: 500000
 *                      생활용품_지출_총금액:
 *                        type: integer
 *                        example: 500000
 *                      의료비_지출_총금액:
 *                        type: integer
 *                        example: 500000
 *                      교통_지출_총금액:
 *                       type: integer
 *                       example: 500000
 *                      유흥_지출_총금액:
 *                       type: integer
 *                       example: 500000
 *                      여가_문화_지출_총금액:
 *                       type: integer
 *                       example: 500000
 *                      기타_지출_총금액:
 *                       type: integer
 *                       example: 500000
 *                      음식_지출_총금액:
 *                       type: integer
 *                       example: 500000
 *                 error:
 *                   type: string
 *                   nullable: true
 *                   example: null
 */
router.get('/:area', getAllData);

/**
 * @swagger
 * /api/income/kind:
 *   get:
 *     summary: 상권 내 특정 요일 소득소비 정보 모두 가져오기
 *     responses:
 *       200:
 *         description: 성공
 */
router.get('/:kind/:area', getKindIncome);

export default router;
