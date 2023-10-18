using System.ComponentModel.DataAnnotations;

namespace TodoApi.Models;

public class Viaje
{
    public int Id { get; set; } // ID de la promoción
    public bool Estado { get; set; }
    public string? Fin {get; set;}
    public string? Inicio {get; set;}

}