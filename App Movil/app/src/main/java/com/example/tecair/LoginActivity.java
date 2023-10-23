package com.example.tecair;

import androidx.appcompat.app.AppCompatActivity;

import android.content.Intent;
import android.os.Bundle;
import android.view.View;
import android.widget.EditText;
import android.widget.Toast;

import com.example.tecair.db.DbUsuario;

public class LoginActivity extends AppCompatActivity {

    EditText txtLoginMail, txtLoginPassword;

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_login);

        txtLoginMail = findViewById(R.id.txtLoginMail);
        txtLoginPassword = findViewById(R.id.txtLoginPassword);
    }

    public void validatePassword(View view){
        DbUsuario dbUsuario = new DbUsuario(LoginActivity.this);
        boolean result = dbUsuario.validatePassword(txtLoginMail.getText().toString(), txtLoginPassword.getText().toString());
        if (result){
            System.out.println("Funciono el password");
            Intent i = new Intent(this, MenuActivity.class);
            i.putExtra("mail", txtLoginMail.getText().toString());
            startActivity(i);
        }
        else {
            Toast.makeText(LoginActivity.this,"Email or Password incorrect", Toast.LENGTH_LONG).show();
        }
    }
}