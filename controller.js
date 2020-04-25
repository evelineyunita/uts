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

//menambahkan data service
exports.tambahservis = function (req, res) {
    var tgl_servis = new Date();
    var id_user = req.body.id_user;
    var id_montir = req.body.id_montir;
    var jumlah_sparepart = req.body.jumlah_sparepart;
    var id_sparepart = req.body.id_sparepart;


    connection.query('INSERT INTO t_servis (tgl_servis, id_user, id_montir, jumlah_sparepart, id_sparepart) VALUES(?,?,?,?,?)',
        [tgl_servis, id_user, id_montir, jumlah_sparepart, id_sparepart], 
        function (error, rows, fields) {
            if (error) {
                console.log(error);
            } else {
                response.ok("Berhasil Menambahkan Data", res)
            }
        });
};

//menambahkan data level
exports.tambahlevel = function (req, res) {
    var nama_level = req.body.nama_level;
    var role = req.body.role;


    connection.query('INSERT INTO t_level (nama_level, role) VALUES(?,?)',
        [nama_level, role], 
        function (error, rows, fields) {
            if (error) {
                console.log(error);
            } else {
                response.ok("Berhasil Menambahkan Data", res)
            }
        });
};

//menambahkan data User
exports.tambahuser = function (req, res) {
    var username = req.body.username;
    var email = req.body.email;
    var password = req.body.password;
    var role = req.body.role;
    var tanggal_daftar = new Date();


    connection.query('INSERT INTO t_user (username, email, password, role, tanggal_daftar) VALUES(?,?,?,?,?)',
        [username, email, password, role, tanggal_daftar], 
        function (error, rows, fields) {
            if (error) {
                console.log(error);
            } else {
                response.ok("Berhasil Menambahkan Data", res)
            }
        });
};

//menambahkan data montir
exports.tambahmontir = function (req, res) {
    var nama_montir = req.body.nama_montir;
    var harga_perjam = req.body.harga_perjam;


    connection.query('INSERT INTO t_montir (nama_montir,harga_perjam) VALUES(?,?)',
        [nama_montir, harga_perjam],
        function (error, rows, fields) {
            if (error) {
                console.log(error);
            } else {
                response.ok("Berhasil Menambahkan Data", res)
            }
        });
};
//menambahkan data Sparepart
exports.tambahsparepart = function (req, res) {
    var nama_sparepart = req.body.nama_sparepart;
    var harga_sparepart = req.body.harga_sparepart;
    var satuan = req.body.satuan;


    connection.query('INSERT INTO t_sparepart (nama_sparepart,harga_sparepart,satuan) VALUES(?,?,?)',
        [nama_sparepart, harga_sparepart,satuan], 
        function (error, rows, fields) {
            if (error) {
                console.log(error);
            } else {
                response.ok("Berhasil Menambahkan Data", res)
            }
        });
};
