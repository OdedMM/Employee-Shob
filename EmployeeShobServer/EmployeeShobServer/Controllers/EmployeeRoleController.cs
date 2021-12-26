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
    public class EmployeeRoleController : ControllerBase
    {
        private readonly IConfiguration _configuration;
        private string _connectionString;

        public EmployeeRoleController(IConfiguration configuration)
        {
            _configuration = configuration;
            _connectionString = _configuration.GetConnectionString("EmployeeShobDBConnection");
        }

        [HttpGet]
        public JsonResult Get()
        {
            string query = @"select EmployeeID, RoleID, IsEnabled from dbo.EmployeeRoles";

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
        public JsonResult Post(EmployeeRole employeeRole)
        {
            string query = @"insert into dbo.EmployeeRoles values('"
                           + employeeRole.EmployeeID + @"','" 
                           + employeeRole.RoleID + @"','" 
                           + employeeRole.Enabled + @"')";

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


        [HttpPut]
        public JsonResult Put(EmployeeRole employeeRole)
        {
            string query = @"update dbo.EmployeeRoles 
                           set RoleDescription = '" + employeeRole.Enabled + @"'
                           where EmployeeID = " + employeeRole.EmployeeID + @" 
                           AND RoleID = " + employeeRole.RoleID + @"";

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

            return new JsonResult("Updated Successfully");
        }
    }
}
