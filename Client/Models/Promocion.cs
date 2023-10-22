using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace Client.Models;

public class Promocion
{
    public int Id { get; set; } // ID de la promoción
    public int Precio { get; set; }
    public string? Imagen  { get; set; }
    public DateOnly Fecha_inicio  { get; set; }
    public DateOnly Fecha_final  { get; set; }

    [ForeignKey("Id")]
    public int Id_ejecucion { get; set; }
}