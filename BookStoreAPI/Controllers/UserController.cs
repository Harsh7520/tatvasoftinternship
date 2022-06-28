using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using BookStore.Repositories;
using System.Linq;
using System.Threading.Tasks;
using BookStore.Models.Models;
using BookStore.Models.Data;

namespace BookStoreAPI.Controllers
{
    
    [ApiController]
    public class UserController : ControllerBase
    {
        UserRepository _repository = new UserRepository();

        [HttpGet]
        [Route("GetUsers")]
        public IActionResult GetUsers()
        {
            return Ok(_repository.GetUsers());
        }

        [HttpPost]
        [Route("login")]
        public IActionResult Login(LoginModel model)
        {
           User user = _repository.Login(model);
            if (user == null)
                return NotFound();
            return Ok(user);
        }

        [HttpPost]
        [Route("register")]
        public IActionResult Register(RegisterModel model)
        {

          
            User user = _repository.Register(model);
            if (user == null)
                return BadRequest("User Already Exists");
            return Ok(user);
        }


    }
}
