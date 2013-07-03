<?

class hook_ctl {

  private $_ips = array('207.97.227.253', '50.57.128.197', '108.171.174.178');

  public function __construct() {
    /* support for ec2 load balancers */
    if (
        isset($_SERVER['HTTP_X_FORWARDED_FOR']) && 
        filter_var($_SERVER['HTTP_X_FORWARDED_FOR'], FILTER_VALIDATE_IP)
      ) {
      $remoteIp = $_SERVER['HTTP_X_FORWARDED_FOR'];
    } else {
      $remoteIp = $_SERVER['REMOTE_ADDR'];
    }

    if (in_array($remoteIp, $this->_ips)) {
      `git pull origin master`;
    } else {
      header('HTTP/1.1 404 Not Found');
      return false;
    }

  }

  public function index() {

  }

}
