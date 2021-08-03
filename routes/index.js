var express = require('express');
var router = express.Router();

/* GET home page (index.ejs). */
router.get('/', function(req, res, next) {


  var mysql = require('mysql')
  var connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'ventas'
  })
  
  connection.connect(
      (err)=>{
          if(!err){ console.log("Conexion establecida");}
          else{ console.log("Conexion fallida ");  }
      }
  
  
  );
  
  connection.query("SELECT * FROM tblproductos",function(err,resultados){
  
      console.log(resultados);
      
  } );
  
  
  connection.end()




  res.render('index', { title: 'Express' });
});
/* GET Seccion (nosotros.ejs). */
router.get('/nosotros', function(req, res, next) {
  res.render('nosotros', { title: 'Nosotros somos...' });
});



module.exports = router;
