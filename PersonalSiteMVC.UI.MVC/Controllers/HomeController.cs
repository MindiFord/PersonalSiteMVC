using PersonalSiteMVC.UI.MVC.Models;
using System;
using System.Configuration;
using System.Net;
using System.Net.Mail;
using System.Web.Mvc;

namespace PersonalSiteMVC.UI.MVC.Controllers
{
    public class HomeController : Controller
    {
        [HttpGet]
        public ActionResult Index()
        {
            return View();
        }

        [HttpGet]
        //[Authorize]
        public ActionResult About()
        {
            ViewBag.Message = "Your app description page.";

            return View();
        }

        [HttpPost]
        public JsonResult ContactAjax(ContactViewModel cvm)
        {
            string body = $"{cvm.Name} has sent you the following message:<br />" +
                $"{cvm.Message} <strong>from the email address:</strong> {cvm.Email}.";

            MailMessage mm = new MailMessage(
                ConfigurationManager.AppSettings["EmailUser"].ToString(),
                ConfigurationManager.AppSettings["EmailTo"].ToString(),
                cvm.Subject,
                body);

            mm.IsBodyHtml = true;
            mm.Priority = MailPriority.High;
            mm.ReplyToList.Add(cvm.Email);

            SmtpClient client = new SmtpClient(ConfigurationManager.AppSettings["EmailClient"].ToString());
            client.Credentials = new NetworkCredential(ConfigurationManager.AppSettings["EmailUser"].ToString(), ConfigurationManager.AppSettings["EmailPass"].ToString());

            try
            {
                client.Send(mm);
            }
            catch (Exception ex)
            {
                ViewBag.Message = ex.StackTrace;
            }

            return Json(cvm);

        }

    }
}
