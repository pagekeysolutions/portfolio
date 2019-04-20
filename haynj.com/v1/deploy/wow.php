<?php
echo 'Moving to proper directory <br/>';
echo shell_exec('cd ~/public_html/domains/haynj.com');
echo 'Attempting git pull <br/>';
echo shell_exec('git pull origin master') . '<br/>';
echo 'Terminating deploy script';
?>