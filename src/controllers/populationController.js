import pool from '../db.js';

export const getFloatingPopulation = async(req,res,next)=>{
    try{
        const [rows] = await pool.query('SELECT * FROM hello')
        res.status(200).json({data:rows});
    }catch(err){
        next(err);
    }
}

export const getFloatingPopulation10000 = async(req,res,next)=>{
    try{
        const[rows] = await pool.query('SELECT * FROM hello WHERE 상권_구분_코드 = "U"')
        res.status(200).json({data:rows});
    }catch(err){
        next(err);
    }
}