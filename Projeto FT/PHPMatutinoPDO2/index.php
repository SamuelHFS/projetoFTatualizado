<?php
if (!isset($_SESSION)) {
    session_start();
}
if(!isset($_SESSION['msg'])){
    $_SESSION['msg'] = "";
}

$_SESSION['nr'] = "-1";
$_SESSION['confereNr'] = "-2";
?>
<!DOCTYPE html>
<html>
    <head>
        <meta charset="UTF-8">
        <title>Login</title>
        <link rel="stylesheet" href="css/bootstrap.css">
        <link rel="stylesheet" href="css/bootstrap.min.css">
        <style>
            .espaco{
                padding: 10px;
            }
        </style>
    </head>
    <body>
        <div class="container">
            <div class="row espaco">
                <div class=" col-md-6 offset-md-3"
                     style="margin-top: 9%;">
                    <div class="card-header bg-dark border espaco
                         text-white text-center">Validação de Login</div>
                    <div class="card-body border">
                        <form method="post" action="./controller/validaLogin.php">
                            <div class="row espaco">
                                <?php 
                                if($_SESSION['msg'] != ""){
                                    echo $_SESSION['msg'];
                                    $_SESSION['msg'] = "";
                                }
                                
                                ?><br>
                                <div class="col-md-8 offset-md-2 ">
                                    <label>Usuário</label>
                                </div>    
                            </div>
                            <div class="row">
                                <div class="col-md-8 offset-md-2 ">
                                    <input class="form-control" type="text" name="login">
                                </div>    
                            </div>
                            <div class="row espaco">
                                <div class="col-md-8 offset-md-2 ">
                                    <label>Senha</label>
                                </div>    
                            </div>
                            <div class="row">
                                <div class="col-md-8 offset-md-2 ">
                                    <input class="form-control" type="text" name="senha">
                                </div>    
                            </div>
                            <div class="row espaco" style="margin-top: 20px;">
                                <div class="col-md-8 offset-md-2 ">
                                    <input class="btn btn-success" type="submit" name="enviar" value="Enviar"> 
                                    <input class="btn btn-light" type="reset" value="Limpar">
                                </div>    
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
        
        <script src="js/bootstrap.js"></script>
        <script src="js/bootstrap.min.js"></script>
    </body>
</html>
