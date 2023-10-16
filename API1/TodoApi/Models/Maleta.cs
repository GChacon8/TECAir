using System.ComponentModel.DataAnnotations;

namespace TodoApi.Models;

public class Maleta
{
    [Key]
    public int Numero { get; set; }
    public int Peso { get; set; }
    public string? Color { get; set; }

}