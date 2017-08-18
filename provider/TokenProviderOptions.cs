using System;
using Microsoft.IdentityModel.Tokens;
 
namespace provider
{
    public class TokenProviderOptions
    {
        public string Path { get; set; } = "/token";
 
        public string Issuer { get; set; }
 
        public string Audience { get; set; }
 
        public TimeSpan Expiration { get; set; } = TimeSpan.FromMinutes(15);
 
        public SigningCredentials SigningCredentials { get; set; }
    }
}