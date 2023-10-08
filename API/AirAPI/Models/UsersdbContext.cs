using AirAPI.Models;
using Microsoft.EntityFrameworkCore;

namespace AirAPI.Models
{
    public class UsersdbContext : DbContext
    {
        public UsersdbContext(DbContextOptions<UsersdbContext> options)
            : base(options)
        {


        }
        public virtual DbSet<Users> Users { get; set; }

    }
}

