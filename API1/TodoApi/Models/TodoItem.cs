namespace TodoApi.Models;

public class TodoItem
{
    public long Id { get; set; } //Id es la clave única para la base de datos relacional
    public string? Name { get; set; }
    public bool IsComplete { get; set; }
}