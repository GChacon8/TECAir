using System.ComponentModel.DataAnnotations;

namespace TodoApi.Models;

public class Promocion
{
    public int Id { get; set; } // ID de la promoción
    public int Precio { get; set; }
    public string? Imagen  { get; set; }
    public int Duracion  { get; set; }

    public int EjecucionId { get; set; }
    public Ejecucion? Ejecucion { get; set; }

}