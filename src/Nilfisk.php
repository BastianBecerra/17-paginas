<?php
//Conexion a base de datos

$servername = "localhost"; //Se coloca localhost ya que el archivo sera subido al hosting que sera localhost en el momento de consumo
$username = "nilfiskc_root"; //nombre asignado en el hosting muy importante, si hay un error no se conectara y habra un posible error en consola de firefox como NO DATABASE CONNECTED
$password = "LC.d%E7KMjgV"; //Igualmente importante ya que es la contraseña del usuario la cual si esta mal escrita no conecta
$dbname = "nilfiskc_listado_usuarios"; //La base de datos si esta mal escrita no se podra ingresar a nada

// Crear una conexión con MySQL
$conn = new mysqli($servername, $username, $password, $dbname);

// Comprobar la conexión
if ($conn->connect_error) {
    die("Conexión fallida: " . $conn->connect_error);
}

// Recuperar los datos enviados desde el formulario
$data = json_decode(file_get_contents('php://input'), true);
$nombre = $data['nombre'];
$correo = $data['correo'];

// Preparar y ejecutar la consulta SQL para insertar los datos en la base de datos
$sql = "INSERT INTO datos_clientes (nombre, email) VALUES ('$nombre', '$correo')";
if ($conn->query($sql) === TRUE) {
     echo "Los datos se han guardado correctamente en la base de datos.";
} else {
    echo "Error al guardar los datos: " . $conn->error;
}

// Cerrar la conexión con MySQL
$conn->close();
?>
