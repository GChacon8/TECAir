using System.ComponentModel.DataAnnotations;

namespace TodoApi.Models;

public class Usuario
{
    [Key]
    [Required]
    public required string Correo { get; set; }
    public string? Contraseña { get; set; }
    public string? Pasaporte { get; set; }
    public string? Nombre1 { get; set; }
    public string? Nombre2 { get; set; }
    public string? Apellido1 { get; set; }
    public string? Appelido2 { get; set; }
    public int Telefono { get; set; }

}