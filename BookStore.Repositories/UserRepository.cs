using BookStore.Models.Data;
using BookStore.Models.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace BookStore.Repositories
{
    public class UserRepository
    {
        TatvasoftTestContext _context = new TatvasoftTestContext();
        
        public List<User> GetUsers()
        {
            return _context.Users.ToList();
        }
        public User Login(LoginModel model)
        {
            return _context.Users.FirstOrDefault(c => c.Email.Equals(model.Email.ToLower()) && c.Password.Equals(model.Password));
        }

        public User Register(RegisterModel model)
        {
            User user = new User()
            {
                Email = model.Email,
                Password = model.Password,
                Firstname = model.Firstname,
                Lastname = model.Lastname,
                Roleid = model.Roleid,
            };

            if (!(_context.Users.Any(c => c.Email.Equals(model.Email.ToLower()))))
            {

                var entry = _context.Users.Add(user);
                _context.SaveChanges();
                return entry.Entity;
            }
            else
            {
                return null;
            }
        }
    }
}
