using System;
using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace Persistence.Migrations
{
    public partial class Seed : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.InsertData(
                table: "Owner",
                columns: new[] { "Id", "Address", "DateOfBirth", "Name" },
                values: new object[] { new Guid("103c8287-30cb-4630-b3f2-978286f72bd7"), "Cairo,Egypt", new DateTime(1996, 2, 2, 0, 0, 0, 0, DateTimeKind.Unspecified), "OwnerSedded" });

            migrationBuilder.InsertData(
                table: "Owner",
                columns: new[] { "Id", "Address", "DateOfBirth", "Name" },
                values: new object[] { new Guid("103c8287-30cb-4630-b3f2-978286f72bd8"), "Alex,Egypt", new DateTime(1997, 6, 6, 0, 0, 0, 0, DateTimeKind.Unspecified), "OwnerSedded2" });

            migrationBuilder.InsertData(
                table: "Account",
                columns: new[] { "Id", "AccountType", "DateCreated", "OwnerId" },
                values: new object[] { new Guid("103c8287-30cb-4630-c3f2-978286f72bd7"), "AccountType1", new DateTime(2024, 11, 28, 8, 20, 46, 559, DateTimeKind.Utc).AddTicks(2640), new Guid("103c8287-30cb-4630-b3f2-978286f72bd7") });

            migrationBuilder.InsertData(
                table: "Account",
                columns: new[] { "Id", "AccountType", "DateCreated", "OwnerId" },
                values: new object[] { new Guid("103c8287-30cb-4630-c3f2-978286f72bd8"), "AccountType2", new DateTime(2024, 11, 28, 8, 20, 46, 559, DateTimeKind.Utc).AddTicks(2642), new Guid("103c8287-30cb-4630-b3f2-978286f72bd7") });

            migrationBuilder.InsertData(
                table: "Account",
                columns: new[] { "Id", "AccountType", "DateCreated", "OwnerId" },
                values: new object[] { new Guid("103c8287-30cb-4630-c3f2-978286f72bd9"), "AccountType3", new DateTime(2024, 11, 28, 8, 20, 46, 559, DateTimeKind.Utc).AddTicks(2644), new Guid("103c8287-30cb-4630-b3f2-978286f72bd8") });
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DeleteData(
                table: "Account",
                keyColumn: "Id",
                keyValue: new Guid("103c8287-30cb-4630-c3f2-978286f72bd7"));

            migrationBuilder.DeleteData(
                table: "Account",
                keyColumn: "Id",
                keyValue: new Guid("103c8287-30cb-4630-c3f2-978286f72bd8"));

            migrationBuilder.DeleteData(
                table: "Account",
                keyColumn: "Id",
                keyValue: new Guid("103c8287-30cb-4630-c3f2-978286f72bd9"));

            migrationBuilder.DeleteData(
                table: "Owner",
                keyColumn: "Id",
                keyValue: new Guid("103c8287-30cb-4630-b3f2-978286f72bd7"));

            migrationBuilder.DeleteData(
                table: "Owner",
                keyColumn: "Id",
                keyValue: new Guid("103c8287-30cb-4630-b3f2-978286f72bd8"));
        }
    }
}
