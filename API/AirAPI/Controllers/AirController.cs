using AirAPI.Models;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace AirAPI.Controllers;

[Route("api/[controller]")]
[ApiController]
public class UsersController : ControllerBase
{
    private UsersdbContext _users;

    public UsersController(UsersdbContext users)
    {
        _users = users;

    }
    // GET: api/<UsersController>
    [HttpGet]
    public IActionResult Get()
    {
        var user = _users.Users;
        return Ok(user);
    }


    public Users GetById(int id)
    {
        var users = _users.Users.Find(id);
        if (users == null) { throw new KeyNotFoundException("User Not Found"); }
        return users;
    }


    // GET api/<UsersController>/5
    [HttpGet]
    [AllowAnonymous]
    [HttpGet("{id:int}")]
    public IActionResult Get(int id)
    {
        var emp = _users.Users.Find(id);
        return Ok(emp);
    }

    // POST api/<UsersController>
    [HttpPost]
    public IActionResult Post([FromBody] Users model)
    {

        var userExist = _users.Users.Any(e => e.Username == model.Username);
        if (userExist == true)
        {
            return Ok(new { Message = "User Already Created" });

        }

        _users.Add(model);
        _users.SaveChanges();

        return Ok(new { Message = "User Created" });
    }

    // PUT api/<UsersController>/5
    [HttpPut("{id}")]
    public IActionResult Put([FromBody] Users model)
    {

        _users.Users.Attach(model);
        _users.Entry(model).State = EntityState.Modified;


        // _users.Users.Update(model);
        _users.SaveChanges();

        return Ok(new { Message = "User Updated" });
    }

    // DELETE api/<UsersController>/5
    [HttpDelete("{id}")]
    public IActionResult Delete(int id)
    {
        var user = GetById(id);

        _users.Users.Remove(user);
        _users.SaveChanges();

        return Ok(new { Message = "User Deleted" });

    }
}
