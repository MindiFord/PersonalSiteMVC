using Microsoft.Owin;
using Owin;

[assembly: OwinStartupAttribute(typeof(PersonalSiteMVC.UI.MVC.Startup))]
namespace PersonalSiteMVC.UI.MVC
{
    public partial class Startup
    {
        public void Configuration(IAppBuilder app)
        {
            ConfigureAuth(app);
        }
    }
}
