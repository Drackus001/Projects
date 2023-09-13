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
            todo.IsCompleted = false;

            _appDbContext.Todos.Add(todo);
            await _appDbContext.SaveChangesAsync();

            return Ok(todo);
        }

        [HttpPut]
        [Route("{id:Guid}")]
        public async Task<IActionResult> UpdateTodo([FromRoute] Guid id, Todo todoUpdateRequest)
        {
            var todo = await _appDbContext.Todos.FindAsync(id);
            if (todo == null)
            {
                return NotFound("Todo not found");
            }

            todo.IsCompleted = todoUpdateRequest.IsCompleted;
            //todo.CompletedAt = DateTime.Now;

            await _appDbContext.SaveChangesAsync();

            return Ok(todo);
        }
    }
}
