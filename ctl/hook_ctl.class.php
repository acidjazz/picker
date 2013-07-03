<?

class hook_ctl {

  private $masks = ['204.232.175.64/27','192.30.252.0/22'];

  public function cidr ($ip, $cidr) {
    list ($net, $mask) = explode("/", $cidr);
    return ( ip2long ($ip) & ~((1 << (32 - $mask)) - 1) ) == ip2long ($net); 
  }

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

    foreach ($this->masks as $mask) {

      if ($this->cidr($remoteIp, $mask)) {
        `git pull origin master`;
        error_log('ip in mask, fireing');
        return true;
      }

    }

    error_log('ip not in mask:' . $remoteIp);
    header('HTTP/1.1 404 Not Found');
    return false;

  }

  public function index() {

  }

}
