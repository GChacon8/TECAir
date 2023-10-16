using Microsoft.EntityFrameworkCore;
using TodoApi.Models;

namespace TodoApi.Models;

public class TodoContext : DbContext
{
    public TodoContext(DbContextOptions<TodoContext> options)
        : base(options)
    {
    }

    //Si se igualan a null! significa que no pueden ser null en nigún caso 
    //Si se igualan a default! sí podrían ser null (puede no siempre tener una instancia válida)
    public DbSet<TodoItem> TodoItems { get; set; } = null!;
    public DbSet<Asiento> Asiento { get; set; } = null!;
    public DbSet<Avion> Avion { get; set; } = null!;
    public DbSet<TodoApi.Models.Maleta> Maleta { get; set; } = null!;
    public DbSet<TodoApi.Models.Usuario> Usuario { get; set; } = null!;
    public DbSet<TodoApi.Models.Ejecucion> Ejecucion { get; set; } = null!;
    public DbSet<TodoApi.Models.Promocion> Promocion { get; set; } = default!;
}