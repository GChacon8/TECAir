using Microsoft.EntityFrameworkCore;
using Admin.Models;

namespace Admin.Models;

public class TodoContext : DbContext
{
    public TodoContext(DbContextOptions<TodoContext> options)
        : base(options)
    {
    }

    //Si se igualan a null! significa que no pueden ser null en nigún caso 
    //Si se igualan a default! sí podrían ser null (puede no siempre tener una instancia válida)
    public DbSet<TodoItem> TodoItems { get; set; } = null!;
    public DbSet<Admin.Models.Usuario> Usuario { get; set; } = null!;
    public DbSet<Admin.Models.Maleta> Maleta { get; set; } = null!;
    public DbSet<Admin.Models.Asiento> Asiento { get; set; } = null!;
    public DbSet<Admin.Models.Promocion> Promocion { get; set; } = null!;
    public DbSet<Admin.Models.Avion> Avion { get; set; } = null!;
    public DbSet<Admin.Models.Aero> Aero { get; set; } = null!;
    public DbSet<Admin.Models.Viaje> Viaje { get; set; } = null!;
    public DbSet<Admin.Models.Ejecucion> Ejecucion { get; set; } = null!;
    public DbSet<Admin.Models.Estudiante> Estudiante { get; set; } = null!;
    public DbSet<Admin.Models.Tarjeta> Tarjeta { get; set; } = null!;
}