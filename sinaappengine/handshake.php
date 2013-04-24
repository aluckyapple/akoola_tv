<?php
    $mmc = memcache_init();
    if($mmc == false) {
        echo "{}";
        exit;
    }
    
    $remote_ip = $_SERVER['REMOTE_ADDR'];
    
	if(!empty($_POST)) {
        $lan_ip   = $_POST['ip'];
        $lan_port = $_POST['port']; 
        memcache_set($mmc, $remote_ip, '{"IP":"'.$lan_ip.'","PORT":'.$lan_port.'}');
        echo "[".$remote_ip."]-[".$lan_ip.":".$lan_port."]";
    } else {
        $val = memcache_get($mmc, $remote_ip);
        if($val == null)
            echo "{}";
        else
            echo $val;
    }  
?>