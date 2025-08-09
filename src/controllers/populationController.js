import pool from '../db.js';
export const getFloatingPopulation = async(req,res,next)=>{
    
    try{
        const [rows] = await pool.query('SELECT * FROM test');
        res.status(200).json({data:rows});
    }catch(err){
        console.error('Database query error:', err);
        res.status(500).json({
            error: '데이터베이스 조회 중 오류가 발생했습니다.',
            message: err.message
        });
    }
}

export const getFloatingPopulation10000 = async(req,res,next)=>{
    try{
        const[rows] = await pool.query('SELECT * FROM test WHERE 총_유동인구_수 = 598831');
        res.status(200).json({data:rows});
    }catch(err){
        console.error('Database query error:', err);
        res.status(500).json({
            error: '데이터베이스 조회 중 오류가 발생했습니다.',
            message: err.message
        });
    }
}

export const abc = async(req,res,next)=>{
    try{
        console.log(1);
        res.status(200).json({message: 'Test successful'});
    }catch(err){
        console.error('Test function error:', err);
        res.status(500).json({
            error: '테스트 함수에서 오류가 발생했습니다.',
            message: err.message
        });
    }
}