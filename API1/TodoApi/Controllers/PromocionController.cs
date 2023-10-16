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
    public class PromocionController : ControllerBase
    {
        private readonly TodoContext _context;

        public PromocionController(TodoContext context)
        {
            _context = context;
        }

        // GET: api/Promocion
        [HttpGet]
        public async Task<ActionResult<IEnumerable<Promocion>>> GetPromocion()
        {
          if (_context.Promocion == null)
          {
              return NotFound();
          }
            return await _context.Promocion.ToListAsync();
        }

        // GET: api/Promocion/5
        [HttpGet("{id}")]
        public async Task<ActionResult<Promocion>> GetPromocion(int id)
        {
          if (_context.Promocion == null)
          {
              return NotFound();
          }
            var promocion = await _context.Promocion.FindAsync(id);

            if (promocion == null)
            {
                return NotFound();
            }

            return promocion;
        }

        // PUT: api/Promocion/5
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPut("{id}")]
        public async Task<IActionResult> PutPromocion(int id, Promocion promocion)
        {
            if (id != promocion.Id)
            {
                return BadRequest();
            }

            _context.Entry(promocion).State = EntityState.Modified;

            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!PromocionExists(id))
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

        // POST: api/Promocion
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPost]
        public async Task<ActionResult<Promocion>> PostPromocion(Promocion promocion)
        {
          if (_context.Promocion == null)
          {
              return Problem("Entity set 'TodoContext.Promocion'  is null.");
          }
            _context.Promocion.Add(promocion);
            await _context.SaveChangesAsync();

            return CreatedAtAction("GetPromocion", new { id = promocion.Id }, promocion);
        }

        // DELETE: api/Promocion/5
        [HttpDelete("{id}")]
        public async Task<IActionResult> DeletePromocion(int id)
        {
            if (_context.Promocion == null)
            {
                return NotFound();
            }
            var promocion = await _context.Promocion.FindAsync(id);
            if (promocion == null)
            {
                return NotFound();
            }

            _context.Promocion.Remove(promocion);
            await _context.SaveChangesAsync();

            return NoContent();
        }

        private bool PromocionExists(int id)
        {
            return (_context.Promocion?.Any(e => e.Id == id)).GetValueOrDefault();
        }
    }
}
