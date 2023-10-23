package com.example.tecair;

import androidx.appcompat.app.AppCompatActivity;

import android.content.Intent;
import android.database.sqlite.SQLiteDatabase;
import android.os.Bundle;
import android.view.View;
import android.widget.Toast;

import com.example.tecair.db.DBHelper;

public class MainActivity extends AppCompatActivity {

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_main);
    }

    public void goToLogin(View view){
        Intent i = new Intent(this, LoginActivity.class);
        startActivity(i);
    }

    public void goToRegister(View view){
        DBHelper dbHelper = new DBHelper(MainActivity.this);
        SQLiteDatabase db = dbHelper.getWritableDatabase();
        if(db != null){
            Toast.makeText(MainActivity.this,"DATABASE CREATED", Toast.LENGTH_LONG).show();
        }
        else{
            Toast.makeText(MainActivity.this,"NOT DATABASE CREATED", Toast.LENGTH_LONG).show();
        }

        Intent i = new Intent(this, RegisterActivity.class);
        startActivity(i);
    }
}