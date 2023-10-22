using System.ComponentModel.DataAnnotations;

namespace Client.Models;

public class Avion
{
    [Key]
    [Required] //Some collisions with the AvionController, this is a solution 
    public  string Matricula { get; set; }
    public string? Modelo { get; set; }
    public int Capacidad { get; set; }

    //El atributo derivado se calcula del lado del cliente o la base de datos

}