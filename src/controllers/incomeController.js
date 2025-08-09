import pool from '../db.js';
const tableName = "income";

export const getAllData = async(req,res,next)=>{
    const area = req.params.area;
    try{
        const [rows] = await pool.query(`SELECT * FROM ${tableName} WHERE 행정동_코드_명 = ?`, [area]);
        res.status(200).json({success:true,data:rows});
    }catch(err){
        console.error(err);
        res.status(500).json({success:false,message:"서버 오류"});
        next(err);
    }
}

export const getKindIncome = async(req,res,next)=>{
  const kind = req.params.kind;
  const area = req.params.area;
    try{
        const[rows] = await pool.query(`SELECT ${kind}_매출_금액 FROM ${tableName} WHERE 상권_코드 = ?`, [area]);
        res.status(200).json({data:rows});
    }catch(err){
        next(err);
    }
}
