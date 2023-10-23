package com.example.tecair;

import androidx.appcompat.app.AppCompatActivity;

import android.annotation.SuppressLint;
import android.content.Intent;
import android.os.Bundle;
import android.view.View;
import android.widget.CheckBox;
import android.widget.EditText;
import android.widget.Toast;

import com.example.tecair.db.DbUsuario;

public class RegisterActivity extends AppCompatActivity {

    EditText txtMail, txtName, txtLastName, txtPhone_no, txtPassword, txtUniversity, txtStundentId;
    CheckBox isStudent;

    @SuppressLint("MissingInflatedId")
    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_register);

        txtMail = findViewById(R.id.txtMail);
        txtName = findViewById(R.id.txtName);
        txtLastName = findViewById(R.id.txtLastName);
        txtPhone_no = findViewById(R.id.txtPhone_no);
        txtPassword = findViewById(R.id.txtPassword);
        txtUniversity = findViewById(R.id.txtUniversity);
        txtStundentId = findViewById(R.id.txtStundentId);
        isStudent = findViewById(R.id.isStudent);
    }

    public void insertData(View view){
        DbUsuario dbUsuario = new DbUsuario(RegisterActivity.this);
        if(!txtMail.getText().toString().equals("") && !txtName.getText().toString().equals("") && !txtPassword.getText().toString().equals("")) {
            long id = dbUsuario.insert(txtMail.getText().toString(), txtPassword.getText().toString(), txtName.getText().toString(), txtLastName.getText().toString(), txtPhone_no.getText().toString(), isStudent.getText().toString(), txtUniversity.getText().toString(), txtStundentId.getText().toString());
            System.out.println("El ID: ");
            System.out.println(id);
            if (id > 0) {
                clean();
                Intent i = new Intent(this, MenuActivity.class);
                i.putExtra("mail", txtMail.getText().toString());
                startActivity(i);
            }
            else{
                System.out.println("Error while saving, edit and retry");
                Toast.makeText(RegisterActivity.this,"Error while saving, edit and retry", Toast.LENGTH_LONG).show();
            }
        }
        else {
            Toast.makeText(RegisterActivity.this,"Fill required spaces", Toast.LENGTH_LONG).show();
        }
    }

    public void queryData(View view){
        DbUsuario dbUsuario = new DbUsuario(RegisterActivity.this);
        long id = dbUsuario.query(txtMail.getText().toString());
    }

    private void clean(){

        txtMail.setText("");
        txtName.setText("");
        txtLastName.setText("");
        txtPhone_no.setText("");
        txtPassword.setText("");
    }
}