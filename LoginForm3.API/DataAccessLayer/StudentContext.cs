using LoginForm3.API.Models;
using System;
using System.Collections.Generic;
using System.Data.Entity;
using System.Linq;
using System.Web;

namespace LoginForm3.API.DataAccessLayer
{
  public class StudentContext: DbContext
  {
    public StudentContext() : base("DefaultConnection")
    {
      Database.SetInitializer<StudentContext>(null);
    }
    public DbSet<StudentEntity> studentEntities { get; set; }
    protected override void OnModelCreating(DbModelBuilder modelBuilder)
    {
      base.OnModelCreating(modelBuilder);

      modelBuilder.Entity<StudentEntity>().ToTable("Student");
    }
  }
}
