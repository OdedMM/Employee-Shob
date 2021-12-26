using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace EmployeeShobServer.Models
{
    public class Attendance
    {
        public int EmployeeID { get; set; }
        public int RoleID { get; set; }
        public DateTime ClockInTime { get; set; }
    }
}
