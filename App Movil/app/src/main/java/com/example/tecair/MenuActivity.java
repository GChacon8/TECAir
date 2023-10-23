package com.example.tecair;

import androidx.appcompat.app.AppCompatActivity;

import android.content.Intent;
import android.os.Bundle;
import android.view.View;

public class MenuActivity extends AppCompatActivity {

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_menu);
    }

    public void goToSearch(View view){
        Bundle bundle = getIntent().getExtras();
        String mail = bundle.getString("mail");

        Intent i = new Intent(this, SearchActivity.class);
        i.putExtra("mail", mail);
        startActivity(i);
    }

    public void goToPromo(View view){
        Bundle bundle = getIntent().getExtras();
        String mail = bundle.getString("mail");

        Intent i = new Intent(this, PromoActivity.class);
        i.putExtra("mail", mail);
        startActivity(i);
    }

}