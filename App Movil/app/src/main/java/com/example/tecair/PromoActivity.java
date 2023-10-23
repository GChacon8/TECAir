package com.example.tecair;

import androidx.appcompat.app.AppCompatActivity;

import android.content.Intent;
import android.os.Bundle;
import android.view.View;
import android.widget.AdapterView;
import android.widget.ArrayAdapter;
import android.widget.ListView;
import android.widget.Toast;

import com.example.tecair.db.DbFlights;
import com.example.tecair.db.DbPromo;

import java.util.ArrayList;
import java.util.List;

public class PromoActivity extends AppCompatActivity {

    ListView listView;

    String iataFrom, iataTo, dateFrom, dateTo, precio;
    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_promo);

        Bundle bundle = getIntent().getExtras();
        String mail = bundle.getString("mail");

        List promos = new ArrayList<>();
        if (mail!= null) {
            DbPromo dbPromo = new DbPromo(PromoActivity.this);
            promos = dbPromo.getList();
        }

        listView = findViewById(R.id.listView);
        final List temp = promos;
        ArrayAdapter<String> adapter = new ArrayAdapter<>(this, android.R.layout.simple_list_item_1, promos);
        listView.setAdapter(adapter);
        listView.setOnItemClickListener(new AdapterView.OnItemClickListener() {
            @Override
            public void onItemClick(AdapterView<?> parent, View view, int position, long id) {
                // Maneja la acción cuando se hace clic en un elemento.
                String itemClicked = temp.get(position).toString();
                String iataFromTemp = itemClicked.substring(itemClicked.indexOf("|")+1, itemClicked.length()).trim();
                iataFrom = iataFromTemp.substring(0, iataFromTemp.indexOf("|")).trim();
                String iataToTemp = iataFromTemp.substring(iataFromTemp.indexOf("|")+1, iataFromTemp.length()).trim();
                iataTo = iataToTemp.substring(0, iataToTemp.indexOf("|")).trim();
                String dateFromTemp = iataToTemp.substring(iataToTemp.indexOf("|")+1, iataToTemp.length()).trim();
                dateFrom = dateFromTemp.substring(0, dateFromTemp.indexOf("|")).trim();
                String dateToTemp = dateFromTemp.substring(dateFromTemp.indexOf("|")+1, dateFromTemp.length()).trim();
                dateTo = dateToTemp.substring(0, dateToTemp.indexOf("|")).trim();
                String precioTemp = dateToTemp.substring(dateToTemp.indexOf("|")+1, dateToTemp.length()).trim();
                precio = precioTemp.substring(0, precioTemp.length()).trim();

                System.out.println(iataFrom);
                System.out.println(iataTo);
                System.out.println(dateFrom);
                System.out.println(dateTo);
                System.out.println(precio);

            }
        });
    }

    public void goToFlights(View view){

        Bundle bundle = getIntent().getExtras();
        String mail = bundle.getString("mail");

        if(iataFrom != null && iataTo != null){
            Intent i = new Intent(this, FlightsActivity.class);
            i.putExtra("iataFrom", iataFrom);
            i.putExtra("iataTo", iataTo);
            i.putExtra("dateFrom", dateFrom);
            i.putExtra("dateTo", dateTo);
            i.putExtra("mail", mail);
            i.putExtra("precio", precio);
            startActivity(i);
        }
        else {
            Toast.makeText(PromoActivity.this,"Select your promo", Toast.LENGTH_LONG).show();
        }
    }
}