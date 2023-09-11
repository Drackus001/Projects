using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using TodoApp.API.Data;
using TodoApp.API.Models;

namespace TodoApp.API.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class TodoController : ControllerBase
    {
        private readonly AppDbContext _appDbContext;
        public TodoController(AppDbContext appDbContext)
        {
            _appDbContext = appDbContext;
        }

        [HttpGet]
        public async Task<IActionResult> GetAllTodos()
        {
            var todos = await _appDbContext.Todos.ToListAsync();
            return Ok(todos);
        }

        [HttpPost]
        public async Task<IActionResult> AddTodo(Todo todo)
        {
            todo.Id = Guid.NewGuid();

            _appDbContext.Todos.Add(todo);
            await _appDbContext.SaveChangesAsync();

            return Ok(todo);
        }
    }
}
