using System.ComponentModel.DataAnnotations;

namespace Admin.Models;

public class Aero
{
    [Required]
    public required string Id { get; set; } 
    public string? Puerta { get; set; }
    public string? Ciudad { get; set; }
    public string? Nombre {get; set;}
}