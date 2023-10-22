using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using Client.Models;

namespace Client.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class EstudianteController : ControllerBase
    {
        private readonly TodoContext _context;

        public EstudianteController(TodoContext context)
        {
            _context = context;
        }

        // GET: api/Estudiante
        [HttpGet]
        public async Task<ActionResult<IEnumerable<Estudiante>>> GetEstudiante()
        {
          if (_context.Estudiante == null)
          {
              return NotFound();
          }
            return await _context.Estudiante.ToListAsync();
        }

        // GET: api/Estudiante/5
        [HttpGet("{id}")]
        public async Task<ActionResult<Estudiante>> GetEstudiante(string id)
        {
          if (_context.Estudiante == null)
          {
              return NotFound();
          }
            var estudiante = await _context.Estudiante.FindAsync(id);

            if (estudiante == null)
            {
                return NotFound();
            }

            return estudiante;
        }

        // PUT: api/Estudiante/5
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPut("{id}")]
        public async Task<IActionResult> PutEstudiante(string id, Estudiante estudiante)
        {
            if (id != estudiante.Carnet)
            {
                return BadRequest();
            }

            _context.Entry(estudiante).State = EntityState.Modified;

            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!EstudianteExists(id))
                {
                    return NotFound();
                }
                else
                {
                    throw;
                }
            }

            return NoContent();
        }

        // POST: api/Estudiante
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPost]
        public async Task<ActionResult<Estudiante>> PostEstudiante(Estudiante estudiante)
        {
          if (_context.Estudiante == null)
          {
              return Problem("Entity set 'TodoContext.Estudiante'  is null.");
          }
            _context.Estudiante.Add(estudiante);
            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateException)
            {
                if (EstudianteExists(estudiante.Carnet))
                {
                    return Conflict();
                }
                else
                {
                    throw;
                }
            }

            return CreatedAtAction("GetEstudiante", new { id = estudiante.Carnet }, estudiante);
        }

        // DELETE: api/Estudiante/5
        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteEstudiante(string id)
        {
            if (_context.Estudiante == null)
            {
                return NotFound();
            }
            var estudiante = await _context.Estudiante.FindAsync(id);
            if (estudiante == null)
            {
                return NotFound();
            }

            _context.Estudiante.Remove(estudiante);
            await _context.SaveChangesAsync();

            return NoContent();
        }

        private bool EstudianteExists(string id)
        {
            return (_context.Estudiante?.Any(e => e.Carnet == id)).GetValueOrDefault();
        }
    }
}
