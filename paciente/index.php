<?php
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Headers: access");
header("Access-Control-Allow-Methods: GET,POST");
header("Content-Type: application/json; charset=UTF-8");
header("Access-Control-Allow-Headers: Content-Type, Access-Control-Allow-Headers, Authorization, X-Requested-With");

// Conexión a la base de datos con usuario, contraseña y nombre de la BD
$servidor = "localhost";
$puerto = "5434";
$usuario = "postgres"; 
$contrasenia = "12345678"; 
$nombreBaseDatos = "db_paciente";

// Conexión a la base de datos PostgreSQL
$conexionBD = pg_connect("host=$servidor port=$puerto dbname=$nombreBaseDatos user=$usuario password=$contrasenia");

// Verificar si la conexión fue exitosa
if (!$conexionBD) {
    echo json_encode(["success" => 0, "message" => "No se pudo conectar a la base de datos PostgreSQL"]);
    exit();
}

// Consulta datos y recepciona una clave para consultar dichos datos con dicha clave
if (isset($_GET["consultar"])) {
    $sqlPaciente = pg_query($conexionBD, "SELECT * FROM paciente WHERE id=" . $_GET["consultar"]);
    if (pg_num_rows($sqlPaciente) > 0) {
        $paciente = pg_fetch_all($sqlPaciente);
        echo json_encode($paciente);
        exit();
    } else {
        echo json_encode(["success" => 0]);
    }
}

//Borrar pero se le debe enviar una clave (para borrado)
if (isset($_GET["borrar"])) {
    $sqlPaciente = pg_query($conexionBD, "DELETE FROM paciente WHERE id=" . $_GET["borrar"]);
    if ($sqlPaciente) {
        echo json_encode(["success" => 1]);
        exit();
    } else {
        echo json_encode(["success" => 0]);
    }
}

// Insertar un nuevo registro y recepcionar los datos mediante el método POST
if (isset($_GET["insertar"])) {
    $data = json_decode(file_get_contents("php://input"));
    $type_id = $data->type_id;
    $nombre = $data->nombre;
    $apellido = $data->apellido;
    $telefono = $data->telefono; 
    $email = $data->email; 
    $genero = $data->genero;
    if (($apellido != "") && ($nombre != "") && ($genero != "")) {
        $sqlPaciente = pg_query($conexionBD, "INSERT INTO paciente(type_id, nombre, apellido, telefono, email, genero) VALUES('$type_id', '$nombre', '$apellido', '$telefono', '$email', '$genero')");
        echo json_encode(["success" => 1]);
    }
    exit();
}

// Actualizar datos pero recibir datos y una clave para realizar la actualización
if (isset($_GET["actualizar"])) {
    $data = json_decode(file_get_contents("php://input"));
    $id = (isset($data->id)) ? $data->id : $_GET["actualizar"];
    $type_id = $data->type_id; 
    $nombre = $data->nombre;
    $apellido = $data->apellido;
    $telefono = $data->telefono; 
    $email = $data->email; 
    $genero = $data->genero;
    $sqlPaciente = pg_query($conexionBD, "UPDATE paciente SET type_id='$type_id', nombre='$nombre', apellido='$apellido', telefono='$telefono', email='$email', genero='$genero' WHERE id='$id'");
    echo json_encode(["success" => 1]);
    exit();
}

// Consultar todos los registros de la tabla pacientes
$sqlPaciente = pg_query($conexionBD, "SELECT * FROM paciente");
if (pg_num_rows($sqlPaciente) > 0) {
    $paciente = pg_fetch_all($sqlPaciente);
    echo json_encode($paciente);
} else {
    echo json_encode([["success" => 0]]);
}

pg_close($conexionBD);

?>
