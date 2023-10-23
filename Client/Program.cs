using Microsoft.EntityFrameworkCore;
using Client.Models;
using Npgsql;

var builder = WebApplication.CreateBuilder(args);

// Add services to the container.

builder.Services.AddControllersWithViews();
builder.Services.AddDbContext<TodoContext>(opt =>
    opt.UseInMemoryDatabase("TodoList"));

var app = builder.Build();

// Configure the HTTP request pipeline.
if (!app.Environment.IsProduction())
{
    // The default HSTS value is 30 days. You may want to change this for production scenarios, see https://aka.ms/aspnetcore-hsts.
    app.UseHsts();
}

app.UseHttpsRedirection();
app.UseStaticFiles();
app.UseRouting();


app.MapControllerRoute(
    name: "default",
    pattern: "{controller}/{action=Index}/{id?}");

app.MapFallbackToFile("index.html");

app.Run();
return;

async void SetupDatabase(WebApplicationBuilder localWebApplicationBuilder)
{
    try
    {
        // Connect to postgresql
        //const string connectionString = "Host=localhost;Port=5432;Username=postgres;Password=postgres;Database=aero_tec;";
        const string connectionString = "Host=tecair.postgres.database.azure.com;Port=5432;Username=grupo4;Password=claveBASES.;Database=TECair;";
        await using var dataSource = NpgsqlDataSource.Create(connectionString);

        localWebApplicationBuilder.Services.AddDbContext<TodoContext>(opt =>
            opt.UseNpgsql(connectionString));

        Console.WriteLine("Connected to the database");

    } catch (Exception e)
    {
        Console.WriteLine("Unable to connect to the database: " + e);
        throw;
    }   
}
