using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace Client.Models;

public class Asiento
{
    [Key]
    public int Numero { get; set; } 
    public int X { get; set; }
    public int Y { get; set; }
    public bool Ocupado { get; set; }
    
    [ForeignKey("Correo")]
    public string? Correo_usuario { get; set; }
    
    [ForeignKey("Matricula")]
    public string? Matricula_avion { get; set; }
}