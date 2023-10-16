namespace TodoApi.Models;

public class Ejecucion
{
    public int Id { get; set; } //Id lo reconoce como llave primaria o clave única
    public TimeSpan Hora { get; set; }
    public int Precio { get; set; }
}