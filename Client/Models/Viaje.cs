using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace Client.Models;

public class Viaje
{
    public int Id { get; set; } // ID de la promoción
    public bool Estado { get; set; }
    
    
    [ForeignKey("Id")]
    public string? Fin { get; set; }
    
    [ForeignKey("Id")]
    public string? Inicio { get; set; }

}