package com.example.tecair.db;

import android.content.Context;
import android.database.Cursor;
import android.database.sqlite.SQLiteDatabase;
import android.text.Selection;

import androidx.annotation.Nullable;

import java.util.ArrayList;
import java.util.List;

public class DbAeropuerto extends DBHelper{
    Context context;

    public DbAeropuerto(@Nullable Context context) {
        super(context);
        this.context = context;
    }

    public List getList(){
        List itemIds = new ArrayList<>();
        try {
            DBHelper dbHelper = new DBHelper(context);
            SQLiteDatabase db = dbHelper.getReadableDatabase();
            String[] projection = {
                    "iata",
                    "ciudad"
            };
            String sortOrder = "ciudad DESC";
            Cursor cursor = db.query(
                    "Aeropuerto",
                    projection,
                    null,
                    null,
                    null,
                    null,
                    sortOrder
            );
            while(cursor.moveToNext()) {
                String ciudad = cursor.getString(
                        cursor.getColumnIndexOrThrow("ciudad"));
                itemIds.add(ciudad);
                System.out.println(ciudad);
            }
            cursor.close();
        }
        catch (Exception ex){
            ex.toString();
        }
        return itemIds;
    }

    public String getIATA(String city){
        String iata = "";
        try {
            DBHelper dbHelper = new DBHelper(context);
            SQLiteDatabase db = dbHelper.getReadableDatabase();
            String[] projection = {
                    "iata",
                    "ciudad"
            };

            String selection = "ciudad = ?";
            String[] selectionArgs = { city };

            String sortOrder = "ciudad DESC";
            Cursor cursor = db.query(
                    "Aeropuerto",
                    projection,
                    selection,
                    selectionArgs,
                    null,
                    null,
                    sortOrder
            );
            while(cursor.moveToNext()) {
                 iata = cursor.getString(
                        cursor.getColumnIndexOrThrow("iata"));
            }
            cursor.close();
        }
        catch (Exception ex){
            ex.toString();
        }
        return iata;
    }

}
