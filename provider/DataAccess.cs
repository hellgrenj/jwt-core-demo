using System.Collections.Generic;
using System.Security.Claims;

namespace provider
{
    public static class DataAccess
    {
        public static List<User> Users { get; } = new List<User>()
        {
            new User()
            {
                UserName = "bob",
                Password = "bobby2017!",
                Claims = new Claim[]
                {
                    new Claim("roles","SimpleUser"),
                }
            }, 
            new User()
            {
                UserName = "adminbob",
                Password = "bobby2017!",
                Claims = new Claim[]
                {
                    new Claim("roles","SimpleUser"),
                    new Claim("roles","Admin"),
                    new Claim("roles","SuperAdmin")
                }
            }
        };
    }
    public class User
    {
        public string UserName { get; set; }
        public string Password { get; set; }

        public Claim[] Claims { get; set; }

    }
}