using System.ComponentModel.DataAnnotations;

namespace TodoApi.Models;

public class Usuario
{
    [Key]
    [Required]
    public string Correo { get; set; }
    public string? Contraseña { get; set; }
    public string? Pasaporte { get; set; }
    public string? Nombre_1 { get; set; }
    public string? Nombre_2 { get; set; }
    public string? Apellido_1 { get; set; }
    public string? Apellido_2 { get; set; }
    public int Telefono { get; set; }
    public bool Check_in {get; set;}

}