package com.example.tecair.db;

import android.content.Context;
import android.database.Cursor;
import android.database.sqlite.SQLiteDatabase;

import androidx.annotation.Nullable;

import java.util.ArrayList;
import java.util.List;

public class DbFlights extends DBHelper {

    Context context;

    public DbFlights(@Nullable Context context) {
        super(context);
        this.context = context;
    }

    public List getList(String iataFrom, String iataTo,String date, String mail){
        List vuelos = new ArrayList<>();
        try {
            DBHelper dbHelper = new DBHelper(context);
            SQLiteDatabase db = dbHelper.getReadableDatabase();

            String[] projection = {
                    "Vuelo.id",
                    "fecha",
                    "precio",
                    "iata_origen",
                    "iata_destino"
            };
            String selection = "Vuelo.rutaid = Ruta.id AND fecha = ? AND iata_origen = ? AND iata_destino = ?";
            String[] selectionArgs = { date, iataFrom, iataTo };

            String sortOrder = "Vuelo.id ASC";

            Cursor cursor = db.query(
                    "Vuelo, Ruta",   // The table to query
                    projection,             // The array of columns to return (pass null to get all)
                    selection,              // The columns for the WHERE clause
                    selectionArgs,          // The values for the WHERE clause
                    null,                   // don't group the rows
                    null,                   // don't filter by row groups
                    sortOrder               // The sort order
            );

            while(cursor.moveToNext()) {
                String vuelo = cursor.getString(
                        cursor.getColumnIndexOrThrow("id"));
                String precio = cursor.getString(
                        cursor.getColumnIndexOrThrow("precio"));
                vuelos.add(vuelo+" | "+iataFrom+" | "+iataTo+" | "+date+" | "+precio);
            }
            cursor.close();
        }
        catch (Exception ex){
            ex.toString();
        }
        return vuelos;
    }

    public List getListRange(String iataFrom, String iataTo,String dateFrom, String dateTo, String mail, String precio){
        List vuelos = new ArrayList<>();
        try {
            DBHelper dbHelper = new DBHelper(context);
            SQLiteDatabase db = dbHelper.getReadableDatabase();

            String[] projection = {
                    "Vuelo.id",
                    "fecha",
                    "iata_origen",
                    "iata_destino"
            };
            String selection = "Vuelo.rutaid = Ruta.id AND fecha >= ? AND fecha <= ? AND iata_origen = ? AND iata_destino = ?";
            String[] selectionArgs = { dateFrom, dateTo, iataFrom, iataTo };

            String sortOrder = "Vuelo.id ASC";

            Cursor cursor = db.query(
                    "Vuelo, Ruta",   // The table to query
                    projection,             // The array of columns to return (pass null to get all)
                    selection,              // The columns for the WHERE clause
                    selectionArgs,          // The values for the WHERE clause
                    null,                   // don't group the rows
                    null,                   // don't filter by row groups
                    sortOrder               // The sort order
            );

            while(cursor.moveToNext()) {
                String vuelo = cursor.getString(
                        cursor.getColumnIndexOrThrow("id"));
                String date = cursor.getString(
                        cursor.getColumnIndexOrThrow("fecha"));
                vuelos.add(vuelo+" | "+iataFrom+" | "+iataTo+" | "+date+" | "+precio);
            }
            cursor.close();
        }
        catch (Exception ex){
            ex.toString();
        }
        return vuelos;
    }
}
