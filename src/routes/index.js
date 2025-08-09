import express,{Router} from 'express';
import populationRouter from './populationRouter.js';
import incomeRouter from'./incomeRouter.js';
const router = Router();



router.use('/population',populationRouter);
router.use('/income',incomeRouter);

export default router;