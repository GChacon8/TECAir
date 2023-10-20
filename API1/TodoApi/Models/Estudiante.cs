using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace TodoApi.Models;

public class Estudiante
{
    [Key]
    [Required]
    public required string Carnet { get; set; } 
    public string? Universidad { get; set; }
    
    [ForeignKey("Correo")]
    public string? Correo_usuario { get; set; }

}