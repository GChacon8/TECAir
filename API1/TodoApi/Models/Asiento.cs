using System.ComponentModel.DataAnnotations;

namespace TodoApi.Models;

public class Asiento
{
    [Key]
    public long Num { get; set; } 
    public int X { get; set; }
    public int Y { get; set; }
    public bool Ocupado { get; set; }
}