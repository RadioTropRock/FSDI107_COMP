using Microsoft.EntityFrameworkCore;

namespace taskManager.Models 
{
    public class DataContext : DbContext
    {

        /*
        Everytime you change something on the models, run these:
            - dotnet ef migrations add <someName>
            - dotnet ef database update
    */

        public DataContext(DbContextOptions<DataContext> options) : base(options)
        {

        }
        //which models should become tables
        public DbSet<Task> Tasks {get; set;}
    }
}