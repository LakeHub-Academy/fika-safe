<!-- <h1 class="mt-4">Dashboard</h1>
<p class="lead mb-3">Welcome <%= user.name %></p>
<a href="/users/logout" class="btn btn-secondary">Logout</a> -->
<% include ./partials/navbar %>
<!-- End Navbar -->
<!-- Header -->
<div class="header bg-gradient-success pb-8 pt-5 pt-md-8">
  <div class="container-fluid">
    <div class="header-body">
      <!-- Card stats -->
      <div class="row">
        <div class="col-xl-3 col-lg-6">
          <div class="card card-stats mb-4 mb-xl-0">
            <div class="card-body">
              <div class="row">
                <div class="col">
                  <h5 class="card-title text-uppercase text-muted mb-0">Registered Riders</h5>
                  <span class="h2 font-weight-bold mb-0"> <%=rider.length%></span>
                </div>
                <div class="col-auto">
                  <div class="icon icon-shape bg-info text-white rounded-circle shadow">
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="col-xl-3 col-lg-6">
          <div class="card card-stats mb-4 mb-xl-0">
            <div class="card-body">
              <div class="row">
                <div class="col">
                  <h5 class="card-title text-uppercase text-muted mb-0">Active Riders</h5>

                  <span class="h2 font-weight-bold mb-0"><%=doc.length%></span>


                </div>
                <div class="col-auto">
                  <div class="icon icon-shape bg-success text-white rounded-circle shadow">
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="col-xl-3 col-lg-6">
          <div class="card card-stats mb-4 mb-xl-0">
            <div class="card-body">
              <div class="row">
                <div class="col">
                  <h5 class="card-title text-uppercase text-muted mb-0">Deactivated Riders</h5>
                  <%const deac= rider.length - doc.length %>
                  <span class="h2 font-weight-bold mb-0"><%=deac%> </span>
                </div>
                <div class="col-auto">
                  <div class="icon icon-shape bg-danger text-white rounded-circle shadow">
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="col-xl-3 col-lg-6">
          <div class="card card-stats mb-4 mb-xl-0">
            <div class="card-body">
              <div class="row">
                <div class="col">
                  <h5 class="card-title text-uppercase text-muted mb-0"></h5>
                  <span class="h2 font-weight-bold mb-0">0</span>
                </div>
                <div class="col-auto">
                  <div class="icon icon-shape bg-info text-white rounded-circle shadow">
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>

<div style="margin-left: 5px" class="container">
  <h4>Number Of Rows</h4>
  <div class="form-group">
    <select style="width: 50px" class="form-control" name="state" id="maxRows">
      <option value="5000">Show ALL Rows</option>
      <option value="5">5</option>
      <option value="10">10</option>
      <option value="15">15</option>
      <option value="20">20</option>
      <option value="50">50</option>
      <option value="70">70</option>
      <option value="100">100</option>
    </select>
  </div>
</div>
<div class="">
  <a href="/users/register"><button class=" btn btn-icon btn-3 btn-primary" type="button">
      <span class="btn-inner--icon"><i class="ni ni-fat-add"></i></span>

      <span class="btn-inner--text">New Rider</span>

    </button></a>
  <!-- Table -->
  <div class="row">
    <div class="col">
      <div class="card shadow">
        <div class="card-header border-0">
          <h3 class="mb-0">Registered Riders</h3>
        </div>
        <div class="table-responsive">
          <table id="table-id" class="table align-items-center table-flush">
            <thead class="thead-light">
              <tr>
                <th scope="col">Name</th>
                <th scope="col">Contact</th>
                <th scope="col">Status</th>
                <th scope="col">Base</th>
                <th scope="col">Bike Owner</th>
                <th scope="col"></th>
              </tr>
            </thead>
            <tbody>
              <% rider.map(function(items){ %>
              <tr>
                <th scope="row">
                  <div class="media align-items-center">
                    <div class="media-body">
                      <span class="mb-0 text-sm"><%=items.riderFname+" " +items.riderLname%></span>
                    </div>
                  </div>
                </th>
                <td>
                  <%=items.riderTelNumber%>
                </td>
                <td>
                  <span class="badge badge-dot mr-4">

                    <% if (items.status==='Active') { %>
                    <i class="bg-success">
                      <% } else { %>
                      <i class="bg-danger">
                        <% } %></i> <%=items.status%>
                  </span>
                </td>
                <td>
                  <%=items.riderBase%>
                </td>
                <td>
                  <%=items.bikeOwnerFname + items.bikeOwnerLname%>
                </td>
                <td class="text-right">
                  <div class="dropdown">
                    <a class="btn btn-sm btn-icon-only text-light" href="#" role="button" data-toggle="dropdown"
                      aria-haspopup="true" aria-expanded="false">
                      <i class="fas fa-ellipsis-v"></i>
                    </a>
                    <div class="dropdown-menu dropdown-menu-right dropdown-menu-arrow">
                      <a class="dropdown-item" href="/profile/<%=items._id%>">Edit</a>
                    </div>
                  </div>
                </td>
              </tr>
              <% }) %>
            </tbody>
          </table>
        </div>
      </div>
      <div class='pagination-container'>
        <nav>
          <ul class="pagination justify-content-end mb-0">

            <li data-page="prev" class="page-item disabled">
              <a class="page-link" href="#" tabindex="-1">
                <i class="fas fa-angle-left"></i>
                <span class="sr-only">Previous</span>
              </a>
            </li>
            <!--	Here the JS Function Will Add the Rows -->
            <li data-page="next" id="prev" class="page-item">
              <a class="page-link" href="#">
                <i class="fas fa-angle-right"></i>
                <span class="sr-only">Next</span>
              </a>
            </li>
          </ul>
        </nav>
      </div>

      <!-- Footer -->
      <% include ./partials/footer %>
    </div>
  </div>