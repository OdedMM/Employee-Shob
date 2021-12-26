using EmployeeShobServer.Models;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Configuration;
using System;
using System.Collections.Generic;
using System.Data;
using System.Data.SqlClient;
using System.Linq;
using System.Threading.Tasks;

namespace EmployeeShobServer.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class AttendanceController : ControllerBase
    {
        private readonly IConfiguration _configuration;
        private string _connectionString;

        public AttendanceController(IConfiguration configuration)
        {
            _configuration = configuration;
            _connectionString = _configuration.GetConnectionString("EmployeeShobDBConnection");
        }

        [HttpGet]
        public JsonResult Get()
        {
            string query = @"select EmployeeID, RoleID, ClockInTime from dbo.Attendance";

            DataTable table = new DataTable();
            SqlDataReader myReader;

            using (SqlConnection myCon = new SqlConnection(_connectionString))
            {
                myCon.Open();
                using (SqlCommand myCommand = new SqlCommand(query, myCon))
                {
                    myReader = myCommand.ExecuteReader();
                    table.Load(myReader); ;

                    myReader.Close();
                    myCon.Close();
                }
            }

            return new JsonResult(table);
        }


        [HttpPost]
        public JsonResult Post(Attendance attendance)
        {
            string query = @"insert into dbo.EmployeeRoles values('"
                           + attendance.EmployeeID + @"','"
                           + attendance.RoleID + @"','"
                           + DateTime.Now + @"')";

            DataTable table = new DataTable();
            SqlDataReader myReader;

            using (SqlConnection myCon = new SqlConnection(_connectionString))
            {
                myCon.Open();
                using (SqlCommand myCommand = new SqlCommand(query, myCon))
                {
                    myReader = myCommand.ExecuteReader();
                    table.Load(myReader); ;

                    myReader.Close();
                    myCon.Close();
                }
            }

            return new JsonResult("Added Successfully");
        }
    }
}
