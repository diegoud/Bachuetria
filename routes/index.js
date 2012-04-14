
/*
 * GET home page.
 */

exports.index = function(req, res){
  res.render('index', { title: 'Calculadora Geodésica' })
};

exports.form = function(req,res){
  res.render('forms/wgs84', { title: 'Datos de entrada' })
};

exports.calcular = function(req,res){
  var a=51;
  res.send(a);
};
