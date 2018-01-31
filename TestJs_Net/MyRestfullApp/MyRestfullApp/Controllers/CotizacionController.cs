using MyRestfullApp.EstrategiasMoneda;
using System;
using System.Web.Http;

namespace MyRestfullApp.Controllers
{
    public class CotizacionController : ApiController
    {
        [Route("MyRestfullApp/Cotizacion/{moneda}")]
        [HttpGet()]
        public IHttpActionResult GetCotizacion(string moneda)
        {
            CotizacionContext cn = new CotizacionContext();

            if (moneda.Equals("Dolar", StringComparison.InvariantCultureIgnoreCase))
            {
                cn.SetCotizador(new CotizadorDolarService());
            }
            else if (moneda.Equals("Peso", StringComparison.InvariantCultureIgnoreCase))
            {
                cn.SetCotizador(new CotizadorPesoService());
            }
            else if (moneda.Equals("Real", StringComparison.InvariantCultureIgnoreCase))
            {
                cn.SetCotizador(new CotizadorRealService());
            }
            else
            {
                cn.SetCotizador(new CotizadorOtraService());
            }

            return cn.Cotizar();
        }
    }
}
