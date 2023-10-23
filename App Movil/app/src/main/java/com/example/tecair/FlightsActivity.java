package com.example.tecair;

import androidx.appcompat.app.AppCompatActivity;
import androidx.recyclerview.widget.LinearLayoutManager;
import androidx.recyclerview.widget.RecyclerView;

import android.annotation.SuppressLint;
import android.content.Intent;
import android.os.Bundle;
import android.view.View;
import android.widget.AdapterView;
import android.widget.ArrayAdapter;
import android.widget.ListView;
import android.widget.Toast;

import com.example.tecair.db.DbAeropuerto;
import com.example.tecair.db.DbFlights;
import com.example.tecair.db.DbUsuario;

import java.util.ArrayList;
import java.util.List;

public class FlightsActivity extends AppCompatActivity {

    ListView listView;
    String vuelo_id;
    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_flights);

        Bundle bundle = getIntent().getExtras();
        String iataFrom = bundle.getString("iataFrom");
        String iataTo = bundle.getString("iataTo");
        String date = bundle.getString("date");
        String mail = bundle.getString("mail");
        String dateFrom = bundle.getString("dateFrom");
        String dateTo = bundle.getString("dateTo");
        String precio = bundle.getString("precio");

        List vuelos = new ArrayList<>();
        if (iataFrom != null && iataTo!= null && date!= null && mail!= null) {
            DbFlights dbFlights = new DbFlights(FlightsActivity.this);
            vuelos = dbFlights.getList(iataFrom, iataTo, date, mail);
        } else if (iataFrom != null && iataTo!= null && dateFrom!= null&& dateTo !=null && mail!= null) {
            DbFlights dbFlights = new DbFlights(FlightsActivity.this);
            vuelos = dbFlights.getListRange(iataFrom, iataTo, dateFrom, dateTo, mail, precio);
        }

        listView = findViewById(R.id.listView);
        final List temp = vuelos;
        ArrayAdapter<String> adapter = new ArrayAdapter<>(this, android.R.layout.simple_list_item_1, vuelos);
        listView.setAdapter(adapter);
        listView.setOnItemClickListener(new AdapterView.OnItemClickListener() {
            @Override
            public void onItemClick(AdapterView<?> parent, View view, int position, long id) {
                // Maneja la acción cuando se hace clic en un elemento.
                String itemClicked = temp.get(position).toString();
                vuelo_id = itemClicked.substring(0,itemClicked.indexOf("|")).trim();
                System.out.println(vuelo_id);

            }
        });
        //listView.getSelectedItem()
    }

    public void goToPayment(View view){

        Bundle bundle = getIntent().getExtras();
        String mail = bundle.getString("mail");
        if(vuelo_id != null){
            Intent i = new Intent(this, PaymentActivity.class);
            i.putExtra("vuelo_id", vuelo_id);
            i.putExtra("mail", mail);
            startActivity(i);
        }
        else {
            Toast.makeText(FlightsActivity.this,"Select your flight", Toast.LENGTH_LONG).show();
        }
    }
}