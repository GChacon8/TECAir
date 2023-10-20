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
    public class AsientoController : ControllerBase
    {
        private readonly TodoContext _context;

        public AsientoController(TodoContext context)
        {
            _context = context;
        }

        // GET: api/Asiento
        [HttpGet]
        public async Task<ActionResult<IEnumerable<Asiento>>> GetAsiento()
        {
          if (_context.Asiento == null)
          {
              return NotFound();
          }
            return await _context.Asiento.ToListAsync();
        }

        // GET: api/Asiento/5
        [HttpGet("{id}")]
        public async Task<ActionResult<Asiento>> GetAsiento(long id)
        {
          if (_context.Asiento == null)
          {
              return NotFound();
          }
            var asiento = await _context.Asiento.FindAsync(id);

            if (asiento == null)
            {
                return NotFound();
            }

            return asiento;
        }

        // PUT: api/Asiento/5
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPut("{id}")]
        public async Task<IActionResult> PutAsiento(long id, Asiento asiento)
        {
            if (id != asiento.Numero)
            {
                return BadRequest();
            }

            _context.Entry(asiento).State = EntityState.Modified;

            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!AsientoExists(id))
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

        // POST: api/Asiento
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPost]
        public async Task<ActionResult<Asiento>> PostAsiento(Asiento asiento)
        {
          if (_context.Asiento == null)
          {
              return Problem("Entity set 'TodoContext.Asiento'  is null.");
          }
            _context.Asiento.Add(asiento);
            await _context.SaveChangesAsync();

            return CreatedAtAction("GetAsiento", new { id = asiento.Numero }, asiento);
        }

        // DELETE: api/Asiento/5
        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteAsiento(long id)
        {
            if (_context.Asiento == null)
            {
                return NotFound();
            }
            var asiento = await _context.Asiento.FindAsync(id);
            if (asiento == null)
            {
                return NotFound();
            }

            _context.Asiento.Remove(asiento);
            await _context.SaveChangesAsync();

            return NoContent();
        }

        private bool AsientoExists(long id)
        {
            return (_context.Asiento?.Any(e => e.Numero == id)).GetValueOrDefault();
        }
    }
}
