package com.example.tecair.db;

import android.annotation.SuppressLint;
import android.content.Context;
import android.database.sqlite.SQLiteDatabase;
import android.database.sqlite.SQLiteOpenHelper;
import java.text.SimpleDateFormat;
import java.util.Calendar;
import java.util.Date;

import androidx.annotation.Nullable;

public class DBHelper extends SQLiteOpenHelper {

    private static final int DATABASE_VERSION = 1;
    private static final String DATABASE_NAME = "DataBase.db";

    public DBHelper(@Nullable Context context) {
        super(context, DATABASE_NAME, null, DATABASE_VERSION);
    }

    @Override
    public void onCreate(SQLiteDatabase sqLiteDatabase) {

        // Definir las fechas de inicio y fin de noviembre
        SimpleDateFormat dateFormat = new SimpleDateFormat("yyyy-M-d");
        Calendar calendar = Calendar.getInstance();
        calendar.set(2023, Calendar.NOVEMBER, 1);
        Date startDate = calendar.getTime();
        calendar.set(2023, Calendar.NOVEMBER, 30);
        Date endDate = calendar.getTime();

        // ID de las rutas del 1 al 7 y matrículas de avión del 'ABC123' al 'GHI789'
        int[] rutaIDs = {1, 2, 3, 4, 5, 6, 7, 8, 9};
        String[] matriculas = {"ABC123", "DEF456", "GHI789", "JKL012", "MNO345", "PQR678", "STU901", "XYZ789", "LMN456"};
        String[] horas = {"08:00", "9:00", "10:00", "11:00", "12:00", "5:00", "7:00", "6:00", "4:00"};
        String[] gates = {"A1", "B2", "C3", "D4", "E5", "F7", "G7", "H8", "I9"};

        sqLiteDatabase.execSQL("CREATE TABLE Usuario (" +
                "Correo TEXT PRIMARY KEY," +
                "Password TEXT," +
                "Nombre TEXT," +
                "Apellido TEXT," +
                "Telefono TEXT," +
                "Estudiante INTEGER," +
                "Universidad TEXT," +
                "Carne TEXT" +
                ");");

        sqLiteDatabase.execSQL("CREATE TABLE Ruta (" +
                "id INTEGER PRIMARY KEY," +
                "iata_origen TEXT," +
                "iata_destino TEXT," +
                "FOREIGN KEY (iata_origen) REFERENCES Aeropuerto(iata)," +
                "FOREIGN KEY (iata_destino) REFERENCES Aeropuerto(iata)" +
                ");");

        sqLiteDatabase.execSQL("CREATE TABLE Segmento (" +
                "id INTEGER PRIMARY KEY," +
                "Rutaid INTEGER," +
                "iata_origen TEXT," +
                "iata_destino TEXT," +
                "Numero INTEGER," +
                "FOREIGN KEY (Rutaid) REFERENCES Ruta(id)," +
                "FOREIGN KEY (iata_origen) REFERENCES Aeropuerto(iata)," +
                "FOREIGN KEY (iata_destino) REFERENCES Aeropuerto(iata)" +
                ");");

        sqLiteDatabase.execSQL("CREATE TABLE Avion (" +
                "matricula TEXT PRIMARY KEY," +
                "capacidad INTEGER" +
                ");");

        sqLiteDatabase.execSQL("CREATE TABLE Vuelo (" +
                "id INTEGER PRIMARY KEY," +
                "fecha TEXT," +
                "hora TEXT," +
                "rutaid INTEGER," +
                "gate_origen TEXT," +
                "precio INTERGER," +
                "matricula TEXT," +
                "FOREIGN KEY (rutaid) REFERENCES Ruta(id)," +
                "FOREIGN KEY (matricula) REFERENCES Avion(matricula)" +
                ");");

        sqLiteDatabase.execSQL("CREATE TABLE Aeropuerto (" +
                "iata TEXT PRIMARY KEY," +
                "ciudad TEXT" +
                ");");

        sqLiteDatabase.execSQL("CREATE TABLE Reserva (" +
                "id INTEGER PRIMARY KEY," +
                "correo TEXT," +
                "id_vuelo INTEGER," +
                "num_tarjeta TEXT," +
                "codigo_seguridad TEXT," +
                "fecha_exp TEXT," +
                "asiento TEXT," +
                "cantidad_maletas INTEGER," +
                "precio INTERGER," +
                "checked INTEGER," +
                "FOREIGN KEY (correo) REFERENCES Usuario(Correo)," +
                "FOREIGN KEY (id_vuelo) REFERENCES Vuelo(id)" +
                ");");

        sqLiteDatabase.execSQL("CREATE TABLE Maleta (" +
                "id INTEGER PRIMARY KEY," +
                "reserva_id INTEGER," +
                "color TEXT," +
                "peso INTERGER," +
                "FOREIGN KEY (reserva_id) REFERENCES Reserva(id)" +
                ");");

        sqLiteDatabase.execSQL("CREATE TABLE Promocion (" +
                "id INTEGER PRIMARY KEY," +
                "ruta_id INTEGER," +
                "fecha_inicio TEXT," +
                "fecha_final TEXT," +
                "precio INTERGER," +
                "FOREIGN KEY (ruta_id) REFERENCES Ruta(id)" +
                ");");


        sqLiteDatabase.execSQL("INSERT INTO Usuario (Correo, Password, Nombre, Apellido, Telefono, Estudiante, Universidad, Carne) VALUES ('gchacon8@estudiantec.cr', '123', 'Gabriel', 'Chacon', '9999', '1', 'TEC', '2021');");

        sqLiteDatabase.execSQL("INSERT INTO Ruta (id, iata_origen, iata_destino) VALUES (1, 'JFK', 'LAX');");
        sqLiteDatabase.execSQL("INSERT INTO Ruta (id, iata_origen, iata_destino) VALUES (2, 'JFK', 'ORD');");
        sqLiteDatabase.execSQL("INSERT INTO Ruta (id, iata_origen, iata_destino) VALUES (3, 'LAX', 'DFW');");
        sqLiteDatabase.execSQL("INSERT INTO Ruta (id, iata_origen, iata_destino) VALUES (4, 'MIA', 'ATL');");
        sqLiteDatabase.execSQL("INSERT INTO Ruta (id, iata_origen, iata_destino) VALUES (5, 'MEX', 'LAX');");
        sqLiteDatabase.execSQL("INSERT INTO Ruta (id, iata_origen, iata_destino) VALUES (6, 'LIM', 'MIA');");
        sqLiteDatabase.execSQL("INSERT INTO Ruta (id, iata_origen, iata_destino) VALUES (7, 'GRU', 'EZE');");
        sqLiteDatabase.execSQL("INSERT INTO Ruta (id, iata_origen, iata_destino) VALUES (8, 'SJO', 'LAX');");
        sqLiteDatabase.execSQL("INSERT INTO Ruta (id, iata_origen, iata_destino) VALUES (9, 'SJO', 'MIA');");

        sqLiteDatabase.execSQL("INSERT INTO Avion (matricula, capacidad) VALUES ('ABC123', 200);");
        sqLiteDatabase.execSQL("INSERT INTO Avion (matricula, capacidad) VALUES ('DEF456', 200);");
        sqLiteDatabase.execSQL("INSERT INTO Avion (matricula, capacidad) VALUES ('GHI789', 200);");
        sqLiteDatabase.execSQL("INSERT INTO Avion (matricula, capacidad) VALUES ('JKL012', 200);");
        sqLiteDatabase.execSQL("INSERT INTO Avion (matricula, capacidad) VALUES ('MNO345', 200);");
        sqLiteDatabase.execSQL("INSERT INTO Avion (matricula, capacidad) VALUES ('PQR678', 200);");
        sqLiteDatabase.execSQL("INSERT INTO Avion (matricula, capacidad) VALUES ('STU901', 200);");
        sqLiteDatabase.execSQL("INSERT INTO Avion (matricula, capacidad) VALUES ('XYZ789', 200);");
        sqLiteDatabase.execSQL("INSERT INTO Avion (matricula, capacidad) VALUES ('LMN456', 200);");

        sqLiteDatabase.execSQL("INSERT INTO Promocion (ruta_id, fecha_inicio, fecha_final, precio) VALUES (1, '2023-11-01', '2023-11-15', 300);");
        sqLiteDatabase.execSQL("INSERT INTO Promocion (ruta_id, fecha_inicio, fecha_final, precio) VALUES (3, '2023-11-15', '2023-11-30', 300);");
        sqLiteDatabase.execSQL("INSERT INTO Promocion (ruta_id, fecha_inicio, fecha_final, precio) VALUES (4, '2023-11-15', '2023-11-30', 250);");

        // Generar inserciones para cada día y cada ruta
        while (startDate.before(endDate) || startDate.equals(endDate)) {
            for (int i = 0; i < rutaIDs.length; i++) {
                String fecha = dateFormat.format(startDate);
                //String hora = "08:00"; // Hora de partida
                //String gateOrigen = "A1"; // Puerta de origen
                int precio = 500; // Precio del vuelo

                @SuppressLint("DefaultLocale") String insertQuery = String.format("INSERT INTO Vuelo (fecha, hora, rutaid, gate_origen, precio, matricula) " +
                                "VALUES ('%s', '%s', %d, '%s', %d, '%s');",
                        fecha, horas[i], rutaIDs[i], gates[i], precio, matriculas[i]);
                sqLiteDatabase.execSQL(insertQuery);
            }

            // Avanzar al día siguiente
            calendar.setTime(startDate);
            calendar.add(Calendar.DATE, 1);
            startDate = calendar.getTime();
        }

        sqLiteDatabase.execSQL("INSERT INTO Aeropuerto (iata, ciudad) VALUES ('JFK', 'Nueva York');");
        sqLiteDatabase.execSQL("INSERT INTO Aeropuerto (iata, ciudad) VALUES ('LAX', 'Los Ángeles');");
        sqLiteDatabase.execSQL("INSERT INTO Aeropuerto (iata, ciudad) VALUES ('ORD', 'Chicago');");
        sqLiteDatabase.execSQL("INSERT INTO Aeropuerto (iata, ciudad) VALUES ('DFW', 'Dallas-Fort Worth');");
        sqLiteDatabase.execSQL("INSERT INTO Aeropuerto (iata, ciudad) VALUES ('MIA', 'Miami');");
        sqLiteDatabase.execSQL("INSERT INTO Aeropuerto (iata, ciudad) VALUES ('ATL', 'Atlanta');");
        sqLiteDatabase.execSQL("INSERT INTO Aeropuerto (iata, ciudad) VALUES ('DEN', 'Denver');");
        sqLiteDatabase.execSQL("INSERT INTO Aeropuerto (iata, ciudad) VALUES ('SFO', 'San Francisco');");
        sqLiteDatabase.execSQL("INSERT INTO Aeropuerto (iata, ciudad) VALUES ('LAS', 'Las Vegas');");
        sqLiteDatabase.execSQL("INSERT INTO Aeropuerto (iata, ciudad) VALUES ('SEA', 'Seattle');");
        sqLiteDatabase.execSQL("INSERT INTO Aeropuerto (iata, ciudad) VALUES ('YYZ', 'Toronto');");
        sqLiteDatabase.execSQL("INSERT INTO Aeropuerto (iata, ciudad) VALUES ('MEX', 'Ciudad de México');");
        sqLiteDatabase.execSQL("INSERT INTO Aeropuerto (iata, ciudad) VALUES ('LIM', 'Lima');");
        sqLiteDatabase.execSQL("INSERT INTO Aeropuerto (iata, ciudad) VALUES ('GRU', 'São Paulo');");
        sqLiteDatabase.execSQL("INSERT INTO Aeropuerto (iata, ciudad) VALUES ('EZE', 'Buenos Aires');");
        sqLiteDatabase.execSQL("INSERT INTO Aeropuerto (iata, ciudad) VALUES ('SJO', 'San Jose');");

    }

    @Override
    public void onUpgrade(SQLiteDatabase sqLiteDatabase, int i, int i1) {
        sqLiteDatabase.execSQL("DROP TABLE " + "Usuario");
        sqLiteDatabase.execSQL("DROP TABLE " + "Ruta");
        sqLiteDatabase.execSQL("DROP TABLE " + "Reserva");
        sqLiteDatabase.execSQL("DROP TABLE " + "Promocion");
        sqLiteDatabase.execSQL("DROP TABLE " + "Maleta");
        sqLiteDatabase.execSQL("DROP TABLE " + "Aeropuerto");
        sqLiteDatabase.execSQL("DROP TABLE " + "Avion");
        sqLiteDatabase.execSQL("DROP TABLE " + "Vuelo");
        sqLiteDatabase.execSQL("DROP TABLE " + "Segmento");
        onCreate(sqLiteDatabase);
    }
}
