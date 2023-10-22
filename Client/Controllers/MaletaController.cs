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
    public class MaletaController : ControllerBase
    {
        private readonly TodoContext _context;

        public MaletaController(TodoContext context)
        {
            _context = context;
        }

        // GET: api/Maleta
        [HttpGet]
        public async Task<ActionResult<IEnumerable<Maleta>>> GetMaleta()
        {
          if (_context.Maleta == null)
          {
              return NotFound();
          }
            return await _context.Maleta.ToListAsync();
        }

        // GET: api/Maleta/5
        [HttpGet("{id}")]
        public async Task<ActionResult<Maleta>> GetMaleta(int id)
        {
          if (_context.Maleta == null)
          {
              return NotFound();
          }
            var maleta = await _context.Maleta.FindAsync(id);

            if (maleta == null)
            {
                return NotFound();
            }

            return maleta;
        }

        // PUT: api/Maleta/5
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPut("{id}")]
        public async Task<IActionResult> PutMaleta(int id, Maleta maleta)
        {
            if (id != maleta.Numero)
            {
                return BadRequest();
            }

            _context.Entry(maleta).State = EntityState.Modified;

            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!MaletaExists(id))
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

        // POST: api/Maleta
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPost]
        public async Task<ActionResult<Maleta>> PostMaleta(Maleta maleta)
        {
          if (_context.Maleta == null)
          {
              return Problem("Entity set 'TodoContext.Maleta'  is null.");
          }
            _context.Maleta.Add(maleta);
            await _context.SaveChangesAsync();

            return CreatedAtAction("GetMaleta", new { id = maleta.Numero }, maleta);
        }

        // DELETE: api/Maleta/5
        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteMaleta(int id)
        {
            if (_context.Maleta == null)
            {
                return NotFound();
            }
            var maleta = await _context.Maleta.FindAsync(id);
            if (maleta == null)
            {
                return NotFound();
            }

            _context.Maleta.Remove(maleta);
            await _context.SaveChangesAsync();

            return NoContent();
        }

        private bool MaletaExists(int id)
        {
            return (_context.Maleta?.Any(e => e.Numero == id)).GetValueOrDefault();
        }
    }
}
