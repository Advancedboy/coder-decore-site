using CoderDecoreSite.Models;
using Microsoft.AspNetCore.Mvc;
using System.Diagnostics;

namespace CoderDecoreSite.Controllers
{
    public class HomeController : Controller
    {
        public IActionResult Index()
        {
            return View();
        }

        public IActionResult Contacts()
        {
            return View();
        }

        public IActionResult InDevelopment()
        {
            return View();
        }
    }
}