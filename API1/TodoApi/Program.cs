using Microsoft.EntityFrameworkCore;
using Npgsql;
using TodoApi.Models;

var builder = WebApplication.CreateBuilder(args);

builder.Services.AddControllers();

builder.Services.AddEndpointsApiExplorer();
builder.Services.AddSwaggerGen();
SetupDatabase(builder);

var app = builder.Build();

if (app.Environment.IsDevelopment())
{
    app.UseSwagger();
    app.UseSwaggerUI();
}

app.UseHttpsRedirection();

app.UseAuthorization();

app.MapControllers();

app.Run();
return;

async void SetupDatabase(WebApplicationBuilder localWebApplicationBuilder)
{
    try
    {
        // Connect to postgresql
        const string connectionString = "Host=localhost;Port=5432;Username=postgres;Password=postgres;Database=aero_tec;";
        await using var dataSource = NpgsqlDataSource.Create(connectionString);

        localWebApplicationBuilder.Services.AddDbContext<AeroTecDbContext>(opt =>
            opt.UseInMemoryDatabase("AeroTEC"));

        Console.WriteLine("Connected to the database");

    } catch (Exception e)
    {
        Console.WriteLine("Unable to connect to the database: " + e);
        throw;
    }   
}