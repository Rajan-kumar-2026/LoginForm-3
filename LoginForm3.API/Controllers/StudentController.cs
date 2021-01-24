using LoginForm3.API.DataAccessLayer;
using LoginForm3.API.Models;
using System.Collections.Generic;
using System.Linq;
using System.Web.Http;

namespace LoginForm3.API.Controllers
{
  [Authorize]
  public class StudentController : ApiController
    {
      [HttpGet]
      [Route("api/student")]
      public List<StudentEntity> GetAllStudent()
      {
        using(StudentContext ctx = new StudentContext())
        {
          List<StudentEntity> students = ctx.studentEntities.ToList();

          return students;
        }
      }
    }
}
