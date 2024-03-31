
<div id="custom-alert">
  <div class="custom-alert-content">
    <p id="custom-alert-message"></p>
    <button id="custom-alert-ok">OK</button>
  </div>
</div>


<script src="./app/sign-reset/js/reset.js"></script>


<?php

  if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    include './app/sign-reset/php/reset.php';
    $information = resetPassword();
  }
?>



<link href="./app/sign-reset/css/style-reset.css" rel="stylesheet"/>
<link href="./app/sign-in/css/modal.css" rel="stylesheet"/>

<link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/font-awesome/4.5.0/css/font-awesome.min.css">
<link href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.6/css/bootstrap.min.css" rel="stylesheet">

<div class="form-gap"></div>
  <div class="container">
    <div class="row">
      <div class="col-md-4 col-md-offset-4">
        <div class="panel panel-default">
          <div class="panel-body">
              <div class="text-center">
                <h3><i class="fa fa-lock fa-4x"></i></h3>
                <h2 class="text-center">Forgot Password?</h2>
                <p>You can reset your password here.</p>

                <div class="panel-body">
      
                  <form id="register-form" role="form" autocomplete="off" class="form" method="post" action="">
                    <div class="form-group">
                      <div class="input-group">
                        <span class="input-group-addon"><i class="glyphicon glyphicon-envelope color-blue"></i></span>
                        <input id="email" name="email" placeholder="email address" class="form-control"  type="email">
                      </div>
                    </div>
                    <div class="form-group">
                      <input name="recover-submit" class="btn btn-lg btn-primary btn-block" value="Reset Password" type="submit">
                    </div>
                        
                    <input type="hidden" class="hide" name="token" id="token" value=""> 
                  </form>
      
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>

<div id="myModal" class="modal">
    <div class="modal-content">
        <span class="close" id="closeModal">&times;</span>
        <p><?= $information ?></p>
    </div>
</div>


<script src="./assets/js/modal.js"></script>

<?php

  if(isset($information) && $information != '') {
    echo "<script>openModal();</script>";
  }
  
?>