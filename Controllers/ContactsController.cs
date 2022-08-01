using Microsoft.AspNetCore.Mvc;

namespace CoderDecoreSite.Controllers
{
    public class ContactsController : Controller
    {
        public IActionResult Contacts()
        {
            return View();
        }
    }
}
