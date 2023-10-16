using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using TodoApi.Models;

namespace TodoApi.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class EjecucionController : ControllerBase
    {
        private readonly TodoContext _context;

        public EjecucionController(TodoContext context)
        {
            _context = context;
        }

        // GET: api/Ejecucion
        [HttpGet]
        public async Task<ActionResult<IEnumerable<Ejecucion>>> GetEjecucion()
        {
          if (_context.Ejecucion == null)
          {
              return NotFound();
          }
            return await _context.Ejecucion.ToListAsync();
        }

        // GET: api/Ejecucion/5
        [HttpGet("{id}")]
        public async Task<ActionResult<Ejecucion>> GetEjecucion(int id)
        {
          if (_context.Ejecucion == null)
          {
              return NotFound();
          }
            var ejecucion = await _context.Ejecucion.FindAsync(id);

            if (ejecucion == null)
            {
                return NotFound();
            }

            return ejecucion;
        }

        // PUT: api/Ejecucion/5
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPut("{id}")]
        public async Task<IActionResult> PutEjecucion(int id, Ejecucion ejecucion)
        {
            if (id != ejecucion.Id)
            {
                return BadRequest();
            }

            _context.Entry(ejecucion).State = EntityState.Modified;

            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!EjecucionExists(id))
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

        // POST: api/Ejecucion
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPost]
        public async Task<ActionResult<Ejecucion>> PostEjecucion(Ejecucion ejecucion)
        {
          if (_context.Ejecucion == null)
          {
              return Problem("Entity set 'TodoContext.Ejecucion'  is null.");
          }
            _context.Ejecucion.Add(ejecucion);
            await _context.SaveChangesAsync();

            return CreatedAtAction("GetEjecucion", new { id = ejecucion.Id }, ejecucion);
        }

        // DELETE: api/Ejecucion/5
        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteEjecucion(int id)
        {
            if (_context.Ejecucion == null)
            {
                return NotFound();
            }
            var ejecucion = await _context.Ejecucion.FindAsync(id);
            if (ejecucion == null)
            {
                return NotFound();
            }

            _context.Ejecucion.Remove(ejecucion);
            await _context.SaveChangesAsync();

            return NoContent();
        }

        private bool EjecucionExists(int id)
        {
            return (_context.Ejecucion?.Any(e => e.Id == id)).GetValueOrDefault();
        }
    }
}
