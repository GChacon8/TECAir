package com.example.tecair.db;

import android.content.Context;
import android.database.Cursor;
import android.database.sqlite.SQLiteDatabase;

import androidx.annotation.Nullable;

import java.util.ArrayList;
import java.util.List;

public class DbPromo extends DBHelper{
    Context context;
    public DbPromo(@Nullable Context context) {
        super(context);
        this.context = context;
    }
    public List getList(){
        List promos = new ArrayList<>();
        try {
            DBHelper dbHelper = new DBHelper(context);
            SQLiteDatabase db = dbHelper.getReadableDatabase();

            String[] projection = {
                    "Promocion.id",
                    "ruta_id",
                    "iata_origen",
                    "iata_destino",
                    "fecha_inicio",
                    "fecha_final",
                    "precio"
            };
            String selection = "Promocion.ruta_id = Ruta.id";

            String sortOrder = "Promocion.id ASC";

            Cursor cursor = db.query(
                    "Promocion, Ruta",   // The table to query
                    projection,             // The array of columns to return (pass null to get all)
                    selection,              // The columns for the WHERE clause
                    null,          // The values for the WHERE clause
                    null,                   // don't group the rows
                    null,                   // don't filter by row groups
                    sortOrder               // The sort order
            );

            while(cursor.moveToNext()) {
                String promo = cursor.getString(
                        cursor.getColumnIndexOrThrow("id"));
                String precio = cursor.getString(
                        cursor.getColumnIndexOrThrow("precio"));
                String iata_origen = cursor.getString(
                        cursor.getColumnIndexOrThrow("iata_origen"));
                String iata_destino = cursor.getString(
                        cursor.getColumnIndexOrThrow("iata_destino"));
                String fecha_inicio = cursor.getString(
                        cursor.getColumnIndexOrThrow("fecha_inicio"));
                String fecha_final = cursor.getString(
                        cursor.getColumnIndexOrThrow("fecha_final"));
                promos.add(promo+" | "+iata_origen+" | "+iata_destino+" | "+fecha_inicio+" | "+ fecha_final+" | "+ precio);
            }
            cursor.close();
        }
        catch (Exception ex){
            ex.toString();
        }
        return promos;
    }
}
