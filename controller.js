'use strict';

var response = require('./res');
var connection = require('./koneksi');

exports.index = function(req,res){
    response.ok("Project UTS REST API ku berjalan!",res)
}; 

//menampilkan semua semua data sparepart
exports.tampilsparepart = function(req,res){
    connection.query('SELECT * FROM t_sparepart', function(error,rows,fields){
        if (error) {
            connection.log(error);
        }else {
            response.ok(rows, res)
        }
    });
};

//menampilkan data montir
exports.tampildatamontir = function (req, res) {
	connection.query('SELECT * FROM t_montir', function (error, rows, fields) {
		if (error) {
			console.log(error);
		} else {
			response.ok(rows, res)
		}
	});
};

//menampilkan data sparepart berdasarkan id
exports.tampildatasparepartid = function (req, res) {
	let id = req.params.id;
	connection.query('SELECT * FROM t_sparepart WHERE id_sparepart = ?', [id],
		function (error, rows, fields) {
			if (error) {
				console.log(error);
			} else {
				response.ok(rows, res);
			}
		});
};
//menampilkan data montir berdasarkan id
exports.tampildatamontirid = function (req, res) {
	let id = req.params.id;
	connection.query('SELECT * FROM t_montir WHERE id_montir = ?', [id],
		function (error, rows, fields) {
			if (error) {
				console.log(error);
			} else {
				response.ok(rows, res);
			}
		});
};
