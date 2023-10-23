package com.example.tecair;

import androidx.appcompat.app.AppCompatActivity;

import android.content.Intent;
import android.os.Bundle;
import android.view.View;
import android.widget.EditText;
import android.widget.Toast;

import com.example.tecair.db.DbReservation;
import com.example.tecair.db.DbUsuario;

public class PaymentActivity extends AppCompatActivity {

    EditText txtNum, txtCV, txtExp;
    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_payment);
        txtNum = findViewById(R.id.txtNum);
        txtCV = findViewById(R.id.txtCV);
        txtExp = findViewById(R.id.txtExp);
    }

    public void insertData(View view){
        Bundle bundle = getIntent().getExtras();
        String mail = bundle.getString("mail");
        String vuelo_id = bundle.getString("vuelo_id");

        DbReservation dbReservation = new DbReservation(PaymentActivity.this);
        if(!txtNum.getText().toString().equals("") && !txtCV.getText().toString().equals("") && !txtExp.getText().toString().equals("")) {
            long id = dbReservation.insert(mail, vuelo_id, txtNum.getText().toString(), txtCV.getText().toString(), txtExp.getText().toString());
            String str_id = String.valueOf(id);
            System.out.println("El ID reservacion: ");
            System.out.println(id);
            if (id > 0) {
                Intent i = new Intent(this, ReceiptActivity.class);
                i.putExtra("reserva", str_id);
                i.putExtra("vuelo", vuelo_id);
                i.putExtra("mail", mail);
                startActivity(i);
            }
            else{
                System.out.println("Payment Error");
                Toast.makeText(PaymentActivity.this,"Payment Error, edit and retry", Toast.LENGTH_LONG).show();
            }
        }
        else {
            Toast.makeText(PaymentActivity.this,"Fill required spaces", Toast.LENGTH_LONG).show();
        }
    }

}