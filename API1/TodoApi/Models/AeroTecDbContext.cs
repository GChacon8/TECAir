using Microsoft.EntityFrameworkCore;

namespace TodoApi.Models;

public class AeroTecDbContext : DbContext
{
    public AeroTecDbContext(DbContextOptions<AeroTecDbContext> options)
        : base(options)
    {
    }
    
    public DbSet<Asiento> Asiento { get; set; } = null!;
    public DbSet<Avion> Avion { get; set; } = null!;
    public DbSet<Maleta> Maleta { get; set; } = null!;
    public DbSet<Usuario> Usuario { get; set; } = null!;
    public DbSet<Ejecucion> Ejecucion { get; set; } = null!;
    public DbSet<Promocion> Promocion { get; set; } = null!;
    public DbSet<Viaje> Viaje { get; set; } = null!;
    public DbSet<Aero> Aero { get; set; } = null!;
    public DbSet<Estudiante> Estudiante { get; set; } = null!;
    public DbSet<Tarjeta> Tarjeta { get; set; } = null!;
    
}