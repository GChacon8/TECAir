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
    public class AeroController : ControllerBase
    {
        private readonly TodoContext _context;

        public AeroController(TodoContext context)
        {
            _context = context;
        }

        // GET: api/Aero
        [HttpGet]
        public async Task<ActionResult<IEnumerable<Aero>>> GetAero()
        {
          if (_context.Aero == null)
          {
              return NotFound();
          }
            return await _context.Aero.ToListAsync();
        }

        // GET: api/Aero/5
        [HttpGet("{id}")]
        public async Task<ActionResult<Aero>> GetAero(string id)
        {
          if (_context.Aero == null)
          {
              return NotFound();
          }
            var aero = await _context.Aero.FindAsync(id);

            if (aero == null)
            {
                return NotFound();
            }

            return aero;
        }

        // PUT: api/Aero/5
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPut("{id}")]
        public async Task<IActionResult> PutAero(string id, Aero aero)
        {
            if (id != aero.Id)
            {
                return BadRequest();
            }

            _context.Entry(aero).State = EntityState.Modified;

            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!AeroExists(id))
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

        // POST: api/Aero
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPost]
        public async Task<ActionResult<Aero>> PostAero(Aero aero)
        {
          if (_context.Aero == null)
          {
              return Problem("Entity set 'TodoContext.Aero'  is null.");
          }
            _context.Aero.Add(aero);
            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateException)
            {
                if (AeroExists(aero.Id))
                {
                    return Conflict();
                }
                else
                {
                    throw;
                }
            }

            return CreatedAtAction("GetAero", new { id = aero.Id }, aero);
        }

        // DELETE: api/Aero/5
        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteAero(string id)
        {
            if (_context.Aero == null)
            {
                return NotFound();
            }
            var aero = await _context.Aero.FindAsync(id);
            if (aero == null)
            {
                return NotFound();
            }

            _context.Aero.Remove(aero);
            await _context.SaveChangesAsync();

            return NoContent();
        }

        private bool AeroExists(string id)
        {
            return (_context.Aero?.Any(e => e.Id == id)).GetValueOrDefault();
        }
    }
}
