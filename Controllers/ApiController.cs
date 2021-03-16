using Microsoft.AspNetCore.Mvc;
using taskManager.Models;

using System.Linq;
using System.Collections.Generic;

namespace taskManager.Controllers
{
    public class ApiController : Controller
    {
            private DataContext dbContext;
            public ApiController(DataContext db)
            {
                //i am the constructor

            }

           [HttpGet]
            
            public IActionResult Test()
            {
                string name = "Eric";
                return Json(name);
                
            }
            [HttpGet]
            public IActionResult GetTask()
            {
            var tasks = dbContext.Tasks.ToList();
            return Json(tasks);
    }
            [HttpPost]
            public IActionResult PostTask([FromBody] Task theTask)
            {
                    dbContext.Tasks.Add(theTask);
                    dbContext.SaveChanges();
               
                return Json(theTask);
            }
    }
}

