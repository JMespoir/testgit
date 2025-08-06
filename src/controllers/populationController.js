import pool from '../db.js';
export const getFloatingPopulation = async(req,res,next)=>{
    
    try{
        const [rows] = await pool.query('SELECT * FROM test');
        res.status(200).json({data:rows});
    }catch(err){
        res.json(pool);
        next(err);
    }
}

export const getFloatingPopulation10000 = async(req,res,next)=>{
    try{
        const[rows] = await pool.query('SELECT * FROM test WHERE 총_유동인구_수 = 598831');
        res.status(200).json({data:rows});
    }catch(err){
        next(err);
    }
}

export const abc = async(req,res,next)=>{
    try{
        console.log(1)
    }catch(err){
        next(err);
    }
}