<% include ./partials/navbar %>
<div class="header pb-8 pt-5 pt-lg-8 d-flex align-items-center"
  style="min-height: 200px; background-image: url(/assets/img/brand/fikasback.png); background-size: cover; background-position: center top;">
  <!-- Mask -->
  <span class="mask bg-gradient-default opacity-8"></span>
  <!-- Header container -->
  <div class="container-fluid align-items-center">
    <div class="row">
      <div class="col-lg-7 col-md-10">
        <h1 class="display-3 text-white">SMS Logs</h1>

      </div>
    </div>
  </div>
</div>
<div class="row mt-5">
  <div class="col">
    <div class="card bg-default shadow">
      <div class="card-header bg-transparent border-0">
        <h3 class="text-white mb-0">SMS Logs</h3>
      </div>
      <div class="table-responsive">
        <table class="table align-items-center table-dark table-flush">
          <thead class="thead-dark">
            <tr>
              <th scope="col">Phone Number</th>
              <th scope="col">Plate number</th>
              <th scope="col">Time</th>
              <th scope="col"></th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th scope="row">
                <div class="media align-items-center">
                  <div class="media-body">
                    <span class="mb-0 text-sm">071674563546</span>
                  </div>
                </div>
              </th>
              <td>
                KMEE744N
              </td>
              <td>
                <span class="badge badge-dot mr-4">
                  29/08/2019 13:22:46
                </span>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>
</div>
<% include ./partials/footer %>