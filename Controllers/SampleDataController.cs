using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Newtonsoft.Json;


namespace angulartest2.Controllers
{
    [Route("api/[controller]")]
    public class SampleDataController : Controller
    {
        public string datastr ="this is the data returned from the server";
        [HttpGet("[action]")]
        public String Stuff()
        {
            return JsonConvert.SerializeObject(datastr);
        }

    }
}
