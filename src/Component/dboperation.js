const config=require('./dbconfig'),
      sql=require('mssql');

const getListFlight = async() =>{
      try{
      let pool = await sql.connect(config);
      let flights = pool.request().query("SELECT * from Flight");
      console.log(flights);
      return flights;
      }
      catch(error){
       console.log(error);
      }
}

module.exports = {
  getListFlight
}