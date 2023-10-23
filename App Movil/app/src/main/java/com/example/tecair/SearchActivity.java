package com.example.tecair;

import androidx.appcompat.app.AppCompatActivity;

import android.annotation.SuppressLint;
import android.content.Intent;
import android.os.Bundle;
import android.widget.ArrayAdapter;
import android.widget.DatePicker;
import android.widget.EditText;
import android.widget.Spinner;
import android.view.View;
import android.widget.AdapterView;
import android.widget.Toast;

import com.example.tecair.db.DbAeropuerto;
import com.example.tecair.db.DbUsuario;

import java.util.Calendar;
import java.util.List;

public class SearchActivity extends AppCompatActivity {

    Spinner spinnerFrom, spinnerTo;
    DatePicker txtDate;
    @SuppressLint("MissingInflatedId")
    @Override
    protected void onCreate(Bundle savedInstanceState) {

        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_search);

        DbAeropuerto dbAeropuerto = new DbAeropuerto(SearchActivity.this);
        List cityList = dbAeropuerto.getList();
        ArrayAdapter<String> adapter = new ArrayAdapter<>(this, android.R.layout.simple_spinner_dropdown_item, cityList);
        spinnerFrom = findViewById(R.id.ddFrom);
        spinnerTo = findViewById(R.id.ddTo);
        adapter.setDropDownViewResource(android.R.layout.simple_spinner_item);
        spinnerFrom.setAdapter(adapter);
        spinnerTo.setAdapter(adapter);
        txtDate = findViewById(R.id.txtDate);
    }
    public void searchFlights(View view){
        System.out.println(spinnerFrom.getSelectedItem().toString());
        System.out.println(spinnerTo.getSelectedItem().toString());

        DbAeropuerto dbAeropuerto = new DbAeropuerto(SearchActivity.this);
        String iataFrom = dbAeropuerto.getIATA(spinnerFrom.getSelectedItem().toString());
        String iataTo = dbAeropuerto.getIATA(spinnerTo.getSelectedItem().toString());

        int year = txtDate.getYear();
        int month = txtDate.getMonth(); // Note: Months are 0-based, so you might need to add 1
        int day = txtDate.getDayOfMonth();
        String selectedDate = year + "-" + (month + 1) + "-" + day;
        System.out.println(iataFrom);
        System.out.println(iataTo);
        System.out.println(selectedDate);

        Bundle bundle = getIntent().getExtras();
        String mail = bundle.getString("mail");

        Intent i = new Intent(this, FlightsActivity.class);
        i.putExtra("iataFrom", iataFrom);
        i.putExtra("iataTo", iataTo);
        i.putExtra("date", selectedDate);
        i.putExtra("mail", mail);

        startActivity(i);
    }
}
