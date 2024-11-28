using Domain.Repositories;
using Persistence;
using Persistence.Repositories;
using Services;
using Services.Abstractions;
using Microsoft.EntityFrameworkCore;
using Crud.Middleware;

var builder = WebApplication.CreateBuilder(args);

// Add services to the container.

//builder.Services.AddControllers();
builder.Services.AddCors(options =>
{
    options.AddPolicy("AllowAll", builder =>
        builder.AllowAnyOrigin()
               .AllowAnyMethod()
               .AllowAnyHeader());
});
builder.Services.AddControllers()
               .AddApplicationPart(typeof(Presentation.AssemblyReference).Assembly);
// Learn more about configuring Swagger/OpenAPI at https://aka.ms/aspnetcore/swashbuckle
builder.Services.AddEndpointsApiExplorer();
builder.Services.AddSwaggerGen();
builder.Services.AddScoped<IServiceManager, ServiceManager>();

builder.Services.AddScoped<IRepositoryManager, RepositoryManager>();
builder.Services.AddDbContextPool<RepositoryDbContext>(options =>
{
    var connectionString = builder.Configuration.GetConnectionString("sqlConnection");
//
    options.UseSqlServer(connectionString);
});

builder.Services.AddTransient<ExceptionHandlingMiddleware>();
var app = builder.Build();

// Configure the HTTP request pipeline.
if (app.Environment.IsDevelopment())
{
    app.UseSwagger();
    app.UseSwaggerUI();
}
app.UseCors("AllowAll");
app.UseHttpsRedirection();

app.UseAuthorization();

app.MapControllers();

app.Run();
