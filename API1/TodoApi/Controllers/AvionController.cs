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
    public class AvionController : ControllerBase
    {
        private readonly TodoContext _context;

        public AvionController(TodoContext context)
        {
            _context = context;
        }

        // GET: api/Avion
        [HttpGet]
        public async Task<ActionResult<IEnumerable<Avion>>> GetAvion()
        {
          if (_context.Avion == null)
          {
              return NotFound();
          }
            return await _context.Avion.ToListAsync();
        }

        // GET: api/Avion/5
        [HttpGet("{id}")]
        public async Task<ActionResult<Avion>> GetAvion(string id)
        {
          if (_context.Avion == null)
          {
              return NotFound();
          }
            var avion = await _context.Avion.FindAsync(id);

            if (avion == null)
            {
                return NotFound();
            }

            return avion;
        }

        // PUT: api/Avion/5
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPut("{id}")]
        public async Task<IActionResult> PutAvion(string id, Avion avion)
        {
            if (id != avion.Matricula)
            {
                return BadRequest();
            }

            _context.Entry(avion).State = EntityState.Modified;

            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!AvionExists(id))
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

        // POST: api/Avion
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPost]
        public async Task<ActionResult<Avion>> PostAvion(Avion avion)
        {
          if (_context.Avion == null)
          {
              return Problem("Entity set 'TodoContext.Avion'  is null.");
          }
            _context.Avion.Add(avion);
            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateException)
            {
                if (AvionExists(avion.Matricula))
                {
                    return Conflict();
                }
                else
                {
                    throw;
                }
            }

            return CreatedAtAction("GetAvion", new { id = avion.Matricula }, avion);
        }

        // DELETE: api/Avion/5
        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteAvion(string id)
        {
            if (_context.Avion == null)
            {
                return NotFound();
            }
            var avion = await _context.Avion.FindAsync(id);
            if (avion == null)
            {
                return NotFound();
            }

            _context.Avion.Remove(avion);
            await _context.SaveChangesAsync();

            return NoContent();
        }

        private bool AvionExists(string id)
        {
            return (_context.Avion?.Any(e => e.Matricula == id)).GetValueOrDefault();
        }
    }
}
