using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace TodoApi.Models;

public class Maleta
{
    [Key]
    public int Numero { get; set; }
    public int Peso { get; set; }
    public string? Color { get; set; }
    
    [ForeignKey("Matricula")]
    public string? Matricula_avion { get; set; }
    
    [ForeignKey("Correo")]
    public string? Correo_usuario { get; set; }

}