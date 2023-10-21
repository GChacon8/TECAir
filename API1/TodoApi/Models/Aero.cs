using System.ComponentModel.DataAnnotations;

namespace TodoApi.Models;

public class Aero
{
    [Required]
    public string Id { get; set; } 
    public string? Puerta { get; set; }
    public string? Ciudad { get; set; }
    public string? Nombre {get; set;}
}