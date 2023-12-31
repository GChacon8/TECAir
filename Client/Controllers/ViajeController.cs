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
    public class ViajeController : ControllerBase
    {
        private readonly TodoContext _context;

        public ViajeController(TodoContext context)
        {
            _context = context;
        }

        // GET: api/Viaje
        [HttpGet]
        public async Task<ActionResult<IEnumerable<Viaje>>> GetViaje()
        {
          if (_context.Viaje == null)
          {
              return NotFound();
          }
            return await _context.Viaje.ToListAsync();
        }

        // GET: api/Viaje/5
        [HttpGet("{id}")]
        public async Task<ActionResult<Viaje>> GetViaje(int id)
        {
          if (_context.Viaje == null)
          {
              return NotFound();
          }
            var viaje = await _context.Viaje.FindAsync(id);

            if (viaje == null)
            {
                return NotFound();
            }

            return viaje;
        }

        // PUT: api/Viaje/5
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPut("{id}")]
        public async Task<IActionResult> PutViaje(int id, Viaje viaje)
        {
            if (id != viaje.Id)
            {
                return BadRequest();
            }

            _context.Entry(viaje).State = EntityState.Modified;

            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!ViajeExists(id))
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

        // POST: api/Viaje
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPost]
        public async Task<ActionResult<Viaje>> PostViaje(Viaje viaje)
        {
          if (_context.Viaje == null)
          {
              return Problem("Entity set 'TodoContext.Viaje'  is null.");
          }
            _context.Viaje.Add(viaje);
            await _context.SaveChangesAsync();

            return CreatedAtAction("GetViaje", new { id = viaje.Id }, viaje);
        }

        // DELETE: api/Viaje/5
        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteViaje(int id)
        {
            if (_context.Viaje == null)
            {
                return NotFound();
            }
            var viaje = await _context.Viaje.FindAsync(id);
            if (viaje == null)
            {
                return NotFound();
            }

            _context.Viaje.Remove(viaje);
            await _context.SaveChangesAsync();

            return NoContent();
        }

        private bool ViajeExists(int id)
        {
            return (_context.Viaje?.Any(e => e.Id == id)).GetValueOrDefault();
        }
    }
}
