using System.ComponentModel.DataAnnotations;
using Microsoft.EntityFrameworkCore;
using System.ComponentModel.DataAnnotations;
using AirAPI.Models;

namespace AirAPI.Models
{
    public class Users
    {
        [Key]

        public int Id { get; set; }
        public string FirstName { get; set; }
        public string Username { get; set; }
        public string password { get; set; }
    }
}

