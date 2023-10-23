package com.example.tecair.db;

import android.content.ContentValues;
import android.content.Context;
import android.database.sqlite.SQLiteDatabase;

import androidx.annotation.Nullable;

public class DbReservation extends DBHelper{

    Context context;

    public DbReservation(@Nullable Context context) {
        super(context);
        this.context = context;
    }

    public long insert(String Correo, String Vuelo, String Numero, String Codigo, String Vencimiento){
        long id = 0;
        try {
            DBHelper dbHelper = new DBHelper(context);
            SQLiteDatabase db = dbHelper.getWritableDatabase();

            ContentValues values = new ContentValues();
            values.put("Correo", Correo);
            values.put("id_vuelo", Vuelo);
            values.put("num_tarjeta", Numero);
            values.put("codigo_seguridad", Codigo);
            values.put("fecha_exp", Vencimiento);

            id = db.insert("Reserva", null, values);
        }
        catch (Exception ex){
            ex.toString();
        }
        return id;
    }

}
