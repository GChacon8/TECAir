using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace Admin.Models;

public class Tarjeta
{
    [Key]
    [Required]
    public required string Numero { get; set; } 
    public int Cs { get; set; }
    public DateOnly Vencimiento {get; set;} //Date and Hour
    
    [ForeignKey("Correo")]
    public string? Correo_usuario { get; set; }
    

}