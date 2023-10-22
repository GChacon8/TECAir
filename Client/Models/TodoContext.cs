using Microsoft.EntityFrameworkCore;
using Client.Models;

namespace Client.Models;

public class TodoContext : DbContext
{
    public TodoContext(DbContextOptions<TodoContext> options)
        : base(options)
    {
    }

    //Si se igualan a null! significa que no pueden ser null en nigún caso 
    //Si se igualan a default! sí podrían ser null (puede no siempre tener una instancia válida)
    public DbSet<TodoItem> TodoItems { get; set; } = null!;
    public DbSet<Client.Models.Usuario> Usuario { get; set; } = null!;
    public DbSet<Client.Models.Maleta> Maleta { get; set; } = null!;
    public DbSet<Client.Models.Asiento> Asiento { get; set; } = null!;
    public DbSet<Client.Models.Promocion> Promocion { get; set; } = null!;
    public DbSet<Client.Models.Avion> Avion { get; set; } = null!;
    public DbSet<Client.Models.Aero> Aero { get; set; } = null!;
    public DbSet<Client.Models.Viaje> Viaje { get; set; } = null!;
    public DbSet<Client.Models.Ejecucion> Ejecucion { get; set; } = null!;
    public DbSet<Client.Models.Estudiante> Estudiante { get; set; } = null!;
    public DbSet<Client.Models.Tarjeta> Tarjeta { get; set; } = null!;
}