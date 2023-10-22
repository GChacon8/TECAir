using System.ComponentModel.DataAnnotations.Schema;

namespace Admin.Models;

public class Ejecucion
{
    public int Id { get; set; } //Id lo reconoce como llave primaria o clave única
    public TimeOnly Hora { get; set; }
    public int Precio { get; set; }
    
    [ForeignKey("Matricula")]
    public string? Matricula_avion { get; set; }
}