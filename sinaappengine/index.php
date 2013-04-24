<!DOCTYPE html>
<html>
    <head>
        <meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
        <title>考拉电视</title>
        <style>
           body{
            padding:0;
            margin:0;
           }
        </style>
        <link rel="shortcut icon" href="static/img/akoola_tv_ico.png">
    </head>
    <body>
        <div id="akoola_tv_wrapper" style="text-align: center">
        </div>
        <div id="akoola_channel" style="display:none;position:absolute;top:10px;z-index:10;font-size:40px;color:#00FF00;padding:30px;">
        </div>
        <div id="akoola_qrcode" style="margin-top:5px; text-align:center;"></div>
        <img id="akoola_logo" src="static/img/akoola_tv_logo_p.png" style="border:none;z-index:11;position:absolute;" />
        <script type="text/javascript" src="static/js/jquery.min.js"></script>
        <script type="text/javascript" src="static/js/qrcode.js"></script>
        <script type="text/javascript" src="static/js/jquery.qrcode.js"></script>
        <script type="text/javascript" src="static/js/tv.akoola.js"></script>
    </body>
</html>
