CREATE TABLE IF NOT EXISTS cheklist (
    id INT AUTO_INCREMENT PRIMARY KEY,
    descripcion VARCHAR(255) NOT NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
)  ENGINE=INNODB;

CREATE TABLE IF NOT EXISTS apartados (
    id INT AUTO_INCREMENT PRIMARY KEY,
    cheklist INT,
    orden INT,
    descripcion VARCHAR(255),
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
)  ENGINE=INNODB;

CREATE TABLE IF NOT EXISTS items (
    id INT AUTO_INCREMENT PRIMARY KEY,
    apartado INT,
    orden INT,
    descripcion VARCHAR(255),
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
)  ENGINE=INNODB;

CREATE TABLE IF NOT EXISTS resultado_cheklist (
    id INT AUTO_INCREMENT PRIMARY KEY,
    fecha DATE,
    operador VARCHAR(50),
    cheklist INT,
    sala INT,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
)  ENGINE=INNODB;

CREATE TABLE IF NOT EXISTS resultado_items (
    id INT AUTO_INCREMENT PRIMARY KEY,
    resultado_cheklist INT,
    valor INT,
    error VARCHAR(255),
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
)  ENGINE=INNODB;

CREATE TABLE IF NOT EXISTS salas (
    id INT AUTO_INCREMENT PRIMARY KEY,
    descripcion VARCHAR(255),
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
)  ENGINE=INNODB;

INSERT INTO salas (descripcion) VALUES('Quirófano 1');
INSERT INTO salas (descripcion) VALUES('Quirófano 2');
INSERT INTO salas (descripcion) VALUES('Reanimación');

INSERT INTO cheklist (descripcion) VALUES('ChekList de Quirófanos');
INSERT INTO cheklist (descripcion) VALUES('ChekList de Reanimación');

INSERT INTO apartados (cheklist, orden, descripcion) VALUES(1,1,'Revisión visual y comprobación de las salas interiores');
INSERT INTO apartados (cheklist, orden, descripcion) VALUES(1,2,'Revisión visual y comprobación de instalaciones, apartos de pasillos, salas de zona limpia y sucia');

INSERT INTO items (apartado, orden, descripcion) VALUES(1,1,'Alarma acustica de aislamiento tierra panel interior');
INSERT INTO items (apartado, orden, descripcion) VALUES(1,2,'Cables de tierra existentes y clavijas, pinzas en buen estado todas las mesas, camas y aparatos con toma de tierra');
INSERT INTO items (apartado, orden, descripcion) VALUES(1,3,'Comprobación lámpara quirófano (luz y movimiento)');
INSERT INTO items (apartado, orden, descripcion) VALUES(1,4,'Comprobación luces interiores');
INSERT INTO items (apartado, orden, descripcion) VALUES(1,5,'Cables de tierra conectados: a mesa y carro de anestesia');
INSERT INTO items (apartado, orden, descripcion) VALUES(1,6,'Mando, mesa operaciones');
INSERT INTO items (apartado, orden, descripcion) VALUES(1,7,'Verificación de variación de presión al abrir puerta');
INSERT INTO items (apartado, orden, descripcion) VALUES(2,1,'Comprobación de cuadros gases');
INSERT INTO items (apartado, orden, descripcion) VALUES(2,2,'Estado de suelos');
INSERT INTO items (apartado, orden, descripcion) VALUES(2,3,'Termostatos en posición auto');
INSERT INTO items (apartado, orden, descripcion) VALUES(2,4,'Comprobación de luces, mecanismos, estanterias');
INSERT INTO items (apartado, orden, descripcion) VALUES(2,5,'Lavabos, cuartos de baño, fregaderos');

select *
    from cheklist chk
        join apartados ap on ap.cheklist = chk.id
        join items it on it.apartado = ap.id
    order by ap.orden, it.orden;

