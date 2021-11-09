const conexion = require("../config/conexion.js");

module.exports = {
	insertar(idVenta, idProducto){
		return new Promise((resolve, reject) => {
			conexion.query('insert into productos_ventas (id_venta, id_producto) values (?,?)',  [idVenta, idProducto], (err, resultados) => {
				if(err)reject(err)
					else resolve(resultados.insertId)
			})
		})
	},
}