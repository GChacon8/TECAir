package com.example.tecair;

import androidx.appcompat.app.AppCompatActivity;

import android.annotation.SuppressLint;
import android.content.Intent;
import android.os.Bundle;
import android.view.View;
import android.widget.EditText;
import android.widget.TextView;

public class ReceiptActivity extends AppCompatActivity {

    TextView txtEmail, txtReservation, txtFlight;
    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_receipt);

        Bundle bundle = getIntent().getExtras();
        String mail = bundle.getString("mail");
        String vuelo = bundle.getString("vuelo");
        String reserva = bundle.getString("reserva");

        txtEmail = findViewById(R.id.txtEmail);
        txtReservation = findViewById(R.id.txtReservation);
        txtFlight = findViewById(R.id.txtFlight);

        txtEmail.setText(mail);
        txtFlight.setText(vuelo);
        txtReservation.setText(reserva);
        System.out.println(mail);
    }

    public void goToMenu(View view){
        Bundle bundle = getIntent().getExtras();
        String mail = bundle.getString("mail");

        Intent i = new Intent(this, MenuActivity.class);
        i.putExtra("mail", mail);
        startActivity(i);
    }
}