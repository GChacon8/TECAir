package com.example.tecair.db;

import android.content.ContentValues;
import android.content.Context;
import android.database.Cursor;
import android.database.sqlite.SQLiteDatabase;

import androidx.annotation.Nullable;

import java.util.ArrayList;
import java.util.List;
import java.util.Objects;

public class DbUsuario extends DBHelper{

    Context context;

    public DbUsuario(@Nullable Context context) {
        super(context);
        this.context = context;
    }

    public long insert(String Correo, String Password, String Nombre, String Apellido, String Telefono, String Estudiante, String Universidad, String Carne){
        long id = 0;
        try {
            DBHelper dbHelper = new DBHelper(context);
            SQLiteDatabase db = dbHelper.getWritableDatabase();

            ContentValues values = new ContentValues();
            values.put("Correo", Correo);
            values.put("Password", Password);
            values.put("Nombre", Nombre);
            values.put("Apellido", Apellido);
            values.put("Telefono", Telefono);
            values.put("Estudiante", Estudiante);
            values.put("Universidad", Universidad);
            values.put("Carne", Carne);

            id = db.insert("Usuario", null, values);
        }
        catch (Exception ex){
            ex.toString();
        }
        return id;
    }

    public long query(String Correo){
        long id = 0;
        try {
            DBHelper dbHelper = new DBHelper(context);
            SQLiteDatabase db = dbHelper.getReadableDatabase();
            // Define a projection that specifies which columns from the database
            // you will actually use after this query.
            String[] projection = {
                    "Correo",
                    "Password",
                    "Nombre",
                    "Apellido",
                    "Telefono",
                    "Estudiante",
                    "Universidad",
                    "Carne"
            };
            // Filter results WHERE "title" = 'My Title'
            String selection = "Correo = ?";
            String[] selectionArgs = { Correo };

            // How you want the results sorted in the resulting Cursor
            String sortOrder = "Apellido DESC";

            Cursor cursor = db.query(
                    "Usuario",   // The table to query
                    projection,             // The array of columns to return (pass null to get all)
                    selection,              // The columns for the WHERE clause
                    selectionArgs,          // The values for the WHERE clause
                    null,                   // don't group the rows
                    null,                   // don't filter by row groups
                    sortOrder               // The sort order
            );

            List itemIds = new ArrayList<>();
            while(cursor.moveToNext()) {
                String itemId = cursor.getString(
                        cursor.getColumnIndexOrThrow("Nombre"));
                itemIds.add(itemId);
                System.out.println("El nombre es: ");
                System.out.println(itemId);
            }
            cursor.close();
        }
        catch (Exception ex){
            ex.toString();
        }
        return id;
    }

    public boolean validatePassword(String Correo, String inputPassword){
        long id = 0;
        boolean validated = false;
        try {
            DBHelper dbHelper = new DBHelper(context);
            SQLiteDatabase db = dbHelper.getReadableDatabase();

            String[] projection = {
                    "Correo",
                    "Password"
            };
            String selection = "Correo = ?";
            String[] selectionArgs = { Correo };

            String sortOrder = "Apellido DESC";

            Cursor cursor = db.query(
                    "Usuario",   // The table to query
                    projection,             // The array of columns to return (pass null to get all)
                    selection,              // The columns for the WHERE clause
                    selectionArgs,          // The values for the WHERE clause
                    null,                   // don't group the rows
                    null,                   // don't filter by row groups
                    sortOrder               // The sort order
            );
            System.out.println(Correo);
            while(cursor.moveToNext()) {
                String password = cursor.getString(cursor.getColumnIndexOrThrow("Password"));
                System.out.println(password);
                System.out.println(inputPassword);

                if (Objects.equals(password, inputPassword)){
                    System.out.println("entre");
                    validated = true;
                }
            }
            cursor.close();
        }
        catch (Exception ex){
            ex.toString();
        }
        System.out.println(validated);
        return validated;
    }

}
