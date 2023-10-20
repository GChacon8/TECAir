using System.ComponentModel.DataAnnotations;

namespace TodoApi.Models;

public class Avion
{
    [Key]
    [Required] //Some collisions with the AvionController, this is a solution 
    public required string Matricula { get; set; }
    public string? Modelo { get; set; }
    public int Capacidad { get; set; }

    //El atributo derivado se calcula del lado del cliente o la base de datos

}